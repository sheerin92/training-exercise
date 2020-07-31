function largestno(array1){
    var big=0;
for (var i=0; i<array1.length; i++){
    if(big<array1[i]){
        
        big=array1[i];
    }
}
return big;
}    
var noArray=[-5,-2,-6,10,60,9,-1];
console.log(largestno(noArray));