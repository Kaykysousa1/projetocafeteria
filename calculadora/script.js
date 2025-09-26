const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clear() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

// Event listeners
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => chooseOperator(button.innerText));
});

document.getElementById('equals').addEventListener('click', compute);
document.getElementById('clear').addEventListener('click', clear);
