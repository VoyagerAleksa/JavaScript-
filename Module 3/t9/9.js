'use strict';

const input = document.getElementById('calculation');
const startBtn = document.getElementById('start');
const result = document.getElementById('result');

startBtn.addEventListener('click', () => {
  const calc = input.value.trim();
  let a, b, output;

  if (calc.includes('+')) {
    [a, b] = calc.split('+');
    output = Number(a) + Number(b);
  } else if (calc.includes('-')) {
    [a, b] = calc.split('-');
    output = Number(a) - Number(b);
  } else if (calc.includes('*')) {
    [a, b] = calc.split('*');
    output = Number(a) * Number(b);
  } else if (calc.includes('/')) {
    [a, b] = calc.split('/');
    output = Number(b) === 0 ? 'Cannot divide by zero' : Number(a) / Number(b);
  } else {
    output = 'Invalid input';
  }

  result.textContent = `Result: ${output}`;
});