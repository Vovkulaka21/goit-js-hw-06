const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSize.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    console.log(event.target.value)
    text.style.fontSize = `${event.target.value}px`;
};