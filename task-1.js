const grid = document.querySelector(".gridContainer");
const Input = document.getElementById("userinput");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${input.value}, 2fr)`
  );
