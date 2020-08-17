/* function removeEle(array, num){
var index=array.indexOf(num);
if(index>-1){
    array.splice(index,1);
}
return array;
}

var inputArray=[2,5,9,6];
console.log(removeEle(inputArray,5)); */

function findEle(array,num){
    for(i=0; i<array.length; i++){
        if(array[i]==num){
            return true;
        }
    }
    return false;    
}
var inputArray=[2,5,9,6];
console.log(findEle(inputArray,1));
