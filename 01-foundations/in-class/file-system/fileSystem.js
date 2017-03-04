// Blocking example

// const { readFileSync } = require('fs');
//
// const fileArg = process.argv[2];
//
// if (fileArg) {
//   try {
//     const data = readFileSync(fileArg)
//     // console.log("data", data.toString())
//     process.stdout.write(data)
//   } catch (e) {
//     console.log("error", e.stack)
//   }
// } else {
//   process.exit()  ;
// }
//
// console.log('Synchronous version')

// Non-blocking example

const { readFile } = require('fs');

const fileArg = process.argv[2];

if (fileArg) {
  readFile(fileArg, (err, data) => {
    if (err) return console.error(err)
    process.stdout.write(data);
  })
} else {
  process.exit()
}

console.log("This is the async version");
