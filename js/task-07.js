const sizeText = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${sizeText.value}px`;
sizeText.addEventListener("input", () => {
  text.style.fontSize = `${sizeText.value}px`;
});
