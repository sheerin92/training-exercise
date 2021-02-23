/*function minNo(input) {
    return input.reduce((a, b) => {
        const min = a < b ? a : b;
        return min;   
    });
}

function maxNo(input){
    return input.reduce((a,b) => {
        const max = a > b ? a : b;
        return max;
    });
} */
function maxNo(input) {
    var max = 0;
    for (var i = 0; i < input.length; i++) {
        if (max < input[i]) {
            max = input[i];
        }
    }
    return max;
}

function minNo(input) {
    var min = input[0];
    for (var i = 0; i < input.length; i++) {
        if (min > input[i]) {
            min = input[i];
        }
    }
    return min;
}

const inputArr = [1, 2, 3, 4, 5];
console.log(minNo(inputArr));
console.log(maxNo(inputArr)); 

