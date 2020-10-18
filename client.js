const prompt = require('prompt-sync')();
var io = require("socket.io-client");

const client = io("http://localhost:8001");


client.on("connect", () => {
    console.log("Connected")

    
    var message = prompt("Write a message : > ");
    client.emit("message", message);
    // if (message == "Q") {
    //     break;
    // }
    
})