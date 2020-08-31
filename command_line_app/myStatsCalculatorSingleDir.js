var fs = require('fs');

fs.readdir('C:/sheerin_workspace/training-exercise', null, function (err, outputFiles) {
    if (err) {
        console.log("Error");
    } else {
        var outputFilesStr = JSON.stringify(outputFiles);
        var lengthOfOutputFilesStr = `\n No. of folders: ${outputFiles.length}`;
        var longestStr = `\n Longest Name: ${longestName(outputFiles)}`;
        var smallestStr = `\n Smallest Name:${smallestName(outputFiles)}`;
        var content = `${outputFilesStr} ${lengthOfOutputFilesStr} ${longestStr} ${smallestStr}`;
        writeMyFile(content);
    }
});

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
    fs.writeFile('myCheck-stats.txt', myContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

