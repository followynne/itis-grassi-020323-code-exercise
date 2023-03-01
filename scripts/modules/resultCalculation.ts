import { AdmittedOperations } from '../types';
import { applyOperation } from './operations';

export const calculateResult = (resultDisplayed: boolean) => {
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;

  const { numbers, operators } = divideNumbersAndOperationsInInput(input);

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // As we move, we are alterning the original numbers and operators array
  // The final element remaining in the array will be the output
  const divide = applyOperation(
    AdmittedOperations.Division,
    operators,
    numbers,
    (n, n2) => n / n2,
  );
  const multi = applyOperation(
    AdmittedOperations.Multi,
    divide[1],
    divide[0],
    (n, n2) => n * n2,
  );
  const minus = applyOperation(
    AdmittedOperations.Minus,
    multi[1],
    multi[0],
    (n, n2) => n - n2,
  );
  const plus = applyOperation(
    AdmittedOperations.Plus,
    minus[1],
    minus[0],
    (n, n2) => n + n2,
  );

  input.innerHTML = plus[0][0]; // displaying the output
};

const divideNumbersAndOperationsInInput = (input: HTMLElement) => {
  // this is the string that we will be processing eg. -10+26+33-56*34/23
  const inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  const numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  const operators = inputString.replace(/[0-9]|\./g, '').split('');

  console.log(`input was: ${inputString}`);
  console.log(`operators inserted: ${operators}`);
  console.log(`numbers inserted: ${numbers}`);
  console.log('----------------------------');
  return { numbers, operators };
};
