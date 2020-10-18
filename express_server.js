var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.json())

const port = 8001;

var led0 = "LOW";

const server = app.listen(port, () => {
    console.log("Listening....")
})



app.get("/", (req, res) => {
    res.send(led0);
})

app.post("/", (req, res) => {
    data = req.body;
    if (data.type == "LED") {
        led0 = data.todo;
    }
    res.send("Done!");
})


// var io = require("socket.io")(server);

// io.on("connection", socket => {
//     console.log("Connected");

//     // console.log(socket)

//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//       });

//     socket.on('message', function (msg) {
//         data = JSON.parse(msg);
//         if (data.type == "LED") {
//             led0 = data.todo;
//         }
//         console.log(led0)
//     });
// })
