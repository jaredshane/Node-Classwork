#!/usr/bin/env node


// let [,, ...arg] = process.argv;
// console.log(arg)
//
// if (arg == "") {
//   return console.log(0)
// } else {
//   var num = parseInt(arg)
//   console.log(num)
// }


var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return console.log(acc + val);
}, 0);


//   let num = parseInt(arg)
//   let num2 = parseInt(arg2)
//   let math = () => {
//     if (arg3 == "add") {
//         return console.log(num + num2);
//     } else if (arg3 == "subtract") {
//       return console.log(num - num2)
//     } else if (arg3 == "multiply") {
//       return console.log(num * num2)
//     } else if (arg3 = "divide") {
//       return console.log(num / num2)
//     }
//   }
//
// math()
