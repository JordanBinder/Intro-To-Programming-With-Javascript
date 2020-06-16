let myProtoObj = {
  foo: 1,
  bar: 2,
};

// Create a new object named myObj that uses myProtoObj as its prototype.

let resultObj = Object.create(myProtoObj);

console.log(resultObj);