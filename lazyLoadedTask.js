// How to implement lazy loaded tasks
// Import events module
var events = require('events');
// Create an eventEmitter object
var conditionEmitter = new events.EventEmitter();
let someCondition = false;
const taskQueues = [];
function myAsynTask(a, b) {
    return new Promise((resolve, reject) => {
        if (someCondition) {
            resolve(multiplication(a , b));
        } else {
            const task = () => {
                resolve(multiplication(a , b));
            }
            taskQueues.push(task);
        }
    });
}
function multiplication(a, b) {
    return a * b;
}
async function clientFun() {
    const result = await myAsynTask(10, 20);
    console.log("clientFun" + result);
}
async function yourFun() {
    const result = await myAsynTask(10, 20);
    console.log("yourFun " + result);
}
clientFun();
yourFun();
setTimeout(() => {
    someCondition = true;
    conditionEmitter.emit("conditionMet");
}, 6000);
conditionEmitter.on("conditionMet", () => {
    taskQueues.forEach((fun) => fun());
});
conditionEmitter.on("conditionMet", () => {
    setTimeout(()=>{
        yourFun();
    }, 1000)
});