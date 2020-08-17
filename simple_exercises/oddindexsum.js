function oddElement(input) {
    var sum = 0;
    for(var i=0; i<input.length; i++){
        if(i%2!=0){
           var oddIndexValue = input[i];
           sum = sum + oddIndexValue;
        }
    }
    return sum;
}
///////
var inputArr = [1,5,2,2,4,6,8];
var output = oddElement(inputArr);
console.log("Output: " + output);