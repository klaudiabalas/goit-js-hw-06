const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (value) => {
  outputName.textContent = inputName.value.trim() || "Anonymous";
});
