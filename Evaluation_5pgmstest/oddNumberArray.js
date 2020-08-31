function oddNumberArray(x,y){
    var output = [];
    for(var i=x; i<=y; i++){
        if(i%2!=0){
            output.push(i);
        }
    }
    return output;
}

console.log(oddNumberArray(20,35));