# Etch_a_Sketch
The following code is the first attempt I made to create grids inside my canvas container. 
It was not dynamic enough. Trying different approach from stack overflow .


const canvas = document.querySelector("#canvas");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

makeGrids();

function makeGrids(){
    makeRows(16);
    makeCells(16);
}
function makeRows(rowNum){
    for (let i = 0; i < rowNum; i++){
        let row = document.createElement('div');
        canvas.appendChild(row).className = "row";
        console.log("works");

    };
};

function makeCells(colNum){
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < colNum; j++){
            let col = document.createElement('div');
            rows[j].appendChild(col).className = "cell";
            console.log("Works");
        };
    };
};
