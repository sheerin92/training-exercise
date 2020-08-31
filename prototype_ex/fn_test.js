var myFunction = function(a) {
    return a*5;
}

var yourFn = myFunction(5);
var newFn = myFunction;
console.log(yourFn); // 5 marks
console.log(newFn); // 5 marks
console.log(myFunction); // 5 marks
//  10/15 marks, 1st 2 correct, 3rd wrong.