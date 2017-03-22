'use strict';

const { assert: { isFunction, isArray, deepEqual, equal } } = require('chai');
const { getChildNames, getToysByChild, giveToysToChild } = require('../lootbag.js')

describe('lootBag', () => {
  describe('getChildNames', () => {
    it('should be a function', () => {
      isFunction(getChildNames)
    })
    it('should return an array', () => {
      return getChildNames()
        .then( (data) => {
          isArray(data)
        })
    })
  });
  describe('getToysByChild', () => {
    it('should be a function', () => {
      isFunction(getToysByChild)
    })
    it('should return an array', () => {
      return getToysByChild()
        .then( (data) => {
          isArray(data)
        })
    })
    it('should return an array of objects equal to expected', () => {
      let expected = [{toyName: 'Switch'}, {toyName: 'money'}, {toyName: 'car'}]
      return getToysByChild('Mike')
        .then( (data) => {
          deepEqual(expected, data)
        })
    })
  })
  describe('giveToysToChild', () => {
    it('should be a function', () => {
      isFunction(giveToysToChild)
    })
    it('should verify that the toy was added', () => {
      let expected = "Toy Added"
      // equal(expected, giveToysToChild())
    })
  })

});
