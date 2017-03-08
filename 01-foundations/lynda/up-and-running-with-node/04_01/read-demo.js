const fs = require('fs');
const data = require('./data1.json');

console.log(data.name);

fs.readFile('./data1.json', 'utf-8', (err, data) => {

    data = JSON.parse(data);
    console.log(data.name);
});
