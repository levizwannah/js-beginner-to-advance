// let age = 20;
// let salary = 200000;

// if(age === 10) {
//     console.log('you are 10 years old')
// }
// if(age === 20) {
//     console.log('you are 20 years old')
// }

// switch(age > 20) {
//     case false: {
//         console.log('You are 10 years old');
        
//         break;
//     }
//     case true: {
//         console.log('You are 20 years old');
//         break;
//     }
//     default: {
//         console.log('default executed');
//     }
// }

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

let n1 = prompt('Enter a number: ');
let n2 = prompt('Enter another number: ');


console.log(`${max(n1, n2)} is the max of ${n1} && ${n2}`);
console.log(`${min(n1, n2)} is the min of ${n1} && ${n2}`)