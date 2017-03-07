'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');


const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
};

// dropEmployees();

//Creats the employees table if it doesn't exist, will not run if table exists
db.run('CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary INT, dept TEXT)');

//Ads an employee
// db.run('INSERT INTO employees VALUES (1, "Jim", "Halpert", 400000)')


const populateEmployees = () => {
  const { list } = require('./employees.json')
  list.forEach(each => {
    db.run(`INSERT INTO employees VALUES (
      ${each.id}, '${each.firstName}', '${each.lastName}', ${each.salary}, '${each.dept}'
    )`)
  })
}

// populateEmployees();

//only returns one
// db.get('SELECT * FROM employees', (err, res) => {
//     console.log(res);
// })

// db.all('SELECT * FROM employees', (err, res) => {
//   // console.log(res);
//   res.forEach(({id, first, last, dept, salary}) => {
//
//     console.log(`${first} ${last} is in the ${dept} department and their salary is ${salary}`)
//   })
// })

// db.each('SELECT * FROM employees', (err, { id, first, last, dept, salary }) => {
//   // console.log(each)
//
//       console.log(`${new Date().getMilliseconds()}
//       ${first} ${last}
//       is in the ${dept} department
//       and their salary is ${salary}`)
// })

db.all('SELECT * FROM employees WHERE salary > 50000 ORDER BY first asc', (err, res) => {
  res.forEach(({first, last, salary}) => {
    console.log(first, last, salary)
  })
})


// db.all('SELECT * FROM employees', (err, allRows) => {
//
//   const result = allRows.sort((a, b) => {
//     return (a.first > b. first) ? 1 : -1;
//   })
//   .filter(each => each.salary > 50000)
//   .map(each => `${each.first} ${each.last}s salary: ${each.salary}`)
//   console.log(result)
//
// })
