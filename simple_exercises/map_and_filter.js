var numbers = [1, 2, 3, 4, 5];

function myMap(inputs, cb) {
    var output = [];
    for (var i = 0; i < inputs.length; i++) {
        var newVal = cb(inputs[i])
        output.push(newVal);
    }
    return output;
}

console.log(myMap(numbers, (num) => {
    return num * 10;
    //return num.toString();
}));

function myFilter(inputs, cb) {
    var output = [];
    for (var i = 0; i < inputs.length; i++) {
        if (cb(inputs[i],i)) {
            output.push(inputs[i]);
        }
    }
    return output;
}

console.log(myFilter(numbers, (index) => {
    return index % 2 != 0;
    //return num > 1;
}));