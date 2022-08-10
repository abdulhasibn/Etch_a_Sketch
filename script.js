const canvas = document.querySelector(".canvas");
function makeCells(rows, cols){
    canvas.style.setProperty(("--grid-rows"), rows);
    canvas.style.setProperty(("--grid-cols"), cols);
    for (let i = 0; i < (rows * cols); i ++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "grid_item";
    }
}
let slider = document.getElementById("range");
let displaySize = document.createElement("p");
displaySize.innerText = `${slider.value}x${slider.value}`;
const sliderContainer = document.querySelector(".slider_container");
sliderContainer.appendChild(displaySize).className = "display_size";
slider.oninput = function(){
    displaySize.innerText = `${this.value}x${this.value}`;
}
function getSliderValue(){
    return slider.value;
}
makeCells(getSliderValue(), getSliderValue());
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
});
const randomButton = document.getElementById("random");
randomButton.addEventListener("click", () => {
    let randomColors = ["red", "green", "blue", "yellow", "brown", "grey", "purple" ]    
    function getColor() {
        let randomIndexNo = Math.floor(Math.random() * 6);
        return randomColors[randomIndexNo];
    }
    for (const grid of grids){
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = getColor();
        });
    };
});

let colorWell;
let defaultValue = "#ff0000";
window.addEventListener("load", startUp);

function startUp(){
    colorWell = document.getElementById("color_well");
    colorWell.value = defaultValue;
    colorWell.addEventListener('change', updateAll)
};
function updateAll(event){
    for (const grid of grids){
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = event.target.value;
        });
    };
};
