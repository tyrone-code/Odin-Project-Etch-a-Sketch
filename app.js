let grid = document.querySelector(".grid");
let userInput = "";
// for (let i = 1; i <= totalNumSquares; i++) {}

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
    let gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");
    grid.appendChild(gridItem);
    gridItem.style.width = heightAndWidth + "%";
    gridItem.style.height = heightAndWidth + "vh";
    if (userInput >= 40) {
      gridItem.style.width = 2 + "%";
      gridItem.style.height = 3 + "vh";
    }
  }
  if (userInput > 100) {
    makeGrid();
  }
};

makeGrid();
