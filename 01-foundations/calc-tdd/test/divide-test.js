'use strict';

const { assert: {isNumber, equal}  } = require("chai");
const divide = require('../lib/divide')

describe('divide', () => {
  it('should return a number', () => {
    isNumber(divide(8, 2))
  })
  it('should be 4', () => {
    equal(divide(8, 2), 4)
  })
})
