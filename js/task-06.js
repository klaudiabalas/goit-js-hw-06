const form = document.querySelector("#validation-input");
const dataLength = Number(form.dataset.length);
form.addEventListener("input", () => {
  if (form.value.length === dataLength) {
    form.classList.replace("invalid", "valid");
  } else {
    form.classList.add("invalid");
  }
});
