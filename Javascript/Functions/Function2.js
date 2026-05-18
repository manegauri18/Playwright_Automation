/*
================================================================================
                    JAVASCRIPT FUNCTIONS
================================================================================
*/

//=============================================================================
//3. FUNCTION WITH RETURN VALUE
//=============================================================================

// Syntax:
// function functionName(parameter){
//     //code to be executed
//     return value;
// }

// Return Types: Functions can return - number, String, boolean, array, object, function

//-----------------------------------------------------------------------------
// Example 1: Square of a Number
//-----------------------------------------------------------------------------
// This function takes a number and returns its square
function square(num) {
    return num * num;  // Multiply number by itself
}

// Store the returned value in a variable
let sq = square(5);  // sq = 25
console.log(sq);

// Display the result with a message
console.log("Square of 5 :", sq);  // Output: Square of 5 : 25

// We can also call the function directly in console.log
console.log("Square of 15 :", square(15));  // Output: Square of 15 : 225

//-----------------------------------------------------------------------------
// Example 2: Addition with Return
//-----------------------------------------------------------------------------
// This function takes two numbers and returns their sum
function addNumbers(a, b) {
    return a + b;  // Add both parameters and return the result
}

// Call the function and store the result
let sum = addNumbers(10, 15);  // sum = 25
console.log(sum);  // Output: 25

//-----------------------------------------------------------------------------
// Example 3: Username Validation
//-----------------------------------------------------------------------------
// This function checks if username length is at least 5 characters
// Returns: true if valid, false if invalid
function isvalidUsername(username) {
    return username.length >= 5;  // Returns boolean (true/false)
}

// Test with valid username (length = 5)
console.log("Is 'admin' valid ?", isvalidUsername('admin'));  // Output: true

// Test with invalid username (length = 3)
console.log("Is 'adm' valid ?", isvalidUsername('adm'));  // Output: false

//-----------------------------------------------------------------------------
// Example 4: Using Function Return Value in Conditions
//-----------------------------------------------------------------------------

// Condition 1: Valid username
if (isvalidUsername("testUser")) {  // "testUser" has 8 characters, returns true
    console.log("Valid username");  // This will execute
}

// Condition 2: Invalid username with else block
if (isvalidUsername("test")) {  // "test" has 4 characters, returns false
    console.log("Valid username");  // This will NOT execute
}
else {
    console.log("Invalid username");  // This will execute
}

//-----------------------------------------------------------------------------
// Example 5: Get Full Name
//-----------------------------------------------------------------------------
// This function combines first name and last name
// Parameters: firstName, LastName
// Returns: Full name as a string
function getFullName(firstName, LastName) {
    return firstName + " " + LastName;  // Concatenate with space
}

// Case 1: Missing second parameter
let fullName = getFullName("John");  // LastName is undefined
console.log(fullName);  // Output: John undefined

// Case 2: Both parameters provided
let fullName1 = getFullName("John", "Doe");
console.log(fullName1);  // Output: John Doe

//-----------------------------------------------------------------------------
// Example 6: Find Maximum of Two Numbers
//-----------------------------------------------------------------------------
// This function compares two numbers and returns the larger one
// Uses ternary operator: condition ? valueIfTrue : valueIfFalse
function getMax(a, b) {
    return a > b ? a : b;  // If a > b, return a, else return b
}

let max = getMax(200, 30);  // 200 > 30, so returns 200
console.log("Max Number :", max);  // Output: Max Number : 200

//-----------------------------------------------------------------------------
// Example 7: Calculate Factorial with Return
//-----------------------------------------------------------------------------
// Factorial: n! = n × (n-1) × (n-2) × ... × 1
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
function getFactorial(num) {
    let fact = 1;  // Initialize factorial to 1

    // Loop from 1 to num
    for (let i = 1; i <= num; i++) {
        fact *= i;  // fact = fact * i (multiply and assign)
    }

    return fact;  // Return the calculated factorial
}

console.log(getFactorial(5));  // Output: 120 (5! = 5×4×3×2×1)
console.log(getFactorial(6));  // Output: 720 (6! = 6×5×4×3×2×1)

//=============================================================================
// RETURNING MULTIPLE VALUES
//=============================================================================

// Important: In JavaScript, a function cannot return multiple values directly
// Solution: Wrap multiple values inside an array or object and return that

//-----------------------------------------------------------------------------
// Example 8: Return Multiple Values Using Array
//-----------------------------------------------------------------------------
// This function returns two numbers as an array
function getNumber() {
    return [10, 20];  // Return array with two elements
}

let data = getNumber();  // data = [10, 20]
console.log(data[0]);  // Output: 10 (first element)
console.log(data[1]);  // Output: 20 (second element)

//-----------------------------------------------------------------------------
// Example 9: Return Min and Max from Array
//-----------------------------------------------------------------------------
// This function finds both minimum and maximum values in an array
// Returns: [min, max] as an array
function getMinMax(arr) {
    let min = arr[0];  // Assume first element is minimum
    let max = arr[0];  // Assume first element is maximum

    // Loop through each number in the array
    for (let num of arr) {
        if (num < min) min = num;  // Update min if smaller number found
        if (num > max) max = num;  // Update max if larger number found
    }

    return [min, max];  // Return array with min and max
}

// Array destructuring: Extract values directly into variables
let [minunum, maximun] = getMinMax([45, 34, 23, 66, 88, 1, 100]);
console.log("Min :", minunum, "Max :", maximun);  // Output: Min : 1 Max : 100

//-----------------------------------------------------------------------------
// Example 10: Return Object
//-----------------------------------------------------------------------------
// This function creates and returns a user object
// Parameters: name, age, city
// Returns: Object with user details
function createUser(name, age, city) {
    return {
        name: name,      // User's name
        age: age,        // User's age
        city: city,      // User's city
        isActive: true   // Default active status
    };
}

// Alternative ES6 shorthand (when property name = parameter name):
// function createUser(name, age, city) {
//     return { name, age, city, isActive: true };
// }

let user = createUser("Amit", 30, "Pune");
console.log("User :", user);
// Output: User : { name: 'Amit', age: 30, city: 'Pune', isActive: true }

//=============================================================================
// 4. FUNCTION EXPRESSION
//=============================================================================

// Function Expression: Assigning a function to a variable
// Can be anonymous (function without a name)
// Syntax:
// const variableName = function(parameter) {
//     //code to be executed
// };

//-----------------------------------------------------------------------------
// Example 11: Function Expression for Multiplication
//-----------------------------------------------------------------------------
// This is an anonymous function assigned to a variable
let multiply = function (a, b) {
    return a * b;  // Multiply two numbers
}

console.log(multiply(10, 5));  // Output: 50

// Note: Function expressions are NOT hoisted (cannot be called before declaration)

//=============================================================================
// 5. ARROW FUNCTION (ES6)
//=============================================================================

// Arrow Function Features:
// - Shorter syntax
// - Introduced in ES6 (ECMAScript 2015)
// - Does not have its own 'this' keyword
// - Cannot be used as constructors

// Syntax:
// const functionName = (parameter) => {
//     //code to be executed
// }

//-----------------------------------------------------------------------------
// Example 12: Basic Arrow Function
//-----------------------------------------------------------------------------
const add1 = (a, b) => {
    return a + b;  // Add two numbers
};

console.log(add1(10, 20));  // Output: 30

//-----------------------------------------------------------------------------
// Example 13: Arrow Function with Multiple Parameters
//-----------------------------------------------------------------------------
const add2 = (a, b, c, d) => {
    return a + b + c + d;  // Add four numbers
};

console.log(add2(10, 20, 30, 40));  // Output: 100

//-----------------------------------------------------------------------------
// Example 14: Arrow Function with Implicit Return
//-----------------------------------------------------------------------------
// When function has single expression, we can omit curly braces and return keyword
const isLongString = str => str.length > 10;  // Returns true if length > 10

console.log("Is 'Hello' long => ", isLongString("hello Javascript"));
// Output: Is 'Hello' long =>  true (length = 16)

//-----------------------------------------------------------------------------
// Example 15: Arrow Function with Array Methods
//-----------------------------------------------------------------------------
const number = [1, 2, 3, 4, 5, 6];

// filter() method: Creates new array with elements that pass the test
// Arrow function checks if number is even (divisible by 2)
const even = number.filter(num => num % 2 == 0);
console.log(even);  // Output: [2, 4, 6]

// Explanation:
// num % 2 == 0 checks if remainder is 0 when divided by 2
// If true, number is even and included in result

//=============================================================================
// 6. ANONYMOUS FUNCTIONS
//=============================================================================

// Anonymous Function: Function without a name
// Characteristics:
// - Cannot be reused
// - Often used as callback functions
// - Used in event handlers, timers, etc.

//-----------------------------------------------------------------------------
// Example 16: Anonymous Function with setTimeout
//-----------------------------------------------------------------------------
// setTimeout: Built-in JavaScript function to execute code after a delay
// Syntax: setTimeout(function, delayInMilliseconds)

setTimeout(function () {
    console.log("This runs after 3 seconds");
}, 3000);  // 3000 milliseconds = 3 seconds

// How it works:
// 1. setTimeout takes two parameters: function and delay
// 2. The anonymous function will execute after 3 seconds
// 3. This is asynchronous - code continues running without waiting

//=============================================================================
// 7. ASYNC FUNCTION (ES8/ES2017)
//=============================================================================

// Async Function Features:
// - Returns a Promise automatically
// - Allows use of 'await' keyword inside
// - Makes asynchronous code look synchronous
// - Better error handling with try-catch

//-----------------------------------------------------------------------------
// Example 17: Basic Async Function
//-----------------------------------------------------------------------------
// async keyword before function makes it return a Promise
async function greet() {
    return "Hello Javascript";  // Automatically wrapped in Promise
}

// .then() method handles the resolved Promise value
greet().then(result => console.log(result));
// Output: Hello Javascript

// Explanation:
// 1. async function always returns a Promise
// 2. Even though we return a string, it's wrapped in Promise.resolve()
// 3. We use .then() to access the resolved value
// 4. Arrow function (result => console.log(result)) prints the result

/*
================================================================================
                        SUMMARY OF FUNCTION TYPES
================================================================================

1. Function Declaration (Regular Function):
   function name() { }
   - Hoisted (can be called before declaration)
   - Has its own 'this'

2. Function Expression:
   const name = function() { }
   - Not hoisted
   - Can be anonymous

3. Arrow Function (ES6):
   const name = () => { }
   - Shorter syntax
   - No own 'this'
   - Implicit return for single expressions

4. Anonymous Function:
   function() { }
   - No name
   - Used as callbacks

5. Async Function (ES8):
   async function name() { }
   - Returns Promise
   - Can use await

================================================================================
                        KEY CONCEPTS
================================================================================

Return Values:
- Functions can return any data type
- Use 'return' keyword to send value back
- Without return, function returns 'undefined'
- Can return arrays/objects for multiple values

Parameters vs Arguments:
- Parameters: Variables in function definition
- Arguments: Actual values passed when calling

Function Hoisting:
- Function declarations are hoisted
- Function expressions are NOT hoisted

Best Practices:
- Use descriptive function names
- Keep functions small and focused
- Use arrow functions for short operations
- Use async/await for asynchronous operations
- Always return consistent data types

================================================================================
*/

console.log("\n=== End of Functions Guide ===");
