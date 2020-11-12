var container$ = document.getElementById("container");
var table$ = document.createElement("table");
var tbody$ = document.createElement("tbody");

function createGrid(noOfRows, noOfCols, value) {
    var count = 0;
    for (let i = 1; i <= noOfRows; i++) {
        var row$ = document.createElement("tr");
        for (let j = 1; j <= noOfCols; j++) {
            count++;
            var col$ = document.createElement("td");
            row$.appendChild(col$);
            col$.innerHTML = count;
            if (col$.innerHTML == value) {
                var div$ = document.createElement("div");
                div$.innerHTML = `Grid ${value} is in row ${i} and column ${j}`;
                container$.appendChild(div$);
            }
        }
        tbody$.appendChild(row$);
    }
    table$.appendChild(tbody$);
    container$.appendChild(table$);
}

createGrid(8,6,22);