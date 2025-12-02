const path      = require("path");
const express   = require('express');
const app       = express();

const staticPath = path.join(__dirname,'../public');
// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname,'../public'));

// To set view engine - important for dynamic content on website
app.set("view engine","hbs");

//builtin middleware (for static website)
// app.use(express.static(staticPath));

app.get("", (req,res) => {
    res.render('index',{
        channelname:"SSN",
    });
});

app.get("/", (req,res) => {
    res.send("hello from SSN");
});

app.get("/about", (req,res) => {
    res.send("hello from about");
});

app.listen(8000,() =>{
    console.log("Listening the port at 8000");
});