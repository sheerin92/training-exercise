function multipleOccurance(inputStr, val){
    var count = 0;
    for(var i=0; i<=inputStr.length; i++){
        var element = inputStr[i];
        if(element === val){
            count = count+1;
        }
    }
    return count;
}
console.log(multipleOccurance('mississippie' , 's'));