'use strict';

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

const names = ['Jared', 'John', 'James', 'Joe']

app.get('/', (req, res, next) => {
  res.render('index', {subtitle: 'This came from my JS data', names, loggedIn: false})
})

app.get('/article', (req, res, next) => {
  res.render('article', {subtitle: 'This came from my JS data', names, loggedIn: true})
})


const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
