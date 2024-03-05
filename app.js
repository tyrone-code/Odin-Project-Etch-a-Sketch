let grid = document.querySelector(".grid");
let userInput = "";
let resetButtonDiv = document.querySelector(".resetButtonDiv");
let resetButton = document.createElement("button");
let gridItem = "";
resetButton.setAttribute("class", "reset-grid");
resetButton.innerText = "RESET GRID";
resetButtonDiv.appendChild(resetButton);
let makeGrid = function () {
  userInput = prompt("enter how many squares you want per side (max 100): ");
  let heightAndWidth = 100 / userInput;
  let totalNumSquares = userInput * userInput;
  let i = 0;

  while (userInput <= 100) {
    i++;
    if (i > totalNumSquares) {
      break;
    }
    gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");
    gridItem.style.width = heightAndWidth + "%";
    gridItem.style.height = heightAndWidth + "vh";
    grid.appendChild(gridItem);
    const makeBlack = (event) => (event.target.style.backgroundColor = "black");
    gridItem.addEventListener("mousedown", makeBlack);
    gridItem.addEventListener("mouseover", (event) => {
      if (event.buttons === 1) makeBlack(event);
    });
  }
  if (userInput > 100) {
    makeGrid();
  }
};
resetButton.addEventListener("click", () => {
  const response = confirm("Are you sure you want to reset the grid?");

  if (response) {
    location.reload();
  } else {
    console.log(null);
  }
});

// const boxes = [...document.getElementsByClassName("grid-item")];
// const makeBlack = (event) => (event.target.style.backgroundColor = "black");

makeGrid();
