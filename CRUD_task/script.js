var tasks = [];
var count = 0;
var activatedTask;

const table_container = document.getElementById('table-container');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const taskEl = document.getElementById("task");

var table$ = document.createElement("table");

var tbody$ = document.createElement("tbody");

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}


function displayTaskTable(tasks) {

    var tasks = getTasks();
    tbody$.innerHTML = tasks.map(taskObj => {
        return `<tr class = ${taskObj.isCompleted ? 'checked' : ''}>
        <td style = "width:3%;"><i class="fa fa-check"></i></td>
        <td style = "width:89%;"><span class='added-task' onclick="onCompleteTask(${taskObj.id})">${taskObj.task}</span></td>
        <td style = "width:4%;"><a onclick="editTask(${taskObj.id})"><i class="fa fa-pencil-square-o"></i></a></td>
        <td style = "width:4%;"><a onclick="deleteTask(${taskObj.id})"><i class="fa fa-times "></i></a></td> 
        </tr>
        `
    }).join('');
    table$.appendChild(tbody$);
    table_container.appendChild(table$);
}

function addNewTask() {
    var newTask = {};
    const task$ = taskEl.value;
    count++;

    if (task$ == '') {
        showAlert('Please add some task', 'error');
        return;
    }

    newTask['task'] = task$;
    newTask['id'] = count;
    newTask['isCompleted'] = false;

    var tasks = getTasks();
    tasks.push(newTask);
    showAlert("Task added successfully!", 'success');
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTaskTable(tasks);
    clearFields();
}
document.addEventListener('DOMContentLoaded', displayTaskTable);

function deleteTask(taskID) {
    var tasks = getTasks();
    var foundTask = tasks.find((task) => task.id == taskID);
    var index = tasks.indexOf(foundTask);
    tasks.splice(index, 1);

    showAlert('Deleted Successfully!', 'success');
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskTable(tasks);
}

function editTask(taskID) {
    var tasks = getTasks();
    var foundTask = tasks.find((task) => task.id == taskID);
    var index = tasks.indexOf(foundTask);
    var taskToBeEdited = tasks[index];

    activatedTask = taskToBeEdited;
    taskEl.value = taskToBeEdited.task;

    updateBtn.style.display = 'block';
    addBtn.style.display = 'none';
}

function updateTask() {
    var tasks = getTasks();

    const id = activatedTask.id;
    const editedTask = taskEl.value;

    var foundTask = tasks.find(task => {
        return task.id == id;
    });
    foundTask.task = editedTask;
    showAlert('Updated Successfully!', 'success');

    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskTable(tasks);
    clearFields();

    updateBtn.style.display = 'none';
    addBtn.style.display = 'block';
}

function onCompleteTask(taskID) {
    var tasks = getTasks();
    var foundTask = tasks.find((task) => task.id == taskID);
    var index = tasks.indexOf(foundTask);
    var completedTask = tasks[index];

    completedTask.isCompleted = !completedTask.isCompleted;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskTable(tasks);
}

function clearFields() {
    taskEl.value = '';
}

function showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("header");
    const form = document.getElementById("task-form");
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}
//Event Listeners
addBtn.addEventListener('click', addNewTask);
updateBtn.addEventListener('click', updateTask);
