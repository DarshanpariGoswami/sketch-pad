const grid = document.querySelector(".box");
const userInput = document.getElementById("userinpute");
const resetButton = document.querySelector(".reset");

createGrid = (userInput) => {
  for (let i = 0; i < userInput; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

function coworker() {
  userbutton.addEventListener("click", function () {
    let clorox = document.getElementById("colorizer");
    let color = clorox.value;
    return color;
  });
}
const square = document.querySelector("div");
square.addEventListener("mouseover", function (event) {
  event.target.classList.replace("square", "color");
});
/*
var gridItems = document.querySelectorAll(".grid");
let clorox = document.getElementById("colorx");
gridItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = clorox.value; // default black on load
  });
});
var gridItems = document.querySelectorAll(".grid");
gridItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = clorox.value;
  });
});*/

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(25, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(25, 2fr)`);
  createGrid();
});
