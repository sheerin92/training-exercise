var employees = [
    {
        name: 'Sheerin',
        age: 27,
        qualification: 'M.E.',
        designation: 'Software Trainee'
    },
    {
        name: 'Umar',
        age: 30,
        qualification: 'B.Tech',
        designation: 'Team Lead'
    },
    {
        name: 'Haadhif Umar',
        age: 37,
        qualification: 'P.hd',
        designation: 'CEO'
    },
    {
        name: 'Farook',
        age: 33,
        qualification: 'B.E.',
        designation: 'Project Manager'
    }
]
function myFilter(inputArray,key,value){
    var output = [];
    for(var i=0; i<inputArray.length; i++){
        if(inputArray[i][key]>value){
            output.push(inputArray[i]);
        }
    }
    return output;
}
console.log(myFilter(employees, 'age', 30));