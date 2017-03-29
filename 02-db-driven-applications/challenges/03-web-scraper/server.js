'use strict';

const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()

app.get('/scrape', (req, res) => {

   // The URL we will scrape from
  url='http://www.imdb.com/title/tt0317248/'
  // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
  request(url, (error, response, html) => {
    // First we'll check to make sure no errors occurred when making the request
    if (!error) {
       // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      let $ = cheerio.load(html)
      // Finally, we'll define the variables we're going to capture
      let title, release, rating
      let json = { title = '', release: '', rating: ''}

    }
  })



})


const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})

module.exports = app
