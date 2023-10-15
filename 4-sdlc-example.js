const prompt = require('prompt-sync')();

let amount = prompt('Please enter the amount($): ');

let cents = Math.trunc(amount * 100);

let dollars = Math.trunc(cents / 100);

cents %= 100;

let quarters = Math.trunc(cents / 25);

cents %= 25;

let dimes = Math.trunc(cents / 10);

cents %= 10;

let nickels = Math.trunc(cents / 5);

cents %= 5;

console.log(`$${amount} consists of: `);
console.log(`${dollars} dollar(s)`);
console.log(`${quarters} quarter(s)`);
console.log(`${dimes} dime(s)`);
console.log(`${nickels} nickel(s)`);
console.log(`${cents} penn(y|ies)`);