'use strict';
const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()
app.get('/scrape', (req, res) => {

   // The URL we will scrape from
  let url = 'http://www.imdb.com/title/tt0317248/'
  // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
  request(url, (error, response, html) => {
    // First we'll check to make sure no errors occurred when making the request
    if (!error) {
      var title, release, rating
      var json = { title: '', release: '', rating: ''}
       // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      let $ = cheerio.load(html)
      // Finally, we'll define the variables we're going to capture

      // We'll use the unique header class as a starting point.
      $('.title_wrapper').filter(() => {
        // Let's store the data we filter into a variable so we can easily see what's going on.
        let data = $(this)
        console.log('data', data)
        // console.log(data.children().last().children().last().text())
        // Utilizing jQuery we can easily navigate and get the text by writing the following code:
        title = data.children().first().text();
        release = data.children().last().children().last().text();
        // Once we have our title, we'll store it to the our json object.
        json.title = title;
        json.release = release
      })
      $('.ratingValue').filter(() => {
        let data = $(this);

        rating = data.children().first().children().first().text();
        json.rating = rating;
        // console.log("json", json)
      });
    } //if

    else {
      console.log(error)
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), (err) => {
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')



  }) //request



})


const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})

module.exports = app
