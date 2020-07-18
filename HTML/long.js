function longestString(arrOfString){
    var str;
    var strLength=0;
    for (var i=0; i<arrOfString.length; i++){
      /*  var element= arrOfString[i];
        var eleLength=element.length;
        if(strLength<eleLength){
            strLength=eleLength;
            str=element;
            
        }*/
        if(strLength<arrOfString[i].length){
            strLength=arrOfString[i].length;
            str=arrOfString[i];
            
        }

    }

    return str;

}
var strArray=['sheerin', 'sidhara', 'umar', 'farook', 'haathif umar', 'sss', 'aaa'];
console.log(longestString(strArray));