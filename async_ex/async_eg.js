console.log("First");
setTimeout(function(){
    console.log("Second");
}, 3000);
console.log("Third");

var myInterval = setInterval(() => {
    console.log("Hello");
}, 1000);

function myStopFunction(){
    setTimeout(() => {
        clearInterval(myInterval);
    }, 20000);
}
myStopFunction();