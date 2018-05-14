require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', routes);

app.get('/', function(req, res){
   res
     .status(200)
     .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res){
    res
      .status(200)
      .json({"jsonData":true});
});

app.get('/file', function(req, res){
    res
      .status(200)
      .sendFile(path.join(__dirname, 'app.js'));
});

app.listen('3000',function(){
    console.log('server running at 3000');
});