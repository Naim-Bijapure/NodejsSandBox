const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const app = express()
const server = http.createServer(app);
const io = socketIo(server);

let admin = 1;

io.on("connection", socket => {
  console.log("New client connected");

  socket.emit('msg','cool data is send from server');

  socket.on("disconnect", () => console.log("Client disconnected"));
});

app.get('/',function (req,res) {
  
  admin++;
  res.send('cool'+admin);

});

server.listen(port, () => {
  admin++;
  console.log('server is listining',admin)
})
 
