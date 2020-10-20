/*const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');
const repl = require('repl')
//const chalk = require('chalk');
var username = process.argv[2];

repl.start({
  prompt: '',
  eval: (username, msg) => {
    //console.log(`${username} : ${cmd}`);
    socket.send(`${username}: ${msg}`);
  }
});

socket.addEventListener('open', function (event) {
  console.log(username + ":" );
  socket.send(username + ":");
});

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Reply from Server:', event.data);
});

// when disconnected from server 
socket.addEventListener('disconnect', function () {
  console.log('Disconnectd from server')
});*/

var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl')
const chalk = require('chalk');
var username = process.argv[2];

socket.on('connection', (io) => {
  console.log('connected');
  io.on('message', (evt) => {
    console.log(evt);
    io.broadcast.emit('message', evt);
  })
})

socket.on('connect', () => {
  console.log(chalk.red('=== start chatting ==='));
  
})

socket.on('message', (data) => { 
  console.log(data);
})

socket.on('disconnect', function (evt) {
  socket.emit('disconnected', evt);
});

repl.start({
  prompt: '',
  eval: (cmd) => {
    socket.send(`${username} : ${cmd}`);
  }
})
