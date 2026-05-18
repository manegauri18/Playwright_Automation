// =======================================================
// JavaScript Data Types Example
// =======================================================

// In JavaScript we do not declare the data type explicitly.
// JavaScript automatically assigns the data type based on the value.

// Example
let name = "john";   // String data type
console.log("Name =", name);
console.log("Type of name =", typeof name);

const Test = "Python";   // String data type
console.log("Test =", Test);
console.log("Type of Test =", typeof Test);


// -------------------------------------------------------
// Example in Java (Static Typed Language)
// -------------------------------------------------------

// String str = "Test";
// int num = 10;


// =======================================================
// JavaScript Data Types
// =======================================================

/*

JavaScript Data Types are divided into two categories.

1. Primitive Data Types
------------------------
1. String      -> Text data
2. Number      -> Numeric values (integers and decimals)
3. Boolean     -> true or false
4. Undefined   -> Variable declared but value not assigned
5. Null        -> Intentional empty value
6. Symbol      -> Unique identifier (advanced)

2. Non-Primitive Data Types
---------------------------
1. Object      -> Collection of key-value pairs
2. Array       -> Collection of values
3. Function    -> Reusable block of code
4. Map / Set   -> Advanced collection types

*/


// =======================================================
// 1. STRING DATA TYPE
// =======================================================

// String is used to represent text data.
// Strings can be declared using:
// 1. Double quotes ""
// 2. Single quotes ''
// 3. Backticks ``

let firstName = "Rahul"; // double quotes
let lastName = 'Patil';  // single quotes
let city = `Pune`;       // backticks

console.log(typeof firstName, firstName);
console.log(typeof lastName, lastName);
console.log(typeof city, city);


// -------------------------------------------------------
// String Concatenation
// -------------------------------------------------------

let full_Name = "Rohit" + " " + lastName;
console.log(full_Name);


// -------------------------------------------------------
// Template Literals (Backticks)
// Used to insert dynamic values inside strings
// -------------------------------------------------------

let fullName = `${firstName} ${lastName}`;

let message = `Hello ${firstName}! You are from ${city}.`;

console.log(message);
console.log(fullName);


// =======================================================
// 2. NUMBER DATA TYPE
// =======================================================

// JavaScript has only ONE number type.
// It supports both integers and floating point numbers.

let age = 10;      // integer
let price = 10.14; // decimal

console.log(typeof age, age);
console.log(typeof price, price);


// Arithmetic example
let sum = 10 + 5;
console.log(typeof sum, sum);


// =======================================================
// 3. BOOLEAN DATA TYPE
// =======================================================

// Boolean represents logical values:
// true or false

let isOnline = true;
console.log(typeof isOnline, isOnline);

let isOnline1 = false;
console.log(typeof isOnline1, isOnline1);


// Boolean using comparison

let isGreater = 10 > 5;   // true
let isTest = 10 > 15;     // false

console.log(isGreater);
console.log(isTest);


// =======================================================
// 4. UNDEFINED DATA TYPE
// =======================================================

// When a variable is declared but no value is assigned,
// JavaScript automatically assigns the value "undefined".

let a;  // declared but not assigned
let b;
let c;

console.log(a);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// =======================================================
// 5. NULL DATA TYPE
// =======================================================

// Null represents intentional absence of a value.
// It means the variable is empty on purpose.

let x = null;
let y = null;
let z = null;

// Interesting JavaScript behavior:
// typeof null returns "object" (this is a bug in JavaScript)

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);