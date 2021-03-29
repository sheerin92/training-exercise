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
var myBindRes = myBind(employee, employee.getName);
//var myBindRes = myBind(employee1, employee.getName);
console.log(myBindRes());