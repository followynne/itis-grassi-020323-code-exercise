import { AdmittedOperations } from '../types';

export const onOperatorButtonClick = (e: MouseEvent) => {
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;

  // storing current input string and its last character in variables - used later
  const currentOperation = input.innerHTML.trim();
  const operationLastChar = currentOperation[currentOperation.length - 1];

  if (currentOperation.length == 0) {
    // if first key pressed is an operator, don't do anything
    console.log('enter a number first!');
    return;
  }

  // if last character entered is an operator,
  // replace it with the currently pressed one
  let updatedString = '';
  if (
    (Object.values(AdmittedOperations) as string[]).includes(operationLastChar)
  ) {
    updatedString =
      currentOperation.substring(0, currentOperation.length - 1) +
      (e.target as HTMLDivElement).innerHTML;
  }
  // else we just add the pressed operator to the input
  else {
    updatedString = input.innerHTML + (e.target as HTMLDivElement).innerHTML;
  }

  input.innerHTML = updatedString;
};

export const onClearButtonClick = () => {
  // clearing the input on press of clear
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;
  input.innerHTML = '';
};
