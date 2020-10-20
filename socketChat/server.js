/*const WebSocket = require('ws');
const port = 3000;
const wss = new WebSocket.Server({ port });

console.log(`Server listening to the port: ${port}`);
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received Message from Client: ${message}`);
    var reply;
    ws.send("Reply to Client:" + reply);
  })
})*/

const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;
const repl = require('repl');
const chalk = require('chalk');
var  username = process.argv[2];

io.on('connection', (socket) => {
  //console.log('connected');
  socket.on('message', (evt) => {
    console.log(evt);
    socket.broadcast.emit('message', evt);
  })
})
io.on('connect', () => {
  console.log(chalk.red('=== start chatting ==='));
 
})
io.on('message', (data) => {
  console.log(data);
})
repl.start({
  prompt: '',
  eval: (cmd) => {
    io.send(`${username} : ${cmd}`);
  }
})
io.on('disconnect', (evt) => {
  console.log('Some people left', evt);
})


http.listen(port) //() => console.log(`server listening on port: ${port}`))