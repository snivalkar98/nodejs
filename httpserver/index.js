const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`,"utf-8");
const ojdData = JSON.parse(data);

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url == "/")
    {
        res.end('Hello from other side');
    }
    else if(req.url =='/about')
    {
        res.end('Hello from about side');
    }
    else if(req.url =='/contact')
    {
        res.write('Hello from contact side')
        res.end();
    }
    else if(req.url =='/userapi')
    {
        // fs.readFile(`${__dirname}/UserAPI/userapi.json`,"utf-8", (err,data)=>{
        //     console.log(data);
        //     const ojdData = JSON.parse(data);
        // });
        // res.write('Hello from userapi side');
        res.writeHead(200,{"content-type":"application/json"})
        res.end(ojdData[43].name);
    }
    else
    {
        res.writeHead(404, { "Content-type":"text/html"});
        res.end('<h1>404 Page not found</h1>');
    }
});
//127.0.0.1
// server.listen(8000,"127.0.0.1",()=>
// {
//     console.log("Listening on the port no 8000");
// })
