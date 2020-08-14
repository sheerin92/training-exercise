function recurr(key, value){
    var output=[];
    for(var i=0; i<value; i++){
    output.push(key);
    }
    return output;
}

console.log(recurr('Sheerin',10));