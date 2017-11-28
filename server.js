
//CONFIG
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var url = mongoose.connect('./config/db').url;
var app = express();
var port =  3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Controller
var handleError = require('./controllers/all_functions').handleError;

//DB
// var db = mongoose.connection;
// db.on('error', function(err){
//   console.log('There is an error in connecting database: ' + err);
//   return;
// });

// db.on('open', function(err){
//   if(err){
//     handleError(err);
//   }
// });

var User = require('./models/user');
var Pinterest = require('./models/pinterest');

//APP
app.get('/', function(req, res){
    res.render('main', {
      title: 'Main Page'
    });
})
app.listen(port, function(err){
    if(err){
      handleError(err);
    }
    console.log("Listening on port 3000");
});

