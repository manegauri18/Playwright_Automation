// 2. Implicit Type Conversion
// ======================================================
// JavaScript automatically converts data types
// when different data types are used together.
// -------------------------------
// Number → String
// -------------------------------
let result = "Age is " + 25;
console.log(result); // Age is 25
console.log(typeof result); // string
// -------------------------------
// String → Number
// -------------------------------
// Operators -, *, / automatically convert strings to numbers
console.log("20" - 5); // 15
console.log("10" * 5); // 50
console.log("20" / 5); // 4
// -------------------------------
// Boolean → Number
// -------------------------------
// true → 1

// false → 0
console.log(true + 1); // 2
console.log(2 + true); // 3
console.log(false + 5); // 5