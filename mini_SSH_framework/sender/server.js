const WebSocket = require('ws');
const fs = require('fs');
const port = 3000;
const wss = new WebSocket.Server({ port });

console.log(`Server listening to the port: ${port}`);
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received Encrypted FileNames from Client: ${message}`);
    var receivedObj = JSON.parse(message);
    if (receivedObj.command == 'LIST') {
      var decryptedFileNames = decrypt(receivedObj.filenames);
      console.log("Decrypted FileNames:" + decryptedFileNames);
      ws.send(decryptedFileNames);
    } else {
      console.log("Invalid Command, Cannot Decrypt...!!!");
    }
  })
})
// when server disconnects from user 
wss.on('disconnect', () => {
  console.log('Disconnected from user');
});


function decrypt(receivedObj) {
  var key = fs.readFileSync(__dirname + '/mini.ssh', 'utf8');
  var decryptedText = [];
  for (let i = 0; i < receivedObj.length; i++) {
    var fileName = receivedObj[i];
    var fileNameCharArray = fileName.split(key);
    var decryptedFileNames = fileNameCharArray.join('');
    decryptedText.push(decryptedFileNames);
  }
  return JSON.stringify(decryptedText);
}