function sumOfNoArray(array1){
    var sum=0;
    for(var i=0; i<array1.length;i++){
        var element= array1[i];
        sum=sum+element;
    }

    return sum;

}
var numArray= [10,20,100,50]
console.log(sumOfNoArray(numArray));