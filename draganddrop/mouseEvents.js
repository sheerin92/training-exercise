document.getElementById("col").addEventListener("mousedown", dragStart, false);
window.addEventListener("mouseup", dragEnd, false);

function dragStart() {
    window.addEventListener("mousemove", drag, true);
    console.log("Mouse is down");
}
function dragEnd() {
    window.removeEventListener("mousemove", drag, true);
    console.log("Mouse is up");
}
function drag(event) {
    var column = document.getElementById("col");
    column.style.position = "absolute";
    column.style.top = event.clientY +"px";
    column.style.left = event.clientX+"px";
}

