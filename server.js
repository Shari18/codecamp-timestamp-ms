// server.js
// where your node app starts

// init project
var express = require('express');
var url = require('url');
var app = express();

var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

app.use(function(request,response){
  var time = decodeURI(url.parse(request.url,true).pathname.substr(1));
  if(!isNaN(Number.parseInt(time))){
    time = Number.parseInt(time)*1000;
  }
  if(isNaN(Date.parse(time)) && isNaN(Number.parseInt(time))){
    response.send({unix : null,natural:null});
  }
  var date = new Date(time);
  var unix = date.valueOf();
  var natural = months[date.getMonth()]+" "+date.getDate() + " , "+date.getFullYear();
  
  response.send({unix,natural});
});

app.listen(3000);

