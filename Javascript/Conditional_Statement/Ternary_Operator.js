// TERNARY OPERATOR
// ==================================================
// Syntax
// condition ? value_if_true : value_if_false
let age = 20;
// Check if person can vote
let message = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log(message);
// Example 2
age = 10;
message = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log(message);
// ==================================================
// NESTED TERNARY OPERATOR
// ==================================================
let score = 85;
// Assign grade based on score
let result =
(score >= 90) ? "A" :

(score >= 80) ? "B" :
(score >= 70) ? "C" :
"F";
console.log("Grade :", result);
// Example 2
score = 75;
result =
(score >= 90) ? "A" :
(score >= 80) ? "B" :
(score >= 70) ? "C" :
"F";
console.log("Grade :", result);
// Example 3
score = 55;
result =
(score >= 90) ? "A" :
(score >= 80) ? "B" :
(score >= 70) ? "C" :
"F";
console.log("Grade :", result);