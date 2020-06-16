

// factorial ex: factorial 5 = 5 * 4 * 3 * 2 * 1 = 120

function factorial(input) {
  let result = 1
  for (let counter = input; counter > 0; counter -= 1) {
  result = result * counter;
  }
  return result;
}

console.log(factorial(5));
