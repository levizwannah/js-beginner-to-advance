// get the user's input prompt-sync
// npm install prompt-sync
const PI = 3.142;
const prompt = require('prompt-sync')();

let radius = prompt('please enter the radius: ');

// calculate the area
let area = radius * radius * PI;

// output the area
console.log(`The area of the circle with radius ${radius} is ${area}`);
