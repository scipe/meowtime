import express from 'express'
import pack from './package.json' assert {type: "json"};

var app = express();

app.get("/", function (req, res) {
  console.log('slash request')
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ simple: 'data' }))
  // res.send(JSON);
});

app.get("/version", function (req, res) {
  console.log('version request')
  res.send('API version: ' + pack.version);
});


var server = app.listen(5000, function () {
  console.log("Server is running...");
});
