
function charMultipleOccurence(name,x){
    var count = 0;
    for(i=0; i<=name.length; i++){
        var outChar= name[i];
        if(x==outChar){
            count=count+1;
        }
    }
    return count;
}
console.log(charMultipleOccurence('missisippi', 's'));