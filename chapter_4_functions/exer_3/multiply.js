function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function getNums(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let askForNum2 = getNums(`Enter your second number:`);

console.log(`${askForNum1} * ${askForNum2} = ${multiply(askForNum1, askForNum2)}`);