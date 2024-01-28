const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  return (counterValue -= 1);
  spanWithValue.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  return (counterValue += 1);
  spanWithValue.textContent = counterValue;
});
