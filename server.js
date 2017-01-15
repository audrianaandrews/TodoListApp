const express = require('express');
const bodyParser= require('body-parser')
const app = express()
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient
var loginInfo = require('./connect.json')
var mongoose = require('mongoose')
var path = require('path')
var cookieId = mongoose.Types.ObjectId().toString();
//app.use(express.static(path.join(__dirname, '')));

/*MongoClient.connect('mongodb://'+ loginInfo.username + ':'+ loginInfo.password + '@ds053728.mlab.com:53728/star-wars-quotes', (err, database) => {
  if (err) return console.log(err);
  db = database;
/*app.listen(3000, () => {
    console.log('listening on 3000')
  })
})*/
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());

app.get('/', (req, res) =>{
    //get a cookie
    var cookies = req.cookies;
    if(cookies.todo_test){
        console.log("Cookie is already there.")
        //res.sendFile('./public/index.html')
    }
    else{
        //create a new cookie
        res.cookie('todo_test' , cookieId, {expire : new Date() + 9999}).send('Cookie is set');
        console.log('Cookie added.')
    }
    
})

app.listen(3000, () => {
    console.log('listening on 3000')
  })

/*app.post('/add-task', (req, res) => {
  db.collection('quotes').save({'_id': cookieId, 'task':req.body.task}, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})*/