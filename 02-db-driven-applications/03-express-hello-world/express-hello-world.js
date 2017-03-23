'use strict';

const express = require('express')
const app = express()
//shout out to Callan, I was just looking at this https://github.com/morecallan/e3-github-commit-scraper/blob/master/server.js
//before starting on this exercise and it helped me figured out the PORT thing.
const PORT = process.env.PORT || 8080;


app.get('/', (req, res, next) => {
  let date = new Date()
  res.send('Hello World! ' + date.toISOString())
})

app.listen(PORT)
