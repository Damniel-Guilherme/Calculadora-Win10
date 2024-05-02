$(document).ready(function() {
    const buttons = $('#numeros button');
    const display = $('.nr_resultado');

    let primeiroNumero = '';
    let segundoNumero = '';
    let operacao = '';
    let resultadoAnterior = '';
    

    buttons.click(function() {
        const valor = $(this).text().trim();

        if (valor === 'C') {
            limparVisor();
        } else if (!isNaN(valor) || valor === '.') {
            if (operacao === '') {
                primeiroNumero += valor;
            } else {
                segundoNumero += valor;
            }
            display.val(display.val() + valor);
        } else {
            if (valor === '=') {
                if (resultadoAnterior !== '') {
                    primeiroNumero = resultadoAnterior;
                }
                calcularResultado();
            } else {
                if (operacao === '') {
                    operacao = valor;
                    display.val(display.val() + valor);
                }
            }
        }
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
        display.val(resultado);
        primeiroNumero = resultado.toString();
        resultadoAnterior = primeiroNumero;
        segundoNumero = '';
        operacao = '';
    }

    function limparVisor() {
        display.val('');
        primeiroNumero = '';
        segundoNumero = '';
        operacao = '';
        resultadoAnterior = '';
    }
});