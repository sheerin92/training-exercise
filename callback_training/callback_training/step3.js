

const employees = [
    {
        name: 'john',
        age: 20,
        salary: 10
    },
    {
        name: 'george',
        age: 25,
        salary: 20
    },
    {
        name: 'kumar',
        age: 30,
        salary: 35
    },
]


const cars = [
    {
        make: '2000',
        model: 'ford',
        type: 'hatchback'
    },
    {
        make: '2010',
        model: 'maruti',
        type: 'hatchback'
    },
    {
        make: '1999',
        model: 'ford',
        type: 'sedan'
    },
    
]


/* 

    REQUIREMENT for this program
    
    1. findIndex of employee john
    2. findIndex of employeed with age 25
    3. findIndex of sedan type car
    4. findIndex of ford car


*/

console.clear();


function findIndex(array,property,value){
    for(let i=0; i < array.length ; i++){
        if(array[i][property] === value){
           return i;
        }
    }
}


console.log("first requirement",findIndex(employees,"name","john"));
console.log("second requirement",findIndex(employees,"age",25));
console.log("third requirement",findIndex(cars,"type","sedan"));
console.log("fourth requirement",findIndex(cars,"model","ford"));
