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

# Assignment
- Write a program that takes in 3 numbers and outputs their average.