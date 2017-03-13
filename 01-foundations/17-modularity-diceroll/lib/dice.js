"use strict";

const { randomInt } = require("./math");

const roll = (diceNotation) => {
  let [rollCount, sides] = diceNotation.split("d"),
      diceTotal = 0;

  for (let i = 0; i < rollCount; i++) {
    diceTotal += randomInt(1, sides)
  }
  return diceTotal;
};

const toDiceNotation = (diceObj) => `${diceObj.count}d${diceObj.sides}`

module.exports = {roll, toDiceNotation};
