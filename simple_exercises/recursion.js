var employeeObj = {
    name: 'gopi',
    group: {
        name: 'mani',
        group: {
            name: 'umar',
            group: {
                name: 'safi',
                group: {
                    name: 'faiyas'
                }
            }
        }
    }
};

function myRecursion(employeeObj,outputArr ){
    if(!outputArr){
        var outputArr = [];
    }
    outputArr.push(employeeObj.name);
    var employeeGroup = employeeObj.group;
    if(!employeeGroup){
        return outputArr;
    }
    return myRecursion(employeeGroup,outputArr);
}

var output = myRecursion(employeeObj);
console.log(output);