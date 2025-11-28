const express   = require("express");
const app       = express();
const PORT      = 8000;
app.get("/", (req,res)=>
{
    res.status(200).send("Welcome my home page");
});
app.get("/about", (req,res)=>
{
    res.send("Welcome my about page");
});
app.get("/contact", (req,res)=>
{
    res.status(200).send("Welcome my contact page");
});
app.get("/temp", (req,res)=>
{
    res.status(200).send("Welcome my temperature page");
});

app.listen(PORT, () => 
{
    console.log(`Listening to the port no ${PORT}`);
});