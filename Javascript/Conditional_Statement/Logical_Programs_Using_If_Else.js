// LOGICAL PROGRAMS USING IF-ELSE
// ==================================================
console.log("\n---- Logical Programs ----");
// --------------------------------------------------
// Check Positive / Negative / Zero
// --------------------------------------------------
let num = 0;
if (num > 0) {
console.log("Number is Positive");
}
else if (num < 0) {
console.log("Number is Negative");
}

else {
console.log("Number is Zero");
}
// --------------------------------------------------
// Check Even or Odd Number
// --------------------------------------------------
let number = 7;
if (number % 2 == 0) {
console.log("Even Number");
}
else {
console.log("Odd Number");
}
// --------------------------------------------------
// Find Largest Number among Three Numbers
// --------------------------------------------------
let a = 100;
let b = 2000;
let c = 400;
if (a > b && a > c) {
console.log("a is greater than b and c");
}
else if (b > a && b > c) {
console.log("b is greater than a and c");
}
else {
console.log("c is greater than a and b");
}
console.log("\n");
