var students = [
    {
        fName: 'Sheerin',
        lName: 'Sidhara',
        id: 01,
        dept: 'CSE'
    },
    {
        fName: 'Umar',
        lName: 'Farook',
        id: 02,
        dept: 'IT'
    },
    {
        fName: 'Haadhif',
        lName: 'Umar',
        id: 03,
        dept: 'ECE'
    },
    {
        fName: 'Sheerin',
        lName: 'Sidhara',
        id: 04,
        dept: 'CSE'
    }
]

function myMap(inputArray){
    var output= [];
    for(var i=0; i<inputArray.length; i++){
        var uniqueId = inputArray[i].fName + '#' + inputArray[i].id;
        inputArray[i]['uniqueId'] = uniqueId;
        output.push(inputArray[i]);
    }
    return output;
}
console.log(myMap(students));