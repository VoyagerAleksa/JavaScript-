'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const startBtn = document.getElementById('start');
const result = document.getElementById('result');

startBtn.addEventListener('click', () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const op = operation.value;

  let output;

  if (isNaN(a) || isNaN(b)) {
    output = 'Please enter valid numbers';
  } else {
    if (op === 'add') {
      output = a + b;
    } else if (op === 'sub') {
      output = a - b;
    } else if (op === 'multi') {
      output = a * b;
    } else if (op === 'div') {
      output = b !== 0 ? a / b : 'Cannot divide by zero';
    }
  }

  result.textContent = `Result: ${output}`;
});