const fs = require('fs');

// const data = fs.readFileSync('sample.txt','utf-8');
// console.log(data);

fs.readFile('sample.txt','utf-8', (err,data) => {
console.log(data);
});
console.log('after the data');