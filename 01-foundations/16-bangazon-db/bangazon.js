'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');


//create tables for customers, paymentoptions, products, orders, and orderlineitems

db.run('CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY, customername TEXT, streetaddress TEXT, city TEXT, state TEXT, postalcode INT, phonenumber INT)');

db.run('CREATE TABLE IF NOT EXISTS paymentoptions(id INTEGER PRIMARY KEY, paymentoptionname TEXT, paymentoptionaccountnumber INT)')

db.run('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, productname TEXT, productprice INT)')

db.run('CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY, customerid INT, paymentoptionsid INT, orderpaid INT, FOREIGN KEY(customerid) REFERENCES customers(id), FOREIGN KEY(paymentoptionsid) REFERENCES paymentoptions(id))')

db.run('CREATE TABLE IF NOT EXISTS orderlineitems(id INTEGER PRIMARY KEY, orderid INT, productid INT, FOREIGN KEY(orderid) REFERENCES orders(id), FOREIGN KEY(productid) REFERENCES products(id))')


//function to drop employees cause I made a mistake and forgot a field in it.

const dropCustomers = () => {
  db.run(`DROP TABLE customers`)
};

// dropCustomers();

// function to drop products table
const dropProducts = () => {
  // db.run('DROP TABLE products'),
  db.run('DROP TABLE orderlineitems')
  db.run('DROP TABLE orders')
  // db.run('DROP TABLE paymentoptions')
};

// dropProducts();

// populate the customers table

const populateCustomers = () => {
  const { list } = require('./data/customers.json')
  list.forEach(each => {
    db.run(`INSERT INTO customers VALUES (
      ${each.id}, '${each.name}', '${each.address}', '${each.city}', '${each.state}', ${each.postalcode}, ${each.phonenumber}
    )`)
  })
};

// populateCustomers();

// populate the proucts table
const populateProducts = () => {
  const { list } = require('./data/products.json')
  list.forEach(({ id, productname, productprice }) => {
    db.run(`INSERT INTO products VALUES (
      null, '${productname}', ${productprice}
    )`)
  })
};

// populateProducts();

//populate the paymentoptions table

const populatePaymentOptions = () => {
  const { list } = require('./data/paymentoptions.json')
  list.forEach( ({ paymentoptionname, paymentoptionaccountnumber }) => {
    db.run(`INSERT INTO paymentoptions VALUES (
      null, '${paymentoptionname}', '${paymentoptionaccountnumber}'
    )`)
  })
};

// populatePaymentOptions();

const populateOrders = () => {
  const { list } = require('./data/orders.json')
  list.forEach( ({id, customerid, paymentoptionsid, orderpaid }) => {
    db.run(`INSERT INTO orders VALUES (null, ${customerid}, ${paymentoptionsid}, ${orderpaid})`)

  })
}

// populateOrders();
