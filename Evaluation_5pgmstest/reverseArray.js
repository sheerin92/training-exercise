function reverseArray(inputArray){
    var output = [];
    for(var i=inputArray.length-1; i>=0; i=i-1){
        var element = inputArray[i];
        output.push(element);
    }
    return output;
}
var inputArr = ['sheerin', 'sidhara', 'umar', 'farook', 'haadhif'];
console.log(reverseArray(inputArr));