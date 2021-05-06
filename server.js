const server = require("./app.js");

server.listen(server.get("port"),()=>{
    console.log("working in port", server.get("port"));
})