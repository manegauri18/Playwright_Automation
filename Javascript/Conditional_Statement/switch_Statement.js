// SWITCH STATEMENT
// ==================================================
console.log("Switch Statement Example");
// Variable storing day number
let day = 3;
// Switch checks the value of "day"
switch (day) {
case 1: // if day === 1
console.log("Monday");
break;
case 2: // if day === 2
console.log("Tuesday");
break;
case 3: // if day === 3
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
case 6:
console.log("Saturday");
break;
case 7:
console.log("Sunday");
break;
// If no case matches
default:
console.log("Invalid Day");
break;
}
// --------------------------------------------------
// Example 2 : Invalid Day
// --------------------------------------------------

day = 16; // assigning new value
switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
case 6:
console.log("Saturday");
break;
case 7:
console.log("Sunday");
break;
default:
console.log("Invalid Day");
break;
}
// ==================================================
// SWITCH STATEMENT : Grade System Example
// ==================================================
let grade = "B";
switch (grade) {
case "A":
console.log("Excellent");
break;
case "B":

console.log("Very Good");
break;
case "C":
console.log("Fair");
break;
case "D":
console.log("Need Improvement");
break;
case "F":
console.log("Failed");
break;
default:
console.log("Invalid Grade");
break;
}