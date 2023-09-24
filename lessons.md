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