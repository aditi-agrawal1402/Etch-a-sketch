let container = document.querySelector(".container");
let clear = document.querySelector(".clearGrid");
let change = document.querySelector(".changeSize");
let normal = document.querySelector(".normal");
let color = document.querySelector(".color");
let shade = document.querySelector(".shade");

let colorChoice = "black";

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
            changeColor(e,colorChoice);
        });
        container.appendChild(div);
    }
}

function changeColor(event,choice){
    if(choice == "black"){
        event.target.style.background = "black";
        event.target.style.opacity = 1;
    }
    else if(choice == "random"){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        event.target.style.opacity = 1;
        event.target.style.background = `rgb(${r},${g},${b})`;
    }
    else{
        let currOpacity = parseFloat(event.target.style.opacity) || 1;
        if(event.target.style.background == "white"){
            event.target.style.background = "black";
            event.target.style.opacity = 0.1;
        }
        else{
            if(currOpacity < 1){
                event.target.style.opacity = Math.min(currOpacity + 0.1,1);
                console.log(event.target.style.opacity);
            }
        }
    }
}

function changeToColor(){
    colorChoice = "random";
    clearGrid();
}

function changeToNormal(){
    colorChoice = "black";
    clearGrid();
}

function changeToShade(){
    colorChoice = "shade";
    clearGrid();
}

window.onload = addDiv(16,40);

clear.addEventListener("click", clearGrid);
change.addEventListener("click", changeSize);
normal.addEventListener("click",changeToNormal);
color.addEventListener("click",changeToColor);
shade.addEventListener("click",changeToShade);

