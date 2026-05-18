// Type Conversion in JavaScript
// ======================================================
// Type conversion is the process of converting a value
// from one data type to another data type.
// Types of Type Conversion
// 1. Implicit Type Conversion (Automatic)
// 2. Explicit Type Conversion (Manual)
// ======================================================
// 1. Explicit Type Conversion
// ======================================================
// The programmer manually converts the data type.
// JavaScript provides built-in functions for conversion:
// String()
// Number()
// Boolean()
// -------------------------------
// Number → String
// -------------------------------
let num = 22;
console.log(num); // 22
console.log(typeof num); // number
// Convert number to string
let str1 = String(num);
console.log(str1); // "22"
console.log(typeof str1); // string
// -------------------------------
// String → Number
// -------------------------------
let str2 = "1234";
console.log(str2); // "1234"
console.log(typeof str2); // string
// Convert string to number
let num2 = Number(str2);
console.log(num2); // 1234
console.log(typeof num2); // number

// -------------------------------
// Boolean Conversion
// -------------------------------
// Rules:
// 0 → false
// 1 → true
// "" (empty string) → false
// "text" (non empty string) → true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false