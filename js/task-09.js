function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const spanColor = document.querySelector(".color");
const changeColor = document.querySelector("body");

button.addEventListener("click", () => {
  const selectedColor = getRandomHexColor();
  spanColor.textContent = selectedColor;
  changeColor.style.backgroundColor = selectedColor;
});
