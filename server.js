const express = require('express');
const bodyParser= require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()
var path = require('path')

var index = require('./routes/index');
var tasks = require('./routes/tasks');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/', tasks);

app.listen(3000, () => {
console.log('listening on 3000')
})

module.exports = app;
