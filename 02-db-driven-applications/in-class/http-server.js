const { readFile } = require('fs');
const { createServer } = require('http');
const server = createServer()

server.on('request', ({ url, method, headers }, res) => {
  // console.log("request method", req.method);
  // console.log("req.url", req.url);
  // console.log("req.headers", req.headers);
  // res.writeHead(200, {'useless-message': 'Hey hey hey'})
  // res.write('Hello, World!')
  // res.end('Hello, World!');

  //respond with HTML file
  // readFile('index.html', (err, buff) => {
  //   res.end(buff)
  // })

  const path = url.slice(-1) === '/'
  ? url.slice(1).concat('index.html')
  : url.slice(1)

  console.log('Request received for: ', path)

  readFile(path, (err, buff) => {
    if (err) {
      res.statusCode = 404
      console.log('response', res)
      return res.end('not found\n')
    }
    res.end(buff)

  })

})





server.listen(8080)
