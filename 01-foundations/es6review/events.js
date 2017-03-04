const { EventEmitter } = require('events')
const emitter = new EventEmitter()

//create an event handler

let connectHandler = () => {
  console.log('connection successful')
  //fire the data received events
  emitter.emit('data_received')
}


//Bind the connection event with the handler

emitter.on('connection', connectHandler)

// Bind the data_received event with the anonymous function
emitter.on('data_received', () => {
  console.log('data received success')
})

//Fire the Connection event
emitter.emit('connection')

console.log('Program Ended')
