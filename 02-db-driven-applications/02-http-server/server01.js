const { readFile } = require('fs')
const { createServer } = require('http')
const server = createServer()

server.on('request', (req, res) => {

  readFile('index.html', (err, buff) => {
    if (err) {
      console.log('err', err)
      return res.end()
    } else {
      res.end(buff)
    }

  })
})

server.listen(8000)
