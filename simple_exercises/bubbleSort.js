function bubbleSort(input) {
    var output=[];
    var len = input.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (input[j] < input[j + 1]) {
                var temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
        output.push(input[j]);
    }
    return output;
}

var inputArr = [20, 11, 15, 8, 2, 9];
console.log(bubbleSort(inputArr));