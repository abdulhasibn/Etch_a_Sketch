const canvas = document.querySelector(".canvas");
function makeCells(rows, cols){
    canvas.style.setProperty(("--grid-rows"), rows);
    canvas.style.setProperty(("--grid-cols"), cols);
    for (let i = 0; i < (rows * cols); i ++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "grid_item";
    }
    let displaySize = document.createElement("p");
    displaySize.innerText = `${rows}x${cols}`;
    const hero = document.querySelector(".hero");
    hero.appendChild(displaySize).className = "display_size";

}
makeCells(16, 16);
const grids = document.getElementsByClassName("grid_item");
const blackButton =document.getElementById("black");
blackButton.addEventListener('click', () =>{
    for (const grid of grids){
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = "black"
        } );
    }
});
const eraserButton = document.getElementById("eraser");
eraserButton.addEventListener('click', () =>{
    for (const grid of grids){
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = "white"
        } );
    }
});
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    for (const grid of grids){
        grid.style.backgroundColor = "white";
    }
})