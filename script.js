const operators = {
  add: (x, y) => x + y,
  minus: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
}
window.addEventListener("DOMContentLoaded", function() {
  const operand1Input = document.querySelector("#operand1");
  const operand2Input = document.querySelector("#operand2");
  const operatorSelect = document.querySelector("#operator");
  const calculateButton = document.querySelector("#calculate");
  const resultField = document.querySelector("#result");
  
  calculateButton.onclick = function() {
    const operand1 = operand1Input.value;
    const operand2 = operand2Input.value;
    const operator = operatorSelect.value;
    if (!operators[operator]) {
      return alert(`Operator ${operator} not implemented! (╯°□°)╯︵ ┻━┻`); 
    }
    const result = operators[operator](+operand1, +operand2);
    resultField.textContent = result;
  }
})