'use strict';

const sqlite3 = require('sqlite3').verbose();

// Create a database that is saved on disk.

const db = new sqlite3.Database('example.sqlite');

const dropEmployees = () => {
  db.run('DROP TABLE employees')
}

// dropEmployees()

// Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the employees table.

// const employeeArray = [
//   {
//     "id": "1", "firstName": "Michael", "lastName": "Scott", "jobTitle": "Manager", "address": "555 Street Scranton, PA 55555"
//   },
//   {
//     "id": "2", "firstName": "Dwight", "lastName": "Schrute",
//     "jobTitle": "Assistant to the Regional Manager", "address": "555 Street Scranton, PA 55555"
//   },
//   {
//     "id": "3", "firstName": "Holly", "lastName": "Flax",
//     "jobTitle": "QA", "address": "555 Street Scranton, PA 55555"
//   },
//   {
//     "id": "4", "firstName": "Jim", "lastName": "Halpert",
//     "jobTitle": "Sales", "address": "555 Street Scranton, PA 55555"
//   },
//   {
//     "id": "5", "firstName": "Pam", "lastName": "Beesly",
//     "jobTitle": "Sales", "address": "555 Street Scranton, PA 55555"
//   },
//   {
//     "id": "6", "firstName": "Stanley", "lastName": "Hudson", "jobTitle": "Sales", "address": "555 Street Scranton, PA 55555"
//   }
// ]

// Create a table titled employees with the following columns:
//
// id, firstName, lastName, jobTitle, address

// db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)');


// Insert each of the employee objects into the database.

// const populateEmployees = () => {
//   employeeArray.forEach(({id, firstName, lastName, jobTitle, address}) => {
//      db.run(`INSERT INTO employees VALUES (${id}, '${firstName}', '${lastName}', '${jobTitle}', '${address}')`);
//   })
// };
// populateEmployees();


// Write a statement to query the database and console.log() all employee records.

// db.all('SELECT * FROM employees', (err, res) => {
//   if (err) {
//     return console.log('error!', err)
//   }
//
//   console.log(res)
//
// });

// Write a statement to query the database and console.log() each employees jobTitle.
//
// db.each('SELECT jobTitle FROM employees', (err, { jobTitle }) => {
//   if (err) {
//     return console.log('there was an error', err)
//   }
//
//   console.log(jobTitle)
//
// });

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
//
// db.each('SELECT firstName, lastName, address FROM employees', (err, { firstName, lastName, address }) => {
//   if (err) {
//     console.log('error!', err)
//   }
//
//   console.log(firstName, lastName, address)
//
// })

//Bonus

// Instead of using an array in the .js file, create a JSON file of employees to require into the js file. Use this to populate the table.


const populateEmployees = () => {
  const employeesData = require('./employees.json')
  employeesData.forEach(({id, firstName, lastName, jobTitle, address, salary}) => {
     db.run(`INSERT INTO employees VALUES (${id}, '${firstName}', '${lastName}', '${jobTitle}', '${address}', ${salary})`);
  })
};
// populateEmployees();


// Your friend has decided that they want to add a salary column to the employees table. Make sure to add a salary key value pair to each of the employee objects. Then drop the existing employees table, update the schema to accept a salary column, and repopulate the table.

db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)');

// Write a statement that returns all employees of a specified jobTitle.

db.each('SELECT jobTitle, firstName, lastName FROM employees WHERE jobTitle = "Sales"', (err, { jobTitle, firstName, lastName }) => {
  if (err) {
    return console.log('error', err)
  }
  console.log(firstName, lastName, jobTitle)


})
