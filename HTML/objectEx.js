function objEx(person){
    
    for (var i=0; i<person.length; i++){
      console.log(`Name is ${person[i].Name} and age is ${person[i].age}`);
      /*console.log(`${person[i].Name} is ${person[i].maritalStatus}`);
        if(person[i].age>18){
            console.log(`${person[i].Name} is Major`);
        }
            else{
                console.log(`${person[i].Name} is Minor`);
            }*/
        
    }
}

const people=[
    {Name:'Sheerin', age:28, maritalStatus:'Married'},
    {Name: 'Umar', age:30, maritalStatus:'Married'},
    {Name: 'Haathif', age:2.75, maritalStatus:'notMarried'}
];
console.log(objEx(people));