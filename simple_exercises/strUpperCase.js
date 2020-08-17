function firstLetterToUpperCase(strArray){
    var output=[];
    for(var i=0; i<strArray.length; i++){
        var element=strArray[i];
        var firstChar= element[0].toUpperCase();
        var remChars= element.substr(1);
        output.push(firstChar+remChars);
    }
    return output;
}

var nameArray=['sheerin', 'sidhara', 'umar', 'farook', 'haathif'];
console.log(firstLetterToUpperCase(nameArray));