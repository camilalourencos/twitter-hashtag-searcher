const getTweets = require('./getTweets');
const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  const tweetsFound = getTweets.searchTweets();
  res.json(tweetsFound);

});

http.createServer(app).listen(8000, () => console.log('ta on'));


