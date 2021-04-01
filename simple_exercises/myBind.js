let employee = {
    name: "Sheerin",
    getName: function(city,companyName,designation){
        return `Hi ${this.name}, Welcome to ${city}. You are currently an employee of ${companyName}
        and your designation is ${designation}`;
    }
}
let employee1 = {
    name: "Haadhif"
}

function myBind(empObj,getNameFun){
    var args = [];
    for(var i = 2; i < arguments.length; i++ ){
        args.push(arguments[i]);
    }
    return function(){
       return getNameFun.apply(empObj,args);
    }
}
var myBindRes = myBind(employee, employee.getName,'Chennai','Provility','Software Trainee');
//var myBindRes = myBind(employee1, employee.getName,'Chennai','Provility','Software Trainee');
console.log(myBindRes());