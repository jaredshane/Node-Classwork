"use strict";

const { assert: {isFunction, isNumber, equal}  } = require("chai");

const calc = require('../lib/calc.js');

describe('calc', () => {
  it('should be a function', () => {
    isFunction(calc);
  })

  it('should return a number', () => {
    isNumber(calc(2, "plus", 4))
  })

  it('should be 5', () => {
    equal(calc(1, "plus", 4), 5)
  })

  it('should be 10', () => {
    equal(calc(20, "subtract", 10), 10)
  })

  it('should be 15', () => {
    equal(calc(3, "multiply", 5), 15)
  })

  it('should be 5', () => {
    equal(calc(10, "divide", 2), 5)
  })
})
