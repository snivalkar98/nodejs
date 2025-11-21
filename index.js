const fs = require("fs");
// fs.writeFileSync('read.txt',"hello world");

// fs.writeFileSync('read.txt',"hello world");

// fs.appendFileSync('read.txt',"SSN");


// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);


// org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync('read.txt','readwrite.txt');

// fs.rm('readwrite.txt');

// fs.writeFile('./ssn/bio.txt','My name is SSN',(error) => {
//     console.log('Success');  
// });

// fs.appendFile('./ssn/bio.txt', 'I am web dev', (err) => {
//     console.log('Data is appended');
// });

// fs.readFile('./ssn/bio.txt', 'utf-8', (err,data) => {
//     console.log(data);
// });

// fs.rename('./ssn/bio.txt', './ssn/mybio.txt', (err)=> {
//     console.log('done');
// });

// fs.unlink('./ssn/mybio.txt' , (err) => {
//     console.log('deleted');
// });

fs.rmdir('./ssn', (err) =>{
    console.log('deleted folder');
});