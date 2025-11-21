const fs = require("fs");

// fs.writeFile("sample.txt","Test Dummy text",
//     (err) =>{
//         console.log("DONE"); 
//         console.log(err); 
//     }
// );
// fs.appendFile("sample.txt","New Dummy Text",
//     (err) =>{
//         console.log("DONE"); 
//         console.log(err); 
//     }
// );

// fs.readFile('sample.txt', 'utf-8', (err,data)=> 
//     {
//         console.log(data);
//     }
// );

fs.writeFile('./ssn/bio.txt','My name is SSN',(error) => {
    console.log('Success');  
});