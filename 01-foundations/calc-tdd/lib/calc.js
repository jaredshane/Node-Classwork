"use strict";

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let calc = (num, operator, num2) => {
  num = parseInt(num)
  num2 = parseInt(num2)
  if (operator == "plus"){
    // console.log(add(num, num2))
    return add(num, num2);
  } else if (operator == "subtract") {
    // console.log(subtract(num, num2))
    return subtract(num, num2);
  } else if (operator == "multiply") {
    // console.log(multiply(num, num2))
    return multiply(num, num2)
  } else if (operator == "divide") {
    // console.log(divide(10, 2))
    return divide(10, 2)
  }
};



module.exports = calc;
