const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.send("hello from SSN");
});

app.get("/about", (req,res) => {
    res.send("hello from about");
});

// app.listen(8000,() =>{
//     console.log("Listening the port at 8000");
// });
