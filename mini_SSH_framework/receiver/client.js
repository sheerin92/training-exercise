const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');
const fs = require('fs');

var commandLineArgs = process.argv;
commandLineArgs.splice(0, 2);
var cmd = commandLineArgs[0];
var dirPath = commandLineArgs[1];

//To find whether the given dir path is valid or not and to continue with the process of listing the files in the directory
function getFilesFromDir() {
  try {
    var isValidDirPath = fs.statSync(dirPath).isDirectory();
    if (isValidDirPath) {
      outputFiles = walkSync(dirPath);
      emptyDirValidation(outputFiles);
      return outputFiles;
    }
  } catch (e) {
    console.log("Oops Invalid Directory");
  }
}
function emptyDirValidation(outputFiles) {
  if (outputFiles.length === 0) {
    console.log("Empty Directory");
    return;
  }
  console.log("Input File Names:" + JSON.stringify(outputFiles));
}

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function (dirPath, filelist) {
  files = fs.readdirSync(dirPath);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      filelist = walkSync(dirPath + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
}

function getFilesAndEncrypt() {
  var fileNames = getFilesFromDir();
  var encryptedFileNames = encrypt(fileNames);
  console.log("Encrypted FileNames:" + JSON.stringify(encryptedFileNames));
  sendMsgToServer(encryptedFileNames);
}

function encrypt(outputFileNames) {
  var key = fs.readFileSync(__dirname + '/mini.ssh', 'utf8');
  var encryptedText = [];
  for (let i = 0; i < outputFileNames.length; i++) {
    var fileName = outputFileNames[i];
    var encryptedFileName = '';
    for (let i = 0; i < fileName.length; i++) {
      encryptedFileName += fileName[i].concat(key);
    }
    encryptedText.push(encryptedFileName);
  }
  return encryptedText;
}

getFilesAndEncrypt();

function sendMsgToServer(encryptedFileNamesArr) {
  // Connection opened
  socket.addEventListener('open', function (event) {
    var data = { command: cmd, filenames: encryptedFileNamesArr };
    socket.send(JSON.stringify(data));
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    console.log('Decrypted FileNames from Server:', event.data);
  });

  // when disconnected from server 
  socket.addEventListener('disconnect', function () {
    console.log('Disconnectd from server')
  });
}