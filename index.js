const displayValueBefore = document.getElementById('value-before');
const displayValueActual = document.getElementById('value-actual');
const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayValueBefore, displayValueActual);

buttonNumber.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonOperator.forEach(button => {
    button.addEventListener('click', () => display.addOperator(button.value));
});