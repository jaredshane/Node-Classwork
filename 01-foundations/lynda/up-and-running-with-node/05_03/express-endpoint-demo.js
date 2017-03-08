const express = require('express');
const app = express();
const fs = require('fs')



app.use('/message', (req, res) => {
  console.log('user requested endpoint')
  res.send('hello');
});

app.use('/users', (req, res) => {

  fs.readFile('./data1.json', 'utf-8', (err, data) => {

    res.send(data)
  });


})

app.listen(3000);
