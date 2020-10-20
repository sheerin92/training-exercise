const task3Element = document.getElementById('task-3');
function firstFn(){
    alert("This is the first function");
}
function secondFn(name){
    alert(name);
}
firstFn();
secondFn('Sheerin');
task3Element.addEventListener('click', firstFn);

function thirdFn(firstname, middlename, lastname){
   let name = `${firstname} ${middlename} ${lastname}`;
   alert(name);
}
thirdFn('Rasool', 'Sheerin', 'Sidhara');