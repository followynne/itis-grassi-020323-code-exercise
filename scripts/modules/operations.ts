import { AdmittedOperations } from '../types';

export const applyOperation = (
  operation: AdmittedOperations,
  operators: string[],
  numbers: string[],
  apply: (num: number, num2: number) => number,
) => {
  const numb = [...numbers];
  const oper = [...operators];
  let operationIndex = oper.indexOf(operation);

  while (operationIndex !== -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numb.splice(
      operationIndex,
      2,
      `${apply(
        parseFloat(numb[operationIndex]),
        parseFloat(numb[operationIndex + 1]),
      )}`,
    );
    oper.splice(operationIndex, 1);
    operationIndex = oper.indexOf(operation);
  }
  return [numb, oper];
};
