let grid = document.querySelector(".grid");
let userInput = "";
let resetButtonDiv = document.querySelector(".resetButtonDiv");
let makeGrid = function () {
  let resetButton = document.createElement("button");

  resetButton.setAttribute("class", "reset-grid");
  resetButton.innerText = "RESET GRID";
  resetButtonDiv.appendChild(resetButton);
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
    gridItem.style.width = heightAndWidth + "%";
    gridItem.style.height = heightAndWidth + "vh";
    grid.appendChild(gridItem);
  }
  if (userInput > 100) {
    makeGrid();
  }
  resetButton.addEventListener("click", () => {
    const response = confirm("Are you sure you want to reset the grid?");

    if (response) {
      location.reload();
    } else {
      console.log(null);
    }
  });
};
// the JavaScript file

makeGrid();
