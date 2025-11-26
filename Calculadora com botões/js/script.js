let display = document.getElementById('display');
let currentInput = '';

function pressButton(value) {
    if (value === 'C') {
        clearDisplay();
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (e) {
        display.value = 'Erro';
    }
}
