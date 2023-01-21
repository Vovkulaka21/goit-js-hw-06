function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorName =  document.querySelector('.color');
const backgroundColor = document.querySelector('body');

colorButton.addEventListener('click', changeBgColorRandom);

function changeBgColorRandom () {

  const changedColor = getRandomHexColor();

  backgroundColor.style.backgroundColor = changedColor;
  colorName.textContent = `${changedColor}`

}
