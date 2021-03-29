let employee = {
    name: "Sheerin",
    getName: function(){
        return this.name;
    }
}
let employee1 = {
    name: "Haadhif"
}

function myBind(empObj,getNameFun){
    return function(){
       return getNameFun.apply(empObj);
    }
}
const myBindRes = myBind(employee, employee.getName);
console.log(myBindRes());