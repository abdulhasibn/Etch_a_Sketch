const canvas = document.querySelector(".canvas");
function makeCells(rows, cols){
    canvas.style.setProperty(("--grid-rows"), rows);
    canvas.style.setProperty(("--grid-cols"), cols);
    for (let i = 0; i < (rows * cols); i ++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "grid-item";
    }

}
makeCells(16,16);