function sumArray(array1, array2){
    
    const output = [];
   // let sum=0;
    let x=0;
    let i=0;

    
    if(array1.length === 0)
    return "Array1 is empty";
    
    if( array2.length === 0)
    return "Array2 is empty";
   
    while( i < array1.length &&  i < array2.length){
        output.push (array1[i] + array2[i]);
        i++;
    }
    
    if(i===array1.length){
        
        for (x=i; x < array2.length; x++){
            output.push (array2[x]);
        }
    }
    
    else{
        
        for(x=i; x < array1.length; x++)
        output.push (array1[x]);
    }
    
    return output;
}
var firstArray=[1,2,3,4,5];
var secondArray=[8,9,10,11,12,13];
console.log(sumArray(firstArray, secondArray));