// // conditional expressions
// let age = 26;

// let isEligible = age >= 18 && !(age > 40);
// let val = 0;

// switch(val) {
//     case 0: 
//     case 1:
//         {
//             console.log(`val is 0 or 1`);
//             break;
//         }
//     case 2: 
//         {
//             console.log(`val is 2`)
//             break;
//         }
//     default:
//         {
//             console.log('nothing matched');
//         }
// }

// let x = age++ || age-- || -1 || ++age && 1 + 2 && true || !isEligible && age >= 5 * 34 || age === 4;
// let m = true && false || true;

function max(num1, num2) {
    let m;

    m = (num1 > num2) ? num1 : num2;

    return m;
}
  
function min(num1, num2) {
    let m;

    m = (num1 < num2) ? num1 : num2;

    return m;
}

const prompt = require('prompt-sync')();

let n1 = prompt("Enter number 1: ");
let n2 = prompt("Enter number 2: ");

console.log(`The max of ${n1} && ${n2} is ${max(n1, n2)}`);
console.log(`The min of ${n1} && ${n2} is ${min(n1, n2)}`);