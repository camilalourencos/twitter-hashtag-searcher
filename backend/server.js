const getTweets = require('./getTweets');

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  const tweetsFound = getTweets.searchTweets();
  res.json(tweetsFound);

});

app.listen(8000, () => console.log('ta on'));

