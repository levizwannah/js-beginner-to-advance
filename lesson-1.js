const log = (...args) => console.log(...args);

let radius = 10;
const PI = 3.14;
let area = PI * Math.pow(radius, 2); // radius * radius

log(`The circle with radius ${radius} has area ${area}`);