fs = require('fs');

const phoneNumber = (err, data) => {
	console.log('data:', data);
}

fs.readdir('/', phoneNumber);

console.log("this comes after");
