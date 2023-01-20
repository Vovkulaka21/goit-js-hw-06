const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

textInput.addEventListener("input", newInput);

function newInput(event) {
  textSpan.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    textSpan.textContent = "Anonymous";
  }
}