const canvas = document.querySelector(".canvas");
function makeCells(vals){
    clearCanvas();
    canvas.style.setProperty(("--grid-rows"), vals);
    canvas.style.setProperty(("--grid-cols"), vals);
    for (let i = 0; i < (vals**2); i ++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "grid_item";
    }
}
function clearCanvas(){
    canvas.innerText = "";
}
let slider = document.getElementById("range");
let displaySize = document.createElement("p");
let sliderValue = slider.value;
displaySize.innerText = `${sliderValue}x${sliderValue}`;
const sliderContainer = document.querySelector(".slider_container");
sliderContainer.appendChild(displaySize).className = "display_size";
slider.oninput = (e) => {
    let gridValue = e.target.value;
    displaySize.innerText = `${gridValue}x${gridValue}`;
    makeCells(gridValue);
}
makeCells(sliderValue);
const grids = document.getElementsByClassName("grid_item");
const blackButton =document.getElementById("black");
blackButton.addEventListener('click', () =>{
    for (const grid of grids){
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = "black"
        } );
    }
});
//const shaderButton =document.getElementById("shader");
//shaderButton.addEventListener('click', () =>{
  //  let counter = 1;
    //for (const grid of grids){
      //  grid.addEventListener('mouseover',() => {
        //    function makeShady(){
          //      counter++;
            //    return counter * 2;
        //    }
      //      grid.style.backgroundColor = `rgba(0,0,0,${makeShady()}%)`;
    //    } );
  //  }
//});
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
    let randomColors = ["red", "green", "blue", "yellow", "brown", "grey", "purple", "violet", "aliceblue", "aquamarine", "navy", "olive" ]    
    function getColor() {
        let randomIndexNo = Math.floor(Math.random() * randomColors.length);
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
