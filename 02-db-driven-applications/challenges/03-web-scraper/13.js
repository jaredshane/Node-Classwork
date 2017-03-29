'use strict';
const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()

const { argv: [,, args] } = process



// app.get('/scrape', (req, res) => {
//   let url = 'www.google.com/'
//
//   request(args, (error, response, html) => {
//     if (!error) {
//       let $ = cheerio.load(html)
//
//       $('title').each((i, element) => {
//          let data = $(this);
//         console.log(element.children[0].data);
//       })
//
//     }
//
//
//     res.send('Done')
//   })
// })

const getData = (req, res) => {
  // let url = 'www.google.com/'

  request(args, (error, response, html) => {
    if (!error) {
      let $ = cheerio.load(html)

      $('title').each((i, element) => {
         let data = $(this);
        console.log(element.children[0].data);
      })

    }

  })
}

getData()


// const port = process.env.PORT || 3000
// app.set('port', port)
// app.listen(port, () => {
//   console.log(`App listening on port: ${port}`)
// })
//
// module.exports = app
