'use strict';

const express = require('express')
const app = express()

const products = [
  {
    "Name": "Bread",
    "Price": "4.99"
  },
  {
    "Name": "Donut",
    "Price": "5.99"
  },
  {
    "Name": "Muffin",
    "Price": "2.99"
  },
  {
    "Name": "Bagel",
    "Price": "1.99"
  },
  {
    "Name": "Breakfast Taco",
    "Price": "0.99"
  }
]



app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  let url = req.url
  res.render('index', { url })
})

app.get('/about', (req, res, next) => {
  let url = req.url
  let date = new Date()
  res.render('about', { url, date })
})

app.get('/inventory', (req, res, next) => {
  let url = req.url
  res.render('inventory', { products, url })
})

const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
