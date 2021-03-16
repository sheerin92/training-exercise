

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


function findIndex(array,fn){
   for(let i=0 ;i < array.length; i ++){
       if(fn(array[i],i)){
        return i
       }
   }
}

//what should i expect here 
const index1 = findIndex(employees,function(employeee,index){
    return employeee.name === "john"
});


const index2 = findIndex(employees,function(employeee,index){
    return employeee.age === 25
});

const index2 = findIndex(cars,function(car,index){
    return car.type === "sedan" && car.make === "2000"
});

console.log("first requirement",index1);
