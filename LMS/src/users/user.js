var users = [];
var userCount = 0;
var activatedUser;

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById("updateBtn");
const table_container = document.getElementById("table-container");
var tbody = document.getElementById("tabBody");

function getusers() {
    let users;

    if (localStorage.getItem('users') === null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
}

function displayUserDetails() {

    var users = getusers();
    if(users.length == 0){
        tbody.innerHTML = `<tr>
        <td colspan = "8"><h6 class = "text-danger">No Records Found</h6></td></tr> `;
        return;
    }

    tbody.innerHTML = users.map(userObj => {
        return `<tr>
        <td>${userObj.id}</td>
        <td>${userObj.name}</td>
        <td>${userObj.email}</td>
        <td>${userObj.address}</td>
        <td>${userObj.city}</td>
        <td>${userObj.contactNo}</td>
        <td><a onclick="editUser(${userObj.id})"><i class="fa fa-pencil-square-o"></i></a></td>
        <td><a onclick="deleteUser(${userObj.id})"><i class="fa fa-times "></i></a></td> 
        </tr>
        `
    }).join('');
}


function addUserDetails() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const contact_No = document.getElementById("contactNo").value;
    var newUser = {};
    
    if (name === '' || email === '' || address === '' || city === '' || contactNo === '') {
        showAlert('Please fill the details', 'error');
    } else {

        newUser['id'] = generateID();
        newUser['name'] = name;
        newUser['email'] = email;
        newUser['address'] = address;
        newUser['city'] = city;
        newUser['contactNo'] = contact_No;

        var users = getusers();
        users.push(newUser);
        showAlert("User details added successfully!", 'success');
        localStorage.setItem('users', JSON.stringify(users));
        displayUserDetails();
        clearFields();
    }
}

function generateID() {
    return Math.floor(Math.random() * 1000);
  }

document.addEventListener('DOMContentLoaded', displayUserDetails);


function deleteUser(userId) {
    var users = getusers();
    var foundUser = users.find((user) => user.id == userId);
    var index = users.indexOf(foundUser);
    users.splice(index, 1);

    showAlert('Deleted Successfully!', 'success');
    localStorage.setItem('users', JSON.stringify(users));
    displayUserDetails();
}

function editUser(userId) {
    var users = getusers();
    var foundUser = users.find((user) => user.id == userId);
    var index = users.indexOf(foundUser);
    var userToBeEdited = users[index];
    activatedUser = userToBeEdited;

    document.getElementById("name").value = userToBeEdited.name;
    document.getElementById("email").value = userToBeEdited.email;
    document.getElementById("address").value = userToBeEdited.address;
    document.getElementById("city").value = userToBeEdited.city;
    document.getElementById("contactNo").value = userToBeEdited.contactNo;

    updateBtn.style.display = 'inline-block';
    addBtn.style.display = 'none';
}

function updateUserDetails() {
    var users = getusers();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const contact_No = document.getElementById("contactNo").value;
    const id = activatedUser.id;

    var foundUser = users.find(user => {
        return user.id == id;
    });
    foundUser.name = name;
    foundUser.email = email;
    foundUser.address = address;
    foundUser.city = city;
    foundUser.contactNo = contact_No;
    showAlert('Updated Successfully!', 'success');

    localStorage.setItem('users', JSON.stringify(users));
    displayUserDetails();
    clearFields();

    updateBtn.style.display = 'none';
    addBtn.style.display = 'inline-block';
}

function clearFields() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("address").value = '';
    document.getElementById("city").value = '';
    document.getElementById("contactNo").value = '';
}

function showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("user-detail-container");
    const form = document.getElementById("user-form");
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Event Listeners
addBtn.addEventListener('click', addUserDetails);
updateBtn.addEventListener('click', updateUserDetails);