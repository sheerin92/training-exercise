

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


function findIndex1(array,property){
    for(let i=0; i < array.length ; i++){
        if(array[i][property] === "john"){
           return i;
        }
    }
}

function findIndex1(array,property){
    for(let i=0; i < array.length ; i++){
        if(array[i][property] === 25){
           return i;
        }
    }
}


function findIndex3(array,property){
    for(let i=0; i < array.length ; i++){
        if(array[i][property] === "sedan"){
           return i;
        }
    }
}

console.log("first requirement",findIndex1(employees,"name"));
console.log("first requirement",findIndex1(employees,"age"));
console.log("third requirement",findIndex3(cars,"type"))
