let rlSync = require('readline-sync');

let age = rlSync.question(`How old are you?\n`);

console.log(`you are ${age} years old.`);

console.log(`in 10 years you will be ${Number(age) + 10} years old.`);

console.log(`in 20 years you will be ${Number(age) + 20} years old.`);

console.log(`in 30 years you will be ${Number(age) + 30} years old.`);

console.log(`in 40 years you will be ${Number(age) + 40} years old.`);