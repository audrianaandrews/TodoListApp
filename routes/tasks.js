const express = require('express');
const bodyParser= require('body-parser')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const MongoClient = require('mongodb').MongoClient
var router = express.Router();
//var loginInfo = require('./connect.json')
var mongoose = require('mongoose')
var path = require('path')
var cookieId = mongoose.Types.ObjectId().toString();

/*MongoClient.connect('mongodb://'+ loginInfo.username + ':'+ loginInfo.password + '@ds111529.mlab.com:11529/tasks', (err, database) => {
  if (err) return console.log(err);
  db = database;
})*/
MongoClient.connect('mongodb://'+ process.env.MONGO_USERNAME + ':'+ process.env.MONGO_PASSWORD + '@ds111529.mlab.com:11529/tasks', (err, database) => {
  if (err) return console.log(err);
  db = database;
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Add a task
router.post('/tasks', (req, res, next) => {
    var cookievalue = req.cookies.task;
    console.log(cookievalue);
    if(cookievalue  === undefined){
        db.collection('tasks').save({'_id': cookieId, 'userTasks':[req.body.taskText]}, (err, result) => {
          if (err) return console.log(err)
          console.log('User added to database.')

          //create a new cookie
          res.cookie('task' , cookieId, {maxAge : new Date(253402300000000)});
          res.json({'latestTask':req.body.taskText});
          return next();
        })
    }
    else{
      db.collection('tasks').update({'_id': cookievalue},{$push:{'userTasks':req.body.taskText}}, (err, result) => {
        if (err) return console.log(err)
        console.log('Database updated.')
        res.json({'latestTask':req.body.taskText});
      })
    }

})

//Get all tasks when site loads
router.get('/tasks', (req, res) =>{
  var cookievalue = req.cookies.task;
  if(cookievalue  != undefined){
    db.collection('tasks').find({'_id': cookievalue}).toArray().then(function(tasks) {
      console.log(tasks[0]);
      res.json(tasks[0]);
    }).catch(function () {
     console.log("Promise Rejected");
});
  }
})

/* PUT/UPDATE a Todo */
router.put('/tasks/:id', function(req, res, next) {
  var cookievalue = req.cookies.task;
  var indexNumber = parseInt(req.params.id);
  if(cookievalue  != undefined){
    db.collection('tasks').find({'_id': cookievalue}).toArray().then(function(tasks) {
      var taskArray = tasks[0].userTasks;
      taskArray[indexNumber] = req.body.taskText;
      db.collection('tasks').update({'_id': cookievalue},{$set:{'userTasks':taskArray}}, (err, result) => {
        if (err) return console.log(err)
        console.log('Database updated.')
        res.json({updated: "Succeeded"});
      })
    }).catch(function () {
       console.log("Promise Rejected");
  });
  }
});

/* DELETE a Todo */
router.delete('/tasks/:id', function(req, res) {
   var cookievalue = req.cookies.task;
   var indexNumber = parseInt(req.params.id);
   if(cookievalue  != undefined){
     db.collection('tasks').find({'_id': cookievalue}).toArray().then(function(tasks) {
       var taskArray = tasks[0].userTasks;
       taskArray.splice(indexNumber, 1);
       db.collection('tasks').update({'_id': cookievalue},{$set:{'userTasks':taskArray}}, (err, result) => {
         if (err) return console.log(err)
         console.log('Database updated.')
         if(taskArray == 0){
           console.log('No tasks left.');
         }
       })
       res.json(taskArray);
     }).catch(function () {
         console.log("Promise Rejected");
    });
   }
});

module.exports = router;
