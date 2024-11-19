let container = document.querySelector(".container");
let clear = document.querySelector(".clearGrid");
let change = document.querySelector(".changeSize");

function clearGrid() {
    console.log("Clear!");
    let divs = document.querySelectorAll(".cell");
    divs.forEach(cell => {
        cell.style.background = "white";
    });
}

function changeSize() {
    let numOfCells = prompt("How many cells per do you want?");
    let sizeOfEachCell = 640 / numOfCells;
    container.textContent = "";
    addDiv(numOfCells,sizeOfEachCell);
}

function addDiv(n,size){
    for (let i = 0; i < (n*n); i++) {
        let div = document.createElement("div");
        div.setAttribute("style", `height:${size}px;width:${size}px;`);
        div.classList.add("cell");
        div.addEventListener("mouseover", (e)=>{
            changeColor(e);
        });
        container.appendChild(div);
    }
}

function changeColor(event){
    event.target.style.background = "black";
}

window.onload = addDiv(16,40);

clear.addEventListener("click", clearGrid);
change.addEventListener("click", changeSize);

