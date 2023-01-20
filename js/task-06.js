const myInput = document.querySelector("#validation-input");


myInput.addEventListener("blur", inputBlur);

function inputBlur(event) {
  const valueLength = event.currentTarget.value.length;
  const inputLength = Number(event.currentTarget.dataset.length);
    if (valueLength === inputLength) {
        myInput.classList.add("valid")
        myInput.classList.remove("invalid")
    }   else {
        myInput.classList.add("invalid")
        myInput.classList.remove("valid")
    }
}
