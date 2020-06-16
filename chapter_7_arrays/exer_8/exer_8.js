
function oddLengths(arr) {
  return arr.reduce((resultArray, number) => {
    let length = number.length;
    if (length % 2 === 1) {
      resultArray.push(length);
    }
    return resultArray
  }, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]