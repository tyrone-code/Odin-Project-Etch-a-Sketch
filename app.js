let grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  let gridItem = document.createElement("div");
  gridItem.setAttribute("class", "grid-item");
  gridItem.textContent = i;
  grid.appendChild(gridItem);
}
