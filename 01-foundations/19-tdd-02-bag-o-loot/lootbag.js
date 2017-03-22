'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bagoloot.sqlite', (res) => {
  console.log(res)
});
const { children } = require('./data/children');
const { toys } = require('./data/toys');
const { bag } = require('./data/bag')

const createTables = () => {
  db.run('CREATE TABLE IF NOT EXISTS child(id INTEGER PRIMARY KEY, childName TEXT, delivered INT)');
  db.run('CREATE TABLE IF NOT EXISTS toys(id INTEGER PRIMARY KEY, toyName TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS bag(id INTEGER PRIMARY KEY,  childID INT, toyID INT, FOREIGN KEY(childID) REFERENCES child(id), FOREIGN KEY(toyID) REFERENCES toys(id))');
};

// createTables();

const dropEverything = () => {
  db.run('DROP TABLE child');
  db.run('DROP TABLE toys');
  db.run('DROP TABLE bag');
}

// dropEverything()

//functions to add data from the data/*.js files I had.

// const populateChildren = () => {
//   children.forEach(({ name, delivered }) => {
//     db.run(`INSERT INTO child VALUES (null, '${name}', ${delivered})`)
//   });
// };

// populateChildren();

// const populateToys = () => {
//   toys.forEach(({ name }) => {
//     db.run(`INSERT INTO toys VALUES(null, '${name}')`)
//   });
// };

// populateToys();

// const populateBag = () => {
//   bag.forEach( ({childID, toyID}) => {
//     db.run(`INSERT INTO bag VALUES(null, ${childID}, ${toyID})`)
//   })
// }

// populateBag();

module.exports.getChildNames = () => {
return new Promise( (resolve, reject) => {
  db.all(`SELECT childName from child WHERE delivered = 1`, (err, data) => {
    // console.log(data)
    resolve(data)
    })
  })
};

module.exports.getToysByChild = (name) => {
  return new Promise ( (resolve, reject) => {
    db.all(`SELECT toys.toyName FROM toys LEFT JOIN bag ON bag.toyID = toys.id LEFT JOIN child ON child.id = bag.childID WHERE child.childName = '${name}'`, (err, data) => {
    console.log(data)
    resolve(data)
    })
  })
}

module.exports.giveToysToChild = () => {
  return new Promise ( (resolve, reject) => {
    db.run(`INSERT INTO bag VALUES (null, 2, 3)`, (err, data) => {
      console.log(data)
      resolve(data)
    })
  })
}
