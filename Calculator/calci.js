let operation = '';
let inputValue = '';
let clearDisplay = true;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace'); // Added backspace button
const display = document.querySelector('.display');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (clearDisplay) {
            display.value = '';
            clearDisplay = false;
        }
        display.value += number.value;
        inputValue = display.value;
        if (operation) {
            display.value = operation + inputValue;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (inputValue && operation) {
            operation += inputValue + operator.value;
        } else {
            operation = display.value + operator.value;
        }
        clearDisplay = true;
        display.value = operation; // Display the current expression
    });
});

equals.addEventListener('click', () => {
    if (inputValue && operation) {
        operation += inputValue;
        inputValue = eval(operation);
        display.value = operation + '=' + inputValue;
        operation = '';
        clearDisplay = true;
    }
});

clear.addEventListener('click', () => {
    display.value = '';
    operation = '';
    inputValue = '';
    clearDisplay = true;
});

backspace.addEventListener('click', () => {
    if (clearDisplay) {
        display.value = '';
        clearDisplay = false;
    }
    display.value = display.value.slice(0, -1);
    inputValue = display.value;
    if (operation) {
        display.value = operation + inputValue;
    }
});
