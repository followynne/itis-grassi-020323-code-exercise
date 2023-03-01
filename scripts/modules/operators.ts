export const onOperatorButtonClick = (e: MouseEvent) => {
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;
  
  // storing current input string and its last character in variables - used later
  const currentOperation = input.innerHTML;
  const operationLastChar = currentOperation[currentOperation.length - 1];

  // if last character entered is an operator, replace it with the currently pressed one
  if (
    operationLastChar === '+' ||
    operationLastChar === '-' ||
    operationLastChar === '×' ||
    operationLastChar === '÷'
  ) {
    var newString =
      currentOperation.substring(0, currentOperation.length - 1) +
      (e.target as HTMLDivElement).innerHTML;
    input.innerHTML = newString;
  } else if (currentOperation.length == 0) {
    // if first key pressed is an opearator, don't do anything
    console.log('enter a number first');
  } else {
    // else just add the operator pressed to the input
    input.innerHTML += (e.target as HTMLDivElement).innerHTML;
  }
};

export const onClearButtonClick = () => {
  const clear = document.getElementById('clear'); // clear button

  if (!clear) return;
  // clearing the input on press of clear
  clear.addEventListener('click', function () {
    const input = document.getElementById('input') as HTMLDivElement;
    if (!input) return;
    input.innerHTML = '';
  });
};
