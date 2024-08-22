const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let gridSize = 16;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = getRandomColor();
  });
  return cell;
}

function drawRaw() {
  const row = document.createElement("div");
  row.classList.add("row");

  return row;
}

function drawGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = drawRaw();
    for (let j = 0; j < gridSize; j++) {
      const cell = drawCell();
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

drawGrid(gridSize);

btn.addEventListener("click", () => {
  const gridSizeInput = prompt("Enter grid size:");
  if (gridSizeInput) {
    container.innerHTML = "";
    gridSize = gridSizeInput;
    drawGrid(gridSize);
  }
});
