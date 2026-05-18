// ========================================
// TYPES OF VARIABLES IN JAVASCRIPT
// ========================================
// Three ways to declare variables in JavaScript:
// 1. var   - Legacy, avoid using
// 2. let   - Modern, block-scoped (RECOMMENDED)
// 3. const - Modern, constant values (RECOMMENDED)

// ========================================
// 1. VAR - FUNCTION SCOPED VARIABLE
// ========================================
// Characteristics:
// - Function scoped (not block scoped)
// - Can be redeclared in the same scope
// - Can be reassigned
// - Not recommended in modern JavaScript

// Comparison with Java syntax:
// Java:       int a = 100;
// JavaScript: var a = 100;

console.log("\n===== VAR EXAMPLES =====");

var a = 100;
console.log("var a = 100:", a); // Output: 100
console.log("var a again:", a); // Output: 100

// Redeclaration is allowed with var (not a good practice)
var a = 200;
console.log("var a redeclared = 200:", a); // Output: 200

var a = 300;
console.log("var a redeclared again = 300:", a); // Output: 300

// Reassignment is allowed with var
a = 400;
console.log("var a reassigned = 400:", a); // Output: 400

// Example with string values
var name1 = "Rohit";
console.log("var name1 = 'Rohit':", name1); // Output: Rohit

var name1 = "Virat";
console.log("var name1 redeclared = 'Virat':", name1); // Output: Virat

name1 = "Rahul";
console.log("var name1 reassigned = 'Rahul':", name1); // Output: Rahul

// ========================================
// 2. LET - BLOCK SCOPED VARIABLE
// ========================================
// Characteristics:
// - Block scoped (within {})
// - Cannot be redeclared in the same scope
// - Can be reassigned
// - Recommended in modern JavaScript
// - No hoisting issues (Temporal Dead Zone)

console.log("\n===== LET EXAMPLES =====");

let b = 20;
console.log("let b = 20:", b); // Output: 20

b = 30; // Reassignment allowed
console.log("let b reassigned = 30:", b); // Output: 30

let b1 = 40;
console.log("let b1 = 40:", b1); // Output: 40

let name = "Python";
console.log("let name = 'Python':", name); // Output: Python


// ========================================
// 3. CONST - CONSTANT VALUE (BLOCK SCOPED)
// ========================================
// Characteristics:
// - Block scoped
// - Cannot be redeclared
// - Cannot be reassigned (value stays constant)
// - Must be initialized at declaration time
// - Used for fixed/constant values
// - Objects/arrays can have properties modified but reference cannot change

console.log("\n===== CONST EXAMPLES =====");

const c = 50;
console.log("const c = 50:", c); // Output: 50

// Trying to reassign const will cause an error
// c = 70; // ERROR: Assignment to constant variable

// const with strings (commonly used)
const PI = 3.14159;
console.log("const PI = 3.14159:", PI); // Output: 3.14159

const city = "New York";
console.log("const city = 'New York':", city); // Output: New York


// person = {}; // ERROR: Assignment to constant variable (cannot change reference)

// ========================================
// COMPARISON: VAR vs LET vs CONST
// ========================================
console.log("\n===== COMPARISON TABLE =====");
console.log("Property           | VAR    | LET    | CONST");
console.log("---------------------------------------------------");
console.log("Scope              | Function Scope | Block Scope | Block Scope");
console.log("Redeclaration      | Allowed        | Not Allowed | Not Allowed");
console.log("Reassignment       | Allowed        | Allowed     | Not Allowed");
console.log("Initialization req | No             | No          | Yes (required)");
console.log("Modern use         | Avoid          | Recommended | Recommended");

// ========================================
// BEST PRACTICES
// ========================================
// 1. Use CONST by default for all declarations
// 2. Use LET if you know the variable will be reassigned
// 3. AVOID VAR entirely in modern JavaScript
// 4. Use meaningful variable names
// 5. Declare variables close to where they are used