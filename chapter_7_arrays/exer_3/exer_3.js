let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(let i = 0; i < myArray.length; i++) {
  for(let p = 0; p < myArray[i].length; p++) {
    if (myArray[i][p] % 2 === 0) {
      console.log(myArray[i][p]);
    }
  }
}