function findIndexInArrOfObj(employee, key, value) {
    for (var i = 0; i < employee.length; i++) {

        if (employee[i][key] == value) {
            return i;
        }
    }

}

var employees = [
    { name: 'sheerin', age: 28 },
    { name: 'umar', age: 31 },
    { name: 'haadhif', age: 3 },
    { name: 'rafan', age: 3 },
    { name: 'adhina', age: 7 }
]

var empIndex = findIndexInArrOfObj(employees, 'name', 'haadhif');
console.log('The Index of the employee is:' + empIndex);