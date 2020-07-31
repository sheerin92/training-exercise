
const Car={
    Brand: 'Honda', 
    Name:'Brio', 
    Model: 2014, 
    Gear: 'Manual',
    detail: function(){
        return `This is a ${this.Brand} ${this.Name}, ${this.Model} model car with ${this.Gear} gear. 
It has ${this.steering} steering and ${this.noOfGear} gears. `;
    }
}
    
const carProperty= Object.create(Car);
carProperty.steering='Power';
carProperty.noOfGear=5;

/*console.log(carProperty);
console.log(carProperty.detail());*/


/*console.log(Person.name);
Person.name='Umar';
console.log(Person.name);
Person.qualification='M.E.';
console.log(Person.qualification);
var qualification= function(){
return 'qualification';
} ;
Person[qualification()]='B.E.';
console.log(Person.qualification);*/
function addNewPropInObj(People,key,value){
People[key]=value;
return People;
}
const Person={
    name: 'Sheerin', age: 28
}
console.log(addNewPropInObj(Person,'qualification', 'M.E.'));
console.log(addNewPropInObj(Person,'gender','female'));
var Carobj={
    name:'Brio', brand:'Honda'
}
console.log(addNewPropInObj(Carobj, 'model', 2014));