let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi'; // key.value
  argument2 = 'hi'; // key
}

bar(foo, qux);

console.log(foo.a); // should log: 'hi'
console.log(qux); // should log: 'hello'