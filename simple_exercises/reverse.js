function reverseArr(inputArray){
var output=[];
//output= inputArray.reverse();
for(var i=inputArray.length-1; i>=0; i-=1){
    output.push(inputArray[i]);
}
return output;
}

//var array=[1,2,3,4,5];
var array = ['a','b','c','d','e'];
console.log(reverseArr(array));