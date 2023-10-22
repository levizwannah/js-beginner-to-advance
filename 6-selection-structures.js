let a = true;
let b = false;

// Logical operators
a && b; // false
a || b; // true
!a; // false

// Relational operators
let x = 10, y = 20;
x > y; // false;
x >= y; // false;
x < y; // true;
x <= y; // true;
x == y; // false;
x === y; // '2' === 2
x != y; // true;
x !== y; // true;

// if construct
if(x > y) {
    console.log('Condition is true');
}

// if-else construct
if(x > y) {
    console.log('X is greater then Y');
}
else {
    console.log('X is less than Y');
}

// multi-way if-else construct
if(x === y) {
    console.log('x == y');
}
else if(x > y) {
    console.log('x > y');
}
else if (x < y) {
    console.log('x < y');
}
else {
    console.log('No condition evaluated to true');
}

// ternary if-else
(x > y) ? console.log('X > Y') : console.log('X <= Y');