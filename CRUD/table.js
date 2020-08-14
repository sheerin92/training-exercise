var employees = [

];


//getting the Container element by its ID

var container$ = document.getElementById("table-container");

//Creating the table,table head, heading row with the headings

var table$ = document.createElement("table");
var thead$ = document.createElement("thead");
var thr$ = document.createElement("tr");
var th1$ = document.createElement("th");
var th2$ = document.createElement("th");
var th3$ = document.createElement("th");
var th4$ = document.createElement("th");
var th5$ = document.createElement("th");
var th6$ = document.createElement("th");

//Assign the heading tobe displayed

th1$.innerHTML = "Emp_ID";
th2$.innerHTML = "Name";
th3$.innerHTML = "Age";
th4$.innerHTML = "Designation";
th5$.innerHTML = "Edit";
th6$.innerHTML = "Delete";

//Append the heading to the heading row

thr$.appendChild(th1$);
thr$.appendChild(th2$);
thr$.appendChild(th3$);
thr$.appendChild(th4$);
thr$.appendChild(th5$);
thr$.appendChild(th6$);

//Add the heading row to the table head, then add table head to the table and add the table to the container

thead$.appendChild(thr$);

table$.appendChild(thead$);

// Create the table body

var tbody$ = document.createElement("tbody");

//Creating a table dynamically

function displayEmployeeTable(inputEmployees) {

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < inputEmployees.length; i++) {

        //Create the table row with table data

        var tr$ = document.createElement("tr");
        var td1$ = document.createElement("td");
        var td2$ = document.createElement("td");
        var td3$ = document.createElement("td");
        var td4$ = document.createElement("td");
        var td5$ = document.createElement("td");
        var td6$ = document.createElement("td");


        //Input the value in the table

        td1$.innerHTML = inputEmployees[i]["Emp_ID"];
        td2$.innerHTML = inputEmployees[i]["Name"];
        td3$.innerHTML = inputEmployees[i]["Age"];
        td4$.innerHTML = inputEmployees[i]["Designation"];
        td5$.innerHTML = `<td><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></i></a></td>`;
        td6$.innerHTML = ` <td><a onclick="deleteRow(${i})"><i class="fa fa-trash-o "></i></a></td> `;

        //Append the data to the table row

        tr$.appendChild(td1$);
        tr$.appendChild(td2$);
        tr$.appendChild(td3$);
        tr$.appendChild(td4$);
        tr$.appendChild(td5$);
        tr$.appendChild(td6$);

        //Append the row to the table body

        tbody$.appendChild(tr$);
    }

}

function addNewEmployee() {

    var newEmployee = {};
    const id = document.getElementById("empid").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const designation = document.getElementById("designation").value;

    newEmployee['Emp_ID'] = id;
    newEmployee['Name'] = name;
    newEmployee['Age'] = age;
    newEmployee['Designation'] = designation;

    employees.push(newEmployee);
    displayEmployeeTable(employees);
    clearFields();
}


//Append the table body to the table and table to the container

table$.appendChild(tbody$);
container$.appendChild(table$);

function deleteRow(index) {
    employees.splice(index, 1);
    displayEmployeeTable(employees);
}

// edit the row
function editRow(index) {
    var updatedObj = employees[index];
    document.getElementById("empid").value =updatedObj.Emp_ID;
    document.getElementById("name").value = updatedObj.Name;
    document.getElementById("age").value = updatedObj.Age;
    document.getElementById("designation").value = updatedObj.Designation;
    document.getElementById("updateBtn").style.display='block';
    document.getElementById("addBtn").style.display='none';
    document.getElementById("empid").disabled = true;
}

function updateEmployee() {
    const id = document.getElementById("empid").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const designation = document.getElementById("designation").value;
    var foundEmployee = employees.find(function(employee){
        return employee.Emp_ID==id;
    });
    foundEmployee.Name = name;
    foundEmployee.Age = age;
    foundEmployee.Designation = designation;
    displayEmployeeTable(employees);
    clearFields();
    document.getElementById("empid").disabled = false;
    document.getElementById("updateBtn").style.display='none';
    document.getElementById("addBtn").style.display='block';

}


function clearFields() {
    document.getElementById("empid").value = '';
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("designation").value = '';
}

