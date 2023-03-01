export const calculateResult = (resultDisplayed: boolean) => {
  const input = document.getElementById('input') as HTMLDivElement;
  if (!input) return;

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, '').split('');

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log('----------------------------');

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf('÷');
  while (divide != -1) {
    numbers.splice(
      divide,
      2,
      (
        parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1])
      ).toString(),
    );
    operators.splice(divide, 1);
    divide = operators.indexOf('÷');
  }

  var multiply = operators.indexOf('×');
  while (multiply != -1) {
    numbers.splice(
      multiply,
      2,
      (
        parseFloat(numbers[multiply]) * parseFloat(numbers[multiply + 1])
      ).toString(),
    );
    operators.splice(multiply, 1);
    multiply = operators.indexOf('×');
  }

  var subtract = operators.indexOf('-');
  while (subtract != -1) {
    numbers.splice(
      subtract,
      2,
      (
        parseFloat(numbers[subtract]) - parseFloat(numbers[subtract + 1])
      ).toString(),
    );
    operators.splice(subtract, 1);
    subtract = operators.indexOf('-');
  }

  var add = operators.indexOf('+');
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1]).toString(),
    );
    operators.splice(add, 1);
    add = operators.indexOf('+');
  }

  input.innerHTML = numbers[0]; // displaying the output
};
