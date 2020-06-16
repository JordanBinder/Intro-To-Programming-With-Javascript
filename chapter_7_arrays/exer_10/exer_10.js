let arr = [
  ["test", "hello", "world"],
  ["example", 6, "mem", null],
  [4, 8, 12]
];

arr[1][2]

//pseudo-code

// new array

// iterate over array w/ i
  // iterate over nested arrays w/ j
    // if array[i][j] === "mem"
      // .push to new array

// all the code I wrote that was unneccesary XD

/* for (let i = 0; i < arr.length; i++) {
  for (let j = 0; i < arr.length; i++) {
    if arr[i][j] === "mem" {
      resultArray.push(arr[i][j]);
    }
  }
  return resultArray;
}
/* 