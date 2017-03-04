const router = require('./router');

//Problem: Need a simple way to look at user's badge count and JS points from a web browser
//Solution: Use node.js to perform the profile lookups and serve our templates via http


//Create webserver

const http = require('http');

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
  // response.end('Hello World\n');
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(3000, console.log('hello'));
