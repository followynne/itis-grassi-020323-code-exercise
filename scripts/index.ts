import { onNumberButtonClick } from './modules/numbers';
import { onClearButtonClick, onOperatorButtonClick } from './modules/operators';
import { calculateResult } from './modules/resultCalculation';

const numbers = document.querySelectorAll<HTMLDivElement>('.numbers div'); // number buttons
const operators = document.querySelectorAll<HTMLDivElement>('.operators div'); // operator buttons
const result = document.getElementById('result'); // equal button
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    onNumberButtonClick(e, resultDisplayed);
    resultDisplayed = false;
  });
}

// adding click handlers to operators buttons
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', (e) => onOperatorButtonClick(e));
}

onClearButtonClick();

if (result) {
  // on click of 'equal' button
  result.addEventListener('click', () => {
    calculateResult(resultDisplayed);
    resultDisplayed = true; // turning flag if result is displayed
  });
}
