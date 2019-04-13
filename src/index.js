var app = require('express')();
var http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);

 
let htmlPath= path.resolve(__dirname,'../public');

app.get('/', function(req, res){
res.sendFile(htmlPath + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message',(msg)=>{
      
      io.emit('chat message',msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000',htmlPath);
});