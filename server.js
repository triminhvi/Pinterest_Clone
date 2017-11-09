var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;

app.get('/', function(req, res){
  res.send('this is home page');
});

app.listen(port, function(req, res){
  console.log('listening on port 3000')
});