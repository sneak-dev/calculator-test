let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function calculation(inputValue) {
    const display = document.getElementById("calculate_process");
    const result = document.getElementById("result");
    
    if (inputValue === '=') {
        if (currentInput && operator && previousInput) {
                const calculation = previousInput + operator + currentInput;
                try {
                    if (operator === '/' && Number(currentInput) === 0) {
                        throw new Error('Division by zero');
                    }
                    const answer = eval(calculation);
                    if (typeof answer !== 'number' || !isFinite(answer)) {
                        throw new Error('Invalid calculation');
                    }
                    result.value = answer;
                    display.value = calculation + ' = ' + answer;
                    currentInput = answer.toString();
                    previousInput = '';
                    operator = '';
                    shouldResetDisplay = true;
                } catch (e) {
                    result.value = 'Error';
                    display.value = calculation + ' = Error';
                    currentInput = '';
                    previousInput = '';
                    operator = '';
                    shouldResetDisplay = true;
                }
        }
    } else if (inputValue==="+"||inputValue==="-"||inputValue==="*"||inputValue==="/") {
        if (currentInput && operator && previousInput) {
                const calculation = previousInput + operator + currentInput;
                try {
                    if (operator === '/' && Number(currentInput) === 0) {
                        throw new Error('Division by zero');
                    }
                    const answer = eval(calculation);
                    if (typeof answer !== 'number' || !isFinite(answer)) {
                        throw new Error('Invalid calculation');
                    }
                    previousInput = answer.toString();
                    operator = inputValue;
                    currentInput = '';
                    display.value = previousInput + operator;
                    result.value = previousInput;
                } catch (e) {
                    result.value = 'Error';
                    display.value = calculation + ' = Error';
                    currentInput = '';
                    previousInput = '';
                    operator = '';
                    shouldResetDisplay = true;
                }
        } else if (currentInput) {
            previousInput = currentInput;
            operator = inputValue;
            currentInput = '';
            display.value = previousInput + operator;
        }
    } else if (inputValue === '.') {
        if (shouldResetDisplay) {
            currentInput = '0.';
            shouldResetDisplay = false;
        } else if (!currentInput.includes('.')) {
            currentInput += currentInput ? '.' : '0.';
        }
        result.value = currentInput;
        display.value = previousInput + operator + currentInput;
    } else {
        if (shouldResetDisplay) {
            currentInput = inputValue;
            shouldResetDisplay = false;
        } else {
            currentInput += inputValue;
        }
        result.value = currentInput;
        display.value = previousInput + operator + currentInput;
    }
}

function clearAll() {
    document.getElementById("calculate_process").value = "";
    document.getElementById("result").value = "0";
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

function backspace() {
    const result = document.getElementById("result");
    const display = document.getElementById("calculate_process");
    
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        result.value = currentInput || '0';
        display.value = previousInput + operator + currentInput;
    } else if (operator) {
        operator = '';
        currentInput = previousInput;
        previousInput = '';
        result.value = currentInput;
        display.value = currentInput;
    } else if (previousInput.length > 0) {
        previousInput = previousInput.slice(0, -1);
        result.value = previousInput || '0';
        display.value = previousInput;
    }
}