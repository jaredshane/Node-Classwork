"use strict";



const { argv: [,, arg, arg2, arg3]} = process

const sum = require('./calc.js')(arg, arg2, arg3)

console.log(sum)
