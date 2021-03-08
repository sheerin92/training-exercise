var employees = [
    { name: 'sheerin', age: 28 },
    { name: 'umar', age: 31 },
    { name: 'haadhif', age: 3 },
    { name: 'rafan', age: 3 },
    { name: 'adhina', age: 7 }
];

function myEvery(input, cb) {
    var isSatisfied = true;
    for (var i = 0; i < input.length; i++) {
        if (!cb(input[i])) {
            isSatisfied = false;
            break;
        }
    }
    return isSatisfied;
}

var output = myEvery(employees, (employee) => {
    return employee.age > 25;
});
console.log(output);

