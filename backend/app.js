var express = require('express');
var app = express();

//Import the mongoose module
var mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

//Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/database1', option).then(function(){
    //connected successfully
    console.log('Successfully connected to database');
}, function(err) {
    //err handle
    console.log('Not connected to database ' + err);
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var async = require('async')
/*--------------------------Prueba--------------------------------------*/
app.get('/', function (req, res) {
  res.send('Hello World!');
});


/*--------------------------Levanto la app--------------------------------------*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
