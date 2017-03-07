const fs = require('fs');

const data = fs.readdirSync('/');
console.log('data:', data);

console.log("this comes after");
