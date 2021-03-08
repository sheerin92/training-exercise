var inputObj = {
    name: 'gopi',
    group: {
        name: 'mani',
        group: {
            name: 'umar',
            group: {
                name: 'safi',
                group: {
                    name: 'fayas'
                }
            }
        }
    }
};
function myRecursion(inputObj, outputArr) {
    if (!outputArr) {
        var outputArr = []
    }
    outputArr.push(inputObj.name);
    var cyclicObj = inputObj.group;
    if (!cyclicObj) {
        return outputArr
    }
    return myRecursion(cyclicObj, outputArr)
}
var output = myRecursion(inputObj);
console.log(output);

/*function printMarzookaTenTimes(index){
    if(index >= 10){
        return;
    }
    index ++
    console.log('marzooka');
    printMarzookaTenTimes(index);
}
var index=0;
printMarzookaTenTimes(index);*/

