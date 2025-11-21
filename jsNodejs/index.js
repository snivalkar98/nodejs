const fs = require('fs');

const bioData = {
    name:"SSN",age:26,channel:"SSN Tech"
}

// console.log(bioData.channel);

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// fs.writeFile('json1.json',jsonData, (err)=>{
//     console.log('Done');
// });

fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});
// const objData = JSON.parse(jsonData);
// console.log(objData.age);