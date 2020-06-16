// Use map and filter to first determine the lengths of all the elements in an array of string values,
// then discard the even values (keep the odd values).


function oddLengths(arr) {
  let newNumbersArray = arr.map((letters) => {
    return letters.length;
  });
  
  newNumbersArray = newNumbersArray.filter((number) => {
    return number % 2 === 1;
  });
  return newNumbersArray;
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

//

// If I was using for loop method:

// iterate over array
  // push the length of the number to a new array

// use filter to filter out even values 