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

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < tasks.length; i++) {

        //Create the table row with table data

        var tr$ = document.createElement("tr");
        var td1$ = document.createElement("td");
        var td2$ = document.createElement("td");
        var td3$ = document.createElement("td");
        var td4$ = document.createElement("td");

        const taskObj = tasks[i];

        td1$.innerHTML = '<td><i class="fa fa-check"></i></td>';
        td2$.innerHTML = `<span class='added-task' onclick="onCompleteTask(${i})">${taskObj.task}</span>`;
        td3$.innerHTML = `<td><a onclick="editTask(${i})"><i class="fa fa-pencil-square-o"></i></a></td>`;
        td4$.innerHTML = ` <td><a onclick="deleteTask(${i})"><i class="fa fa-times "></i></a></td> `;

        td1$.width = '3%'
        td2$.width = '89%';
        td3$.width = '4%';
        td4$.width = '4%';

        tr$.className = `${taskObj.isCompleted ? 'checked' : ''}`;
        tr$.appendChild(td1$);
        tr$.appendChild(td2$);
        tr$.appendChild(td3$);
        tr$.appendChild(td4$);

        tbody$.appendChild(tr$);

    }
}

table$.appendChild(tbody$);
table_container.appendChild(table$);

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

function deleteTask(index) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    showAlert('Deleted Successfully!', 'success');
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskTable(tasks);
}

function editTask(index) {
    var tasks = getTasks();
    var editTask = tasks[index];
    activatedTask = editTask;
    taskEl.value = editTask.task;
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

function onCompleteTask(index) {
    var tasks = getTasks();
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
