// Employee Constructor

function Employee(name, age, designation){
    this.name = name;
    this.age = age;
    this.designation = designation;
}

//UI Constructor

function UI() {}

//Add Employee to list
UI.prototype.addEmployeeToList = function(employee){
    const list = document.getElementById("employee-list");
    //Create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.designation}</td>
    <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}

//Show alert
UI.prototype.showAlert = function(message, className) {
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
    container.insertBefore(div , form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
    
}

//Delete Employee details
UI.prototype.deleteEmployeeDetail = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('designation').value = '';
}

//Event Listener for add employees

document.getElementById("employee-form").addEventListener('submit', function(e){
    const name = document.getElementById("name").value,
            age = document.getElementById("age").value,
            designation = document.getElementById("designation").value;

// Instantiate Employee
const employee = new Employee(name, age, designation)

//Instantiate UI
const ui = new UI();

//validate
if(name === '' || age === '' || designation === ''){
    ui.showAlert("Please fill in the details", 'error');
} else{

    // Add employee to list
    ui.addEmployeeToList(employee);

    //Show success
    ui.showAlert('Employee Details Added!' , 'success');
    
    //clear fields
    ui.clearFields();
}


e.preventDefault();
})

//Event Listener for delete
document.getElementById('employee-list').addEventListener('click', function(e){
   // Instantiate UI

   const ui = new UI();

   ui.deleteEmployeeDetail(e.target);

   // Show message
   ui.showAlert('Employee Removed!' , 'success');
   
    e.preventDefault();
});
