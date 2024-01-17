/* STEP 1: Number types (integer, float, and double)
    declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
var num1 = 20;
var num2 = 19.9999;
// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo) */
var num3 = 20;
var num4 = 4;

var sum = num3 + num4;
console.log("sum: " + sum);
var diff = num3 - num4;
console.log("diff: " + diff);
var mul = num3 * num4;
console.log("mul: " + mul);
var div = num3 / num4;
console.log("div: " + div);
var mod = num3 % num4;
console.log("mod: " + mod);

// Try declaring and initializing a couple of variables as numbers

/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (*, /, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
var num5 = 20;
console.log(num5++);
console.log(++num5);
console.log(num5--);
console.log(num5);
console.log(--num5);

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
var num6 = 30;
var final = 50;

final += num6; // final = final + num6 // 80 = 50 + 30
console.log(final);
final -= num6;
console.log(final); // final = final - num6 // 50 = 80 - 30
final *= num6;
console.log(final); // final = final * num6 // 1500 = 50 * 30
final /= num6;
console.log(final); // final = final / num6 // 50 = 1500 / 30

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
var num7a = 5;
var num7b = "5";
var num7c = [5];
var num7d = ["5"];

console.log(num7a == num7b);
console.log(num7a === num7b);
console.log(num7a == num7c);
console.log(num7c == num7d);

console.log(num7a != num7b); // != !==

console.log(num7a <= 5);
console.log(num7a < 5);