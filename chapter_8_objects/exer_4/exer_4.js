let obj = {
  b: 2,
  a: 1,
  c: 3,
};


function keysToUpper (obj) {
  let result = Object.keys(obj).map((key) => key.toUpperCase());
  return result;
}



console.log(keysToUpper(obj));

