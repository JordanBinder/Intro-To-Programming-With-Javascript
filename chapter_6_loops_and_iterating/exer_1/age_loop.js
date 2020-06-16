let rlSync = require('readline-sync');

let age = rlSync.question('How old are you? ');

age = parseInt(age);

console.log(`you are ${age} years old.`);

for (let futureUser = 10; futureUser <= 40; futureUser += 10) {
  console.log( `In ${futureUser} years, you will be ${age + futureUser} years old`);
}
