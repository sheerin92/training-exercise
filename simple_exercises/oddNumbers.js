function getOddNumbers(x,y){
    const output=[];
    for(var i=x; i<=y; i++){
        if(i%2!=0){
        output.push(i);
        }
    }

    return output;
}
console.log(getOddNumbers(2,15));