var fs = require('fs');
var commandLineArgs = process.argv;
commandLineArgs.splice(0,2);
var dirPath = commandLineArgs[0];
var fileNamePrefixer = commandLineArgs[1];

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function (dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }  
  });
  return filelist;
}

var outputFiles  = walkSync(dirPath);
var lengthOfOutputFilesStr = ` Total No. of files: ${outputFiles.length}`;
var longestStr = `\n Longest Name: ${longestName(outputFiles)}`;
var smallestStr = `\n Smallest Name: ${smallestName(outputFiles)}`;
var content = `${lengthOfOutputFilesStr} ${longestStr} ${smallestStr}`;
writeMyFile(content);


function longestName(myStats) {
  return myStats.reduce((a, b) => {
      longestStr = a.length >= b.length ? a : b;
      return longestStr;
  });
}
function smallestName(myStats) {
  return myStats.reduce((a, b) => {
      smallestStr = a.length <= b.length ? a : b;
      return smallestStr;
  });
}

function writeMyFile(myContent){
  fs.writeFile(fileNamePrefixer+'-Stats.txt', myContent, function (err) {
      if (err) throw err;
      console.log(fileNamePrefixer+'-Stats.txt File Saved Successfully!');
  });
}