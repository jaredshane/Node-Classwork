const fs = require('fs');

let tomString = '{ "name": "Tom" }'

fs.writeFile('tom.json', tomString)
