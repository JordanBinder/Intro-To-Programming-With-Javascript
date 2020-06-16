let myProtoObj = {
  foo: 1,
  bar: 2,
};



let resultObj = Object.create(myProtoObj);

resultObj.qux = 3;

console.log(resultObj);