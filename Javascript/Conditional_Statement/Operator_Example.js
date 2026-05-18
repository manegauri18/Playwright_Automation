// Logical AND operator examples
// ======================================================
// console.log(true && true) // TRUE && TRUE → TRUE
// console.log(true && false) // TRUE && FALSE → FALSE
// console.log(false && true) // FALSE && TRUE → FALSE
// console.log(false && false) // FALSE && FALSE → FALSE
// console.log("10 < 20 && 5 > 2", 10 < 20 && 5 > 2) // TRUE && TRUE→ TRUE
// console.log("10 < 20 && 5 < 2", 10 < 20 && 5 < 2) // TRUE && FALSE→ FALSE
// ======================================================
// Largest of three numbers
// ======================================================
a = 100
b = 20;
let c = 30;
if (a > b && a > c) { // TRUE && TRUE → TRUE
console.log("a is greater than b and c")
}
a = 100;
b = 200;
c = 400;
if (c > a && c > b) { // TRUE && TRUE → TRUE
console.log("c is greater than a and b")
}
console.log("\n")
a = 100;
b = 20;
c = 40;
if (a > b && a > c) { // TRUE && TRUE
console.log("a is greater than b and c")
}
else if (b > a && b > c) {
console.log("b is greater than a and c")
}
else {
console.log("c is greater than a and b")
}
console.log("\n")

a = 100;
b = 200;
c = 40;
if (a > b && a > c) { // FALSE && TRUE → FALSE
console.log("a is greater than b and c")
}
else if (b > a && b > c) { // TRUE && TRUE → TRUE
console.log("b is greater than a and c")
}
else {
console.log("c is greater than a and b")
}
console.log("\n")
a = 100;
b = 200;
c = 400;
if (a > b && a > c) { // FALSE
console.log("a is greater than b and c")
}
else if (b > a && b > c) { // FALSE
console.log("b is greater than a and c")
}
else { // executes
console.log("c is greater than a and b")
}
console.log("\n")
// ======================================================


