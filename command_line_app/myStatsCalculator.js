var fs = require('fs');

//Getting the command line arguments
var commandLineArgs = process.argv;
commandLineArgs.splice(0, 2);
var dirPath = commandLineArgs[0];
var fileNamePrefixer = commandLineArgs[1];

//To find whether the given dir path is valid or not and to continue with the process of listing the files in the directory
function statsCalculator() {
  try {
    var isValidDirPath = fs.statSync(dirPath).isDirectory();
    if (isValidDirPath) {
      var outputFiles = walkSync(dirPath);
      writeMyFile(outputFiles);
    }
  } catch (e) {
    console.log("Oops Invalid Directory");
  }
}

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

//To find the longest filename in the directory
function longestName(myStats) {
  return myStats.reduce((a, b) => {
    longestStr = a.length >= b.length ? a : b;
    return longestStr;
  });
}

//To find the smallest filname in the directory
function smallestName(myStats) {
  return myStats.reduce((a, b) => {
    smallestStr = a.length <= b.length ? a : b;
    return smallestStr;
  });
}

//To validate whether the directory is empty or not and write the statistics into a seperate file
function writeMyFile(outputFiles) {
  if (outputFiles.length === 0) {
    console.log("Empty Directory");
    return;
  }
  var lengthOfOutputFilesStr = ` Total No. of files: ${outputFiles.length}`;
  var longestStr = `\n Longest Name: ${longestName(outputFiles)}`;
  var smallestStr = `\n Smallest Name: ${smallestName(outputFiles)}`;                                
  var content = `${lengthOfOutputFilesStr} ${longestStr} ${smallestStr}`;
  fs.writeFile(fileNamePrefixer + '-Stats.txt', content, function (err) {
    if (err) throw err;
    console.log(fileNamePrefixer + '-Stats.txt File Saved Successfully!');
  });
}

statsCalculator();