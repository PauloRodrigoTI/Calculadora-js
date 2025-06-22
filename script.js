let display = document.getElementById('display');

function adicionar(valor) {
    const ultimoChar = display.value.slice(-1);
    const operadores = ['+', '-', '*', '/', '%'];

    if (operadores.includes(valor) && operadores.includes(ultimoChar)) {
        return;
    }

    display.value += valor;
}

function limpar() {
    display.value = '';
}

function calcular() {
    try {
        let resultado = eval(display.value.replace('%', '/100'));
        display.value = resultado;
    } catch {
        display.value = 'Erro';
    }
}

function raiz() {
    try {
        let valor = parseFloat(display.value); 
        if (isNaN(valor) || valor < 0) {
            display.value = 'Inválido';
        } else {
            display.value = Math.sqrt(valor);
        }
    } catch {
        display.value = 'Erro';
    }
}