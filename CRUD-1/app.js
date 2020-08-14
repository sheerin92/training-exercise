function getStudents() {
    let students;

    if (localStorage.getItem('students') === null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.getItem('students'));
    }
    return students;
}

var tbody$ = document.getElementById('tabbody');

function displayStudentDetails() {

    var students = getStudents();

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < students.length; i++) {

        var tr$ = document.createElement('tr');
        var td1$ = document.createElement('td');
        var td2$ = document.createElement('td');
        var td3$ = document.createElement('td');
        var td4$ = document.createElement('td');
        var td5$ = document.createElement('td');
        var td6$ = document.createElement('td');

        td1$.innerHTML = students[i]['ID'];
        td2$.innerHTML = students[i]['name'];
        td3$.innerHTML = students[i]['dob'];
        td4$.innerHTML = students[i]['department'];
        td5$.innerHTML = `<td><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></i></a></td>`;
        td6$.innerHTML = ` <td><a onclick="deleteRow(${i})"><i class="fa fa-trash-o "></i></a></td> `;

        tr$.appendChild(td1$);
        tr$.appendChild(td2$);
        tr$.appendChild(td3$);
        tr$.appendChild(td4$);
        tr$.appendChild(td5$);
        tr$.appendChild(td6$);

        tbody$.appendChild(tr$);
    }

}


function addStudentDetails() {

    var newStudent = {};
    const id = document.getElementById("std_id").value;
    const name = document.getElementById("name").value;
    const dob = document.getElementById("age").value;
    const department = document.getElementById("dept").value;

    if (id === '' || name === '' || dob === '' || department === '') {
        showAlert('Please fill the details', 'error');
    } else {

        newStudent['ID'] = id;
        newStudent['name'] = name;
        newStudent['dob'] = dob;
        newStudent['department'] = department;

        var students = getStudents();
        students.push(newStudent);
        showAlert("Student details added successfully!", 'success');
        localStorage.setItem('students', JSON.stringify(students));
        displayStudentDetails();
        clearFields();
    }
}

document.addEventListener('DOMContentLoaded', displayStudentDetails);


function deleteRow(index) {
    var students = getStudents();
    students.splice(index, 1);
    showAlert('Deleted Successfully!', 'success');
    localStorage.setItem('students', JSON.stringify(students));
    displayStudentDetails();
}

function editRow(index) {
    var students = getStudents();
    var updateRow = students[index];
    document.getElementById("std_id").value = updateRow.ID;
    document.getElementById("name").value = updateRow.name;
    document.getElementById("age").value = updateRow.dob;
    document.getElementById("dept").value = updateRow.department;

    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'block';
    document.getElementById('std_id').disabled = true;
}

function updateStudentDetails() {
    var students = getStudents();
    const id = document.getElementById("std_id").value;
    const name = document.getElementById("name").value;
    const dob = document.getElementById("age").value;
    const department = document.getElementById("dept").value;

    var foundStudent = students.find(function (student) {
        return student.ID == id;
    });

    foundStudent.name = name;
    foundStudent.dob = dob;
    foundStudent.department = department;

    showAlert('Edited Successfully!', 'success');
    localStorage.setItem('students', JSON.stringify(students));
    displayStudentDetails();
    clearFields();

    document.getElementById("std_id").disabled = false;
    document.getElementById("updateBtn").style.display = 'none';
    document.getElementById("addBtn").style.display = 'block';
}

function clearFields() {

    document.getElementById("std_id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("dept").value = '';
}

function showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("std-form");
    const form = document.getElementById("student-form");
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

