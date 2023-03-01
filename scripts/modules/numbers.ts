import { AdmittedOperations } from '../types';

export const onNumberButtonClick = (
  e: MouseEvent,
  isResultDisplayed: boolean,
) => {
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;

  // storing current input string and its last character in variables - used later
  const currentOperation = input.innerHTML;
  const operationLastChar = currentOperation[currentOperation.length - 1];

  // if result is not displayed, just keep adding
  if (isResultDisplayed === false) {
    input.innerHTML += (e.target as HTMLDivElement).innerHTML;
  } else if (
    (isResultDisplayed === true && operationLastChar === '+') ||
    operationLastChar === '-' ||
    operationLastChar === '×' ||
    operationLastChar === '÷'
  ) {
    // if result is currently displayed and user pressed an operator
    // we need to keep on adding to the string for next operation
    //isResultDisplayed = false;
    input.innerHTML += (e.target as HTMLDivElement).innerHTML;
  } else {
    // if result is currently displayed and user pressed a number
    // we need clear the input string and add the new input to start the new opration
    //isResultDisplayed = false;
    input.innerHTML = '';
    console.log(e.target);
    input.innerHTML += (e.target as HTMLDivElement).innerHTML;
  }
};
