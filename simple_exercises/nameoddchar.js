function oddChar(name) {
    var outputString = '';
    for(var x=0; x<name.length; x++){
        if(x%2!=0){
            var oddChar = name[x]
            outputString = outputString + oddChar;
        }
    }
    return outputString;
}
var output = oddChar("Sheerin");
console.log("Output: " + output);