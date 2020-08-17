
function transform2(inputObj) {
    var output = {};
    for (let key in inputObj) {
        //umar's code
        /*var value = inputObj[key];
        output[value]=key; */

        //My code
        var x = key;
        key = inputObj[key];
        inputObj[key] = x;
        output[key]=  inputObj[key]; 
    } 
    return output;
}

let obj = { one: 1, two: 2, three: 3 };
let obj1 = { name: 'Sheerin', age: 27, qualification: 'M.E.' };
console.log(transform2(obj1));

function filter2(inputArr, key , value){
    var outputArr = [];
    for(var i=0; i<inputArr.length; i++){
        if(inputArr[i][key]> value){
            outputArr.push(inputArr[i]);
        }
    }
    return outputArr;
}

let studentArray = [
    {name: 'Sheerin' , age: 27 , dept: 'CSE'},
    {name: 'Umar' , age: 30 , dept: 'IT'},
    {name: 'Haathif' , age: 25 , dept: 'ECE'},
    {name: 'Farook' , age: 20 , dept: 'EEE'}
];

console.log(filter2(studentArray, 'age' , 20));


function myFilter2(inputArr, filterFunc){
    var outputArr = [];
    for(var i=0; i<inputArr.length; i++){
        if(filterFunc(inputArr[i])){
            outputArr.push(inputArr[i]);
        }
    }
    return outputArr;
}

console.log(myFilter2(studentArray, (inObj) => inObj.age>25));

