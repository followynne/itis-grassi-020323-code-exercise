import { AdmittedOperations } from '../types';

export const onNumberButtonClick = (
  e: MouseEvent
  //isResultDisplayed: boolean,
) => {
  const input = document.getElementById('input') as HTMLDivElement;
  const resultDisplayed = document.getElementById(
    'is-result-displayed',
  ) as HTMLInputElement;

  // prevent any of the 2 items from throwing nullreferenceexceptions
  if (!input || !resultDisplayed) return;

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
    resultDisplayed.value === 'true' &&
    !(Object.values(AdmittedOperations) as string[]).includes(operationLastChar)
  ) {
    input.innerHTML = '';
    console.log(e.target);
  }

  input.innerHTML += (e.target as HTMLDivElement).innerHTML;
  resultDisplayed.value = 'false';
};
