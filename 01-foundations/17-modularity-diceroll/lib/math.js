"use strict";

// Maybe should use Number(bottom) or unary, etc to make sure args are actual numbers
const randomInt = (bottom, top) => {
  if (!top) {
      top = bottom,
      bottom = 1
  }
  return Math.floor((Math.random() * (+top - +bottom + 1)) + +bottom);
}
module.exports = { randomInt }
