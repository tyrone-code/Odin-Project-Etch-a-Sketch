let userInput = prompt("enter how many squares you want per side: ");

let grid = document.querySelector(".grid");

let heightAndWidth = 100 / userInput;
let totalNumSquares = userInput * userInput;

for (let i = 1; i <= totalNumSquares; i++) {
  let gridItem = document.createElement("div");
  gridItem.setAttribute("class", "grid-item");
  gridItem.textContent = i;
  grid.appendChild(gridItem);
  gridItem.style.width = heightAndWidth + "%";
  gridItem.style.height = heightAndWidth + "vh";
}
// Change the background color

// Change the font size
// myElement.style.fontSize = "16px";
