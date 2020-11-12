function rowColumnCount(input){
    let count =0;
    let rowCount=1;
    let columnCount = 0;
for (let i = 0; i < input; i++) {
    count++;
    if (count%6==0) {
       rowCount ++
       columnCount= input- count;
       if (columnCount===0) {
        rowCount--;
         columnCount=6;
       }
       else{
           rowCount+1;
       }
    }
}
return `No. of row ${rowCount} and No. of column ${columnCount}`;
}
var result= rowColumnCount(48)
console.log(result)