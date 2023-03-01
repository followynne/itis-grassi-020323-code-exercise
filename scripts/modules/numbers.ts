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

  // if result is currently displayed and user pressed a number
  // we need to clear the input string,
  // then we'll add the new input to start the new operation -
  // ELSE if result is not displayed
  // or if result is currently displayed and user pressed an operator,
  // we simply keep on adding to the string for next operation
  if (
    isResultDisplayed === true &&
    !(Object.values(AdmittedOperations) as string[]).includes(operationLastChar)
  ) {
    input.innerHTML = '';
    console.log(e.target);
  }

  input.innerHTML += (e.target as HTMLDivElement).innerHTML;
};
