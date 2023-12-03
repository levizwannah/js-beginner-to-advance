# What is Programming
-> Is the act of writing a program

## What is a program
-> a set of instructions to enable to computer achieve a goal.

`1, 2, 3, 4, 5, 6`

## Algorithm
-> Step by Step instructions

## What is a Software
-> One or Many programs working together to achieve a goal.

# Lesson 1
========================== 

# Simple Program
Write a program that takes in the radius and output the area of a circle.

# Variables, Constants, Identifiers,
## Variables
- Placeholders for varying values throughout the program.
e.g 

```js
let x = 10;
x = 20;
x = 30;
```

## Constants
- Values do not change throughout the program.
- Declared using the `const` keyword
```js
const PI = 3.142; // constant
let radius = 10.5; // variable
let area = radius * radius * PI; // variable
```

## Identifiers
- Names given to programming elements such as variables, constants, classes, functions, etc.

### Rules for Identifiers
* must not start with a digit, but they can have digits in them. 
* They cannot start an operand as well.
* They cannot be a reserved word. e.g `for, let, const`
* They can be of any length as long as the compiler allows it.


# Lesson 2
=============================

# Data types (Weak and Dynamic Typing)
Data-types determine RAM space allocated, operation constraints on the data stored.

## Dynamic Typing
* The type of a variable is determined by the value it stores.

## Weakly Typed
* Implicit type casting (convert one datatype to another) done by the Language when a single operator behaves differently for different operands. e.g. `"Levi" + 5 => "Levi5" --- concatenation`

In Javascript, we have 8
1. Strings - Sequence of Characters. e.g. "James" 
2. Number - Any Number: Integers, Decimals (doubles, float)
3. Boolean - `true/false`
4. BigInt - Arbitrarily Large numbers
5. Undefined - An absence of value. It has one value `undefined`.
6. Null - An absence of an Object. It has one value `null`;
7. Object - A complex data type having properties and methods (functions). **Derived data type**
8. NaN - (Not a Number)

# Exercise 1
- Write a program that takes in 3 numbers and outputs their average.  

==========================================

# Lesson 3
This lesson covers assignments and operators. At the end of the lesson, there is an exercise to test what you have learnt so far.

## Assignment
Designating the value for a variable.
`x = 5;`.  
An assignment can be written as a statement or expression.

## Operators
### Addition (+)
- for numbers: returns the sum.
- for strings: concatenates the operands
### Subtraction (-)
- only works on numbers: returns the difference from left to right.
### Multiplication (*)
- only works on numbers: returns the product.
### Division (/)
- only works on numbers: returns the quotient.
- division by 0 return `Infinity`. Doesn't throw an error.
### Modulo (%)
- only works on numbers: (mainly integers). Divides right by left and returns the remainder of the division.
### Exponentiation (**)
- works on numbers. 
- raises x to a power y. `x ** y`
- accepts BigInts as operands unlike `Math.pow(x, y)`
### Augmented Assignment
- combining assignment with a mathematical operation.
- done to keep code clean and concise.
- usually the operator followed by the `=` sign.
  - x += 1 <=> x = x + 1;
  - x -= 1 <=> x = x - 1;
  - x *= 1 <=> x = x * 1;
  - x /= 1 <=> x = x / 1;
  - x %= 1 <=> x = x % 1;
  - x **= 3 <=> x = x ** 3;
### Increments and Decrements
`++` and `--` operators are used for incrementing or decrementing a value by 1. They are unary operators.

- Prefix-Increment: Increments and returns the incremented value. `++x`
- Postfix-Increment: Increments but returns the initial value. `x++`
- Prefix-Decrement: Decrements and returns the decremented value. `--x`
- Postfix-Decrement: Decrements but returns the initial value. `x--`

# Exercise 2
Write a program that changes a given amount of money in dollars($) to smaller amounts.  
For example, if the user enters 11.56, your program should output:
```
$11.56 consists of:
11 dollars,
2 quarters,
0 dimes,
1 nickels, and
1 pennies
```
> **Conversion table:**  
1 dollar = 100 cents  
1 Quarter = 25 cents  
1 dime = 10 cents  
1 nickel = 5 cents  
1 penny = 1 cent

# Reading Exercise 1
Read on operator precedence. That is, if multiple operators are in a single expression, in what order are they evaluated?

# Lesson 4
## Software development process
### Requirements specification
  - Understand the problem to address.
  - Document what the software must do.
  - A lot of user-developer interactions.
  - Functional requirement: what the software must do.
  - Non-functional requirements: how the software will do what it must do.
  - A critical study of the problem is usually required to identify the functional requirements of the software.

### System analysis
  - Analyze dataflow to determine system input from output.
  - Identify the output first, then determine the input.

### System Design
  - How to determine the output from input.
  - breaks the problem into smaller components.
  - choose how to implement these components.
  - each component is a subsystem.

  > system analysis and design describes the: Input, Process, and Output (IPO)

### Implementation
  - convert the system design into programs.
  - each component has its own program.
  - programs are integrated to work together.
  - involves coding, unit-testing, debugging
  - debugging removes bugs (errors)

### Testing
  - ensures that the software meets the requirement specification
  - remove hidden bugs.
  - usually done by another team.
  - types: unit, integration, stress, etc
  - can be automated.

### Deployment
  - make the software available to the users
  - hosted on a server, or user devices

### Maintenance
  - improve and update the software
  - add new features
  - fix hidden bugs
  - ever-changing environment
  - adapt to new technologies
  - fix security issues

## SDLC example
- refer to the previous example

# Lesson 5
## Selection
### Boolean
The bool data type has two values: `true` and `false`.
### Logical Operators
These operators are based on the rules of Logic and return a Boolean.
- ! : The `Not` or `Negation` Operator. E.g: `!A;`
- && : The `AND` operator. E.g: `A && B;`
- || : The `OR` operator. E.g: `A || B;`

#### Relational Operators
These are operators that compare and return `true` or `false`.  
- < : The `Less Than` Operator. E.g: `A < B;`
- <= : The `Less Than or Equal To` Operator. E.g: `A <= B;`
- > : The `Greater Than` Operator. E.g: `A > B;`
- >= : The `Greater Than or Equal To` Operator. E.g: `A >= B;`
- == : The `Equal To` Operator. E.g: `A == B;`
- != : The `Not Equal To` Operator. E.g: `A != B;`
- === : The `Strict Equality` Operator. E.g: `A === B;`
- !== : The `Strict Inequality` Operator. E.g: `A !== B;`

> **Note**: The strict equality and strict inequality operators are not available in statically typed languages like C++ or Java. They are used on dynamically and weakly typed languages like JavaScript.

### If Construct
The IF construct executes the code in a block only if its condition evaluates to true.  

*Syntax*:
```js
if(condition) {
  // statements...
}

```
### If-else construct
The if-else constructs executes the statement in the if-block if its condition evaluates to true. Otherwise, it executes the statements in the else-block.

*Syntax*:
```js
if(condition) {
  // statements...
}
else {
  // statements ...
}
```
### Multi-way If-Else Constructs
The multi-way IF-Else construct executes the first of many if-constructs that evaluates to true. Otherwise, it executes the statements in the else-block if there is an else block

*Syntax*:  
```js
if(condition) {
  // statements...
}
else if(condition) {
  // statements...
}
else if(condition) {
  // statements
}
.
.
.
else {
  // optional else block
}
```
### Exercise
Given two numbers num1 and num2, return the maximum and the minimum. Write your code in the function below.
```js
function max(num1, num2) {
  let m;

  // your code here...
  
  return m;
}

function min(num1, num2) {
  let m;
  
  // your code here...
  
  return m;
}
```

### Conditional Expressions
Expressions that evaluate to `true` or `false`
```js
let variable = 10 < 20 && x == y;
let anotherVar = (x && y) || (x - y == 20); 

```
## Switch Statements
Executes statement based on the value of a variable or an expression

```js
switch(expressionOrVariable) {
  case 'value1':
    {
      // do something
      break;
    }
  case 'value2':
    {
      // do something
      break;
    }
  default: 
    {
      // do nothing
    }
}

```

### Operator Precedence (Bonus)
| `var++` and `var--` (Postfix)  
| `+`, `-` (Unary plus and minus), `++var` and `--var` (Prefix)  
| (type) (Casting)  
| `!` (Not)  
| `*, /, %` (Multiplication, division, and remainder)  
| `+, -` (Binary addition and subtraction)  
| `<, <=, >, >=` (Relational)  
| `==, !=` (Equality)  
| `&&` (AND)  
| `||` (OR)  
| `=, +=, -=, *=, /=, %=` (Assignment operator)  
V

# Lesson 8
## Loops
Executes a block of statement while certain condition is true.
### While Loop
```js
let condition = true; // pre

while(condition === true) {
  // condition
  // post-execution
}

```
### Do-While Loop
```js
let condition = true; // pre

do {
  // statement
  // post-execution
}
while(condition === true);
```
### For Loop
```js
for(let condition = true; condition === true; post-execution) {
  // statement
}

```

### Exercise
**Use Loops to solve the below problems:**  

1. Given two integers (n1 and n2) find the Greatest common divisor of the two numbers.
2. Given a string S, determine if S is a palindrome. A palindrome is a string that spells the same when reversed.

# Lesson 9
## Functions
Functions are reusable block of codes. They can simplify and organize one's code.

### Defining a function
```js
function functionName(arg1, arg2, ...) {
  // code...
  return something|nothing
}

const functionName = (arg1, arg2, ...) => {
  // code ...
  return something|nothing
}
```
### Anonymous functions
Anonymous functions are functions that do not have a name. 
```js
function(arg1, arg2, ...){
  // code ...
}

() => {
  // code ...
}
```
### Calling a Function
see the below example
```js
const sum = (a, b) => {
  return a + b
}

// call the function
let output = sum(1, 2);
```
### Scopes
The scope of a programming element is the context in which it can be accessed.
1. Local Scope: Accessible only in the programming element it was declared in.
2. Global Scope: Accessible throughout the program.
3. Block Scope (Js specific): Accessible only in the block it was declared in.

```js
var title = "Mr."; // global variable

function joinName(firstName, lastName) {
  let fullName = `${title} ${firstName} ${lastName}`; // fullName is a local variable;

  return fullName;
}

{
  // not the same as global title
  // accessible only in this block
  let title = "Mrs."; // block-scoped

  // code ...
}

console.log(title); // logs the global title.
```

### Default Arguments
Default arguments are the values automatically given to a parameter in a function if no value was passed for the parament when the function was called.

```js
const sum = (a = 1, b = 2) => {
  return a + b;
}

console.log(sum(4, 5)); // logs 9
console.log(sum()); // logs 3 (1 + 2)

```

### Exercise
Write a function that converts Hexadecimal numbers to decimal numbers.
>**Hint:** Use the ASCII Value of the characters.