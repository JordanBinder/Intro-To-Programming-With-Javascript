
function sumOfSquares(numbers) {
  let resultingArray = numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  } , 0);
  return resultingArray;
}




let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83