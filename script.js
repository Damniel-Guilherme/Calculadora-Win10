let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  let result;
  try {
    result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Erro de cálculo");
    }
  } catch (error) {
    result = "Erro";
  }
  display.value = result;
}

function clearDisplay() {
  display.value = "";
}
