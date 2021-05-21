const getTweets = require('./getTweets');
const express = require('express');
const app = express();
var path = require("path");
var bodyParser = require('body-parser');
const userFiles = '.'

app.get('/', async (req, res)=> {
  const tweetsFound = await getTweets.searchTweets();
  res.json(tweetsFound);

});

app.listen(8000, () => console.log('ta on'));



