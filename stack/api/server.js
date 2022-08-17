import express from 'express';
import pack from './package.json' assert {type: "json"};
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT

var app = express();

app.get("/", function (req, res) {
  console.log('slash request')
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ simple: 'data' }))

});

app.get("/version", function (req, res) {
  console.log('version request')
  res.send('API version: ' + pack.version);
});


var server = app.listen(port, function () {
  console.log("Server is running on port", port);
});
