function descendingSort(input){
    var output;
    output = input.sort((a,b) => (a > b ? -1 : 1));
    return output;
}

inputArr = ['a','c','b','d','f'];
console.log(descendingSort(inputArr));
