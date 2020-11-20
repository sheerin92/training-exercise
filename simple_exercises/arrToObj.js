function arrToObj(inputArr){
var output = {};
for(var i = 1; i <= inputArr.length; i++){
    output[i] = i;
}
return output;
}

var inputArray = [1,2,3,4,5];
console.log(arrToObj(inputArray));