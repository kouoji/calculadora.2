function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === ',') {
        const currentValue = display.value;
        const lastChar = currentValue.slice(-1);

        // Verifica se o último caractere é um número ou fecha parêntese
        if (!isNaN(parseInt(lastChar)) || lastChar === ')') {
            display.value += value;
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n + 1);
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
        let result;
        if (expression.includes('PA(')) {
            // Calcular Progressão Aritmética
            const values = expression.split('PA(')[1].split(')')[0].split(',');
            const a = parseFloat(values[0]);
            const n = parseFloat(values[1]);
            const d = parseFloat(values[2]);
            result = a + (n - 1) * d;
        } else if (expression.includes('PG(')) {
            // Calcular Progressão Geométrica
            const values = expression.split('PG(')[1].split(')')[0].split(',');
            const a = parseFloat(values[0]);
            const n = parseFloat(values[1]);
            const r = parseFloat(values[2]);
            result = a * Math.pow(r, n - 1);
        } else if (expression.includes('log(')) {
            // Calcular Logaritmo
            const values = expression.split('log(')[1].split(')')[0].split(',');
            const base = parseFloat(values[0]);
            const number = parseFloat(values[1]);
            result = Math.log(number) / Math.log(base);
        } else if (expression.includes('Fibonacci(')) {
            // Calcular Fibonacci
            const n = parseInt(expression.split('Fibonacci(')[1].split(')')[0]);
            result = fibonacci(n).join(', ');
        } else {
            // Avaliar outras expressões
            result = eval(expression);
        }

        if (result !== undefined) {
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Erro';
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
