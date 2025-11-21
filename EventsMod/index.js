const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("saymyname", () =>{
//     console.log("your name is SSN");
// });
// event.on("saymyname", () =>{
//     console.log("your name is Sandesh");
// });
// event.on("saymyname", () =>{
//     console.log("your name is Niv");
// });

event.on("checkpage",(sc,mg)=>{
    console.log(`Status Code is ${sc} and the page is ${mg}`);
});

event.emit("checkpage",200,"ok");
// event.emit("saymyname",200,"ok");