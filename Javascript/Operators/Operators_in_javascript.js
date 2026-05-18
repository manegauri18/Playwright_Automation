// JavaScript Operators
// ======================================================
// Operators are symbols that perform operations on
// values and variables.
// Types of Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Ternary Operator
// 6. String Operators
// 7. Type Operator
// ======================================================
// 1. Arithmetic Operators
// (+, -, *, /, %, **, ++, --)
// ======================================================
console.log("Addition 5 + 2 =", 5 + 2); // 7
console.log("Subtraction 5 - 2 =", 5 - 2); // 3
console.log("Multiplication 5 * 2 =", 5 * 2); // 10
console.log("Division 5 / 2 =", 5 / 2); // 2.5
// Modulus operator → returns remainder
console.log("73 % 6 =", 73 % 6); // 1
console.log("19 % 5 =", 19 % 5); // 4
// Exponent operator (power)
console.log("2 ** 3 =", 2 ** 3); // 8
console.log("5 ** 2 =", 5 ** 2); // 25
// Increment and Decrement Operators

let count = 10;
// Pre-increment
let preIncrement = ++count;
console.log("Pre Increment =", preIncrement); // 11
// Reset value
count = 10;
// Pre-decrement
let preDecrement = --count;
console.log("Pre Decrement =", preDecrement); // 9
// ======================================================
// 2. Assignment Operators
// (=, +=, -=, *=, /=, %=)
// ======================================================
let x = 10;
console.log("x =", x);
// Add and assign
x += 5; // x = x + 5
console.log("x += 5 →", x); // 15
// Subtract and assign
x -= 3; // x = x - 3
console.log("x -= 3 →", x); // 12
// Multiply and assign
x *= 2; // x = x * 2
console.log("x *= 2 →", x); // 24
// Divide and assign
x /= 4; // x = x / 4
console.log("x /= 4 →", x); // 6
// Modulus and assign
x %= 4; // x = x % 4
console.log("x %= 4 →", x); // 2
// ======================================================
// 3. Comparison Operators
// (==, ===, !=, !==, >, <, >=, <=)
// ======================================================
console.log(5 == "5"); // true (only value comparison)
console.log(5 === "5"); // false (value + type)

console.log(5 != 3); // true
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 3); // false
// ======================================================
// 4. Logical Operators
// (&&, ||, !)
// ======================================================
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
// ======================================================
// 5. Ternary Operator
// (condition ? trueValue : falseValue)
// ======================================================
let age = 18;
let result = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result);
// ======================================================
// 6. String Operators
// (+, +=)
// ======================================================
let firstName = "Ranjeet";
let lastName = "Kendre";
let fullName = firstName + " " + lastName;
console.log(fullName);
let message = "Hello ";
message += "World";
console.log(message);
// ======================================================
// 7. Type Operator
// ======================================================
let num = 100;

console.log(typeof num); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean

// ======================================================
// ASSIGNMENT OPERATORS
// ======================================================
// Assignment operators are used to assign values to variables.
// Simple Assignment
let x1 = 20;
console.log("Initial value of x:", x1); // 20
// Add and Assign (+=)
x1 += 5; // x1 = x1 + 5
console.log("x1 += 5 :", x1); // 25
// Subtract and Assign (-=)
x1 -= 3; // x1 = x1 - 3
console.log("x1 -= 3 :", x1); // 22
// Multiply and Assign (*=)
x1 *= 2; // x1 = x1 * 2
console.log("x1*= 2 :", x1); // 44
// Divide and Assign (/=)
x1 /= 4; // x1 = x1 / 4
console.log("x1 /= 4 :", x1); // 11
// Modulus and Assign (%=)
x1 %= 4; // x1 = x1 % 4
console.log("x1 %= 4 :", x1); // 3
// ======================================================
// COMPARISON OPERATORS
// ======================================================
// Comparison operators compare values and return
// either true or false.
let a = 5; // number
let b = 50;
let c = "5"; // string
// == (Loose Equality → compares only value)
console.log(a == b); // false
console.log(a == c); // true (string "5" converted to number)

// === (Strict Equality → compares value AND datatype)
console.log(a === b); // false
console.log(a === c); // false
// != (Loose Inequality)
console.log(a != b); // true
// !== (Strict Inequality)
console.log(a !== c); // true
// ======================================================
// RELATIONAL OPERATORS
// ======================================================
let num1 = 10;
let num2 = 20;
console.log("10 > 20 :", num1 > num2); // false
console.log("10 < 20 :", num1 < num2); // true
console.log("10 >= 10 :", num1 >= 10); // true
console.log("10 <= 20 :", num1 <= num2); // true
// ======================================================
// LOGICAL OPERATORS
// ======================================================
// && → AND operator
// Returns true only if ALL conditions are true
let isLoggedIn = true;
let isAdmin = false;
let isGuest = false;
let hasPermission = true;
console.log("\nAND (&&) Operator");
console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn && hasPermission); // true
console.log(isGuest && isAdmin); // false
// || → OR operator
// Returns true if AT LEAST ONE condition is true

console.log("\nOR (||) Operator");
console.log(isLoggedIn || isAdmin); // true
console.log(isLoggedIn || hasPermission);// true
console.log(isGuest || isAdmin); // false
// ======================================================
// TERNARY OPERATOR
// ======================================================
// Short form of if...else
// Syntax:
// condition ? valueIfTrue : valueIfFalse;
let Age = 20;
let msg = (Age >= 18) ? "Adult" : "Minor";
console.log(msg);
let age2 = 15;
let msg2 = (age2 >= 18) ? "Adult" : "Minor";
console.log(msg2);
let age3 = 20;
let msg3 = (age3 >= 18) ? "Hi" : "Hello";
console.log(msg3);
// ======================================================
// STRING OPERATOR (Concatenation)
// ======================================================
let FirstName = "Rahul";
let LastName = "Sharma";
let FullName = FirstName + " " + LastName;
console.log("Full Name :", FullName);
// ======================================================
// TYPE OPERATOR
// ======================================================

// typeof is used to check the datatype of a value
console.log(typeof "hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
