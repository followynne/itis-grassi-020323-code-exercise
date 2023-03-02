import { onNumberButtonClick } from './modules/numbers';
import { onClearButtonClick, onOperatorButtonClick } from './modules/operators';
import { calculateResult } from './modules/resultCalculation';

const numbers = document.querySelectorAll<HTMLDivElement>('.numbers div'); // number buttons
const operators = document.querySelectorAll<HTMLDivElement>('.operators div'); // operator buttons
const result = document.getElementById('result'); // equal button
const clear = document.getElementById('clear'); // clear button

// adding click handlers to number buttons
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', onNumberButtonClick);
}

// adding click handlers to operators buttons
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', onOperatorButtonClick);
}

if (clear) {
  // adding click handler on clear button
  clear.addEventListener('click', onClearButtonClick);
}

if (result) {
  // adding click handler on result button
  result.addEventListener('click', calculateResult);
}
