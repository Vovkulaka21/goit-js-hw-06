let counterValue = 0;
const buttonDecr = document.querySelector('button[data-action = decrement]');
const buttonIncr = document.querySelector('button[data-action = increment]');
const currentValue = document.querySelector('#value');

const clickDecrement = () => {
    counterValue -= 1;
    currentValue.textContent = counterValue
};
const clickIncrement = () => {
    counterValue += 1;
    currentValue.textContent = counterValue
};

buttonDecr.addEventListener('click', clickDecrement);
buttonIncr.addEventListener('click', clickIncrement);