var tasks = [];
var count = 0;
var activatedTask;

const table_container = document.getElementById('table-container');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const taskEl = document.getElementById("task");

var table$ = document.createElement("table");

var tbody$ = document.createElement("tbody");



function displayTaskTable(tasks) {

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < tasks.length; i++) {

        //Create the table row with table data

        var tr$ = document.createElement("tr");
        var td1$ = document.createElement("td");
        var td2$ = document.createElement("td");
        var td3$ = document.createElement("td");
        var td4$ = document.createElement("td");

        td1$.innerHTML = '<td><i class="fa fa-check"></i></td>';
        td2$.innerHTML = tasks[i]['task'];
        td3$.innerHTML = `<td><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></i></a></td>`;
        td4$.innerHTML = ` <td><a onclick="deleteRow(${i})"><i class="fa fa-times "></i></a></td> `;

        td1$.width = '3%'
        td2$.width = '89%';
        td3$.width = '4%';
        td4$.width = '4%';

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
    if(task$ == ''){
        alert('Enter some task');
    } else {

    newTask['task'] = task$;
    newTask['id'] = count;

    tasks.push(newTask);

    displayTaskTable(tasks);
    clearFields();
    }
}

function deleteRow(index) {
    tasks.splice(index, 1);
    displayTaskTable(tasks);
}

function editRow(index) {
    var editTask = tasks[index];
    activatedTask = editTask;
    taskEl.value = editTask.task;
    updateBtn.style.display='block';
    addBtn.style.display='none';
}

function updateTask(){
    const id = activatedTask.id;
    const editedTask = taskEl.value;
    var foundTask = tasks.find(task => {
        return task.id == id;
    });
    foundTask.task = editedTask; 
    displayTaskTable(tasks);
    clearFields();
    updateBtn.style.display='none';
    addBtn.style.display='block';
}

function clearFields() {
    taskEl.value = '';
}

//Event Listeners
addBtn.addEventListener('click', addNewTask);
updateBtn.addEventListener('click', updateTask);
