

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

for(let i=0; i < employees.length ; i++){
    if(employees[i].name === "john"){
        console.log(i);
    }
}


for(let j=0; j < employees.length ; i++){
    if(employees[j].age === 25){
        console.log(j);
    }
}

for(let j=0; j < employees.length ; i++){
    if(employees[j].name === 25){
        console.log(j);
    }
}

for(let j=0; j < employees.length ; i++){
    if(employees[j].name === 25){
        console.log(j);
    }
}