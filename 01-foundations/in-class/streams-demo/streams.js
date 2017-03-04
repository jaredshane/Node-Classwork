// const { createReadStream } = require('fs')
//
// const readStream = createReadStream('names.txt')
//
// // readStream.pipe(process.stdout);
//
// readStream.on('data', (buffer) => {
//   readStream.pause()
//   process.stdout.write(buffer.toString())
// })
//
// const timer = setInterval(() => readStream.resume(), 2000)
//
// readStream.on('end', () => {
//   clearInterval(timer)
// })

const { Readable, Writable, Transform } = require('stream')

const readStream = Readable()
const writeStream = Writable()
const transformStream = Transform()

let i = 0

readStream._read = () => {
  if (i > 100) {
    readStream.push(null)
  } else {
    setTimeout( () => readStream.push(`${i++}`), 50)
  }
}

transformStream._transform = (buffer, encoding, done) => {
  setTimeout( () => done(null, `${(Number(buffer) *2)}`), 1000)
}

writeStream._write = (buffer, encoding, done) => {
  process.stdout.write(`${buffer}\n`)
  setTimeout(done, 500)
}

readStream.pipe(transformStream).pipe(writeStream)
