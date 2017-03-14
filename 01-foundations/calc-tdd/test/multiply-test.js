'use strict';

const { assert: {isNumber, equal}  } = require("chai");
const multiply = require('../lib/multiply')

describe('multiply', () => {
  it('should return a number', () => {
    isNumber(multiply(2, 3), 'number')
  })
  it('number should be 6', () => {
    equal(multiply(2,3), 6)
  })
})
