class Employee {
    constructor(id, name, age, designation) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
}

class UI {

    addEmployeeToList(employee) {
        const list = document.getElementById("employee-list");
        //Create tr element
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.designation}</td>
        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }

    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('#form');
        //Get form
        const form = document.querySelector('#employee-form');
        //Insert alert
        container.insertBefore(div, form);

        //Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteEmployeeDetail(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('empid').value = '';
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('designation').value = '';
    }
}

//Local storage class
class Store {
    static getEmployee() {
        let employees;
        if (localStorage.getItem('employees') === null) {
            employees = [];
        } else {
            employees = JSON.parse(localStorage.getItem('employees'));
        }

        return employees;
    }
    static displayEmployee() {
        const employees = Store.getEmployee();

        employees.forEach(function (employee) {
            const ui = new UI;

            //Add employee on UI
            ui.addEmployeeToList(employee);
        });
    }
    static addEmployee(employee) {
        const employees = Store.getEmployee();

        employees.push(employee);

        localStorage.setItem('employees', JSON.stringify(employees));
    }
    static removeEmployee(id) {
        const employees = Store.getEmployee();

        employees.forEach(function (employee, index) {
            if (employee.id === id) {
                employees.splice(index, 1);
            }
        });

        localStorage.setItem('employees', JSON.stringify(employees));

    }
}

// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayEmployee);

//Event Listener for add employees

document.getElementById("employee-form").addEventListener('submit', function (e) {
    const id = document.getElementById('empid').value,
        name = document.getElementById("name").value,
        age = document.getElementById("age").value,
        designation = document.getElementById("designation").value;

    // Instantiate Employee
    const employee = new Employee(id, name, age, designation)

    //Instantiate UI
    const ui = new UI();

    //validate
    if (id === '' || name === '' || age === '' || designation === '') {
        ui.showAlert("Please fill in the details", 'error');
    } else {

        // Add employee to list
        ui.addEmployeeToList(employee);

        // Add to LS
        Store.addEmployee(employee);

        //Show success
        ui.showAlert('Employee Details Added!', 'success');

        //clear fields
        ui.clearFields();
    }


    e.preventDefault();
})

//Event Listener for delete
document.getElementById('employee-list').addEventListener('click', function (e) {
    // Instantiate UI

    const ui = new UI();

    // Delete employee
    ui.deleteEmployeeDetail(e.target);

    // Remove from LS
    var deleteButtonElement = e.target.parentElement;
    var trElement = deleteButtonElement.parentElement;
    var idElement = trElement.children[0];

    Store.removeEmployee(idElement.textContent);

    // Show message
    ui.showAlert('Employee Removed!', 'success');

    e.preventDefault();
});
