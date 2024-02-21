const buttons = document.querySelectorAll('#numeros button');
const display = document.querySelector('.nr_resultado');

let primeiroNumero = '';
let segundoNumero = '';
let operacao = '';
let resultadoAnterior = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent.trim();

        if (valor === 'C') {
            limparVisor();
        } else if (!isNaN(valor) || valor === '.') {
            if (operacao === '') {
                primeiroNumero += valor;
            } else {
                segundoNumero += valor;
            }
            display.value += valor;
        } else {
            if (valor === '=') {
                if (resultadoAnterior !== '') {
                    primeiroNumero = resultadoAnterior;
                }
                calcularResultado();
            } else {
                if (operacao === '') {
                    operacao = valor;
                    display.value += valor;
                }
            }
        }
    });
});

function calcularResultado() {
    let resultado;
    switch (operacao) {
      case '=':
        resultado = parseFloat(resultado) + parseFloat(segundoNumero);
        break;
        case '+':
            resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
            break;
        case '-':
            resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
            break;
        case '*':
            resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
            break;
        case '/':
            resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
            break;
        default:
            resultado = 'Erro';
            break;
    }
    display.value = resultado;
    primeiroNumero = resultado.toString();
    resultadoAnterior = primeiroNumero;
    segundoNumero = '';
    operacao = '';
}

function limparVisor() {
    display.value = '';
    primeiroNumero = '';
    segundoNumero = '';
    operacao = '';
    resultadoAnterior = '';
}
