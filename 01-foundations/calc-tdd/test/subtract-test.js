'use strict';

const { assert: {isNumber, equal}  } = require("chai");
const subtract = require('../lib/subtract')


describe('subtract', () => {
  it('should return a number', () => {
    isNumber(subtract(8, 2), 'a number')
  })
  it('should return 6', () => {
    equal(subtract(8, 2), 6)
  })
});
