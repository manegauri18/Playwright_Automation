// =======================================================
// JAVASCRIPT FUNCTIONS - DETAILED GUIDE
// =======================================================


// =======================================================
// What is a Function?
// =======================================================

/*
A function is a reusable block of code that performs a specific task.

// =======================================================
// Advantages/Benefits of Functions
// =======================================================

/*
1. Code Reusability:
   - Write once, use multiple times
   - Reduces code duplication
   - Saves development time

2. Maintainability:
   - Easy to update and debug
   - Changes in one place affect all uses
   - Organized code structure

3. Modularity:
   - Break complex problems into smaller parts
   - Each function handles one specific task
   - Easier to understand and test

4. Readability:
   - Makes code more organized
   - Self-documenting with good function names
   - Easier for team collaboration
*/


// =======================================================
// Types of Functions in JavaScript
// =======================================================

/*
1. Normal Function (Function Declaration)
2. Function with Parameters
3. Function with Return Value
4. Function Expression
5. Arrow Function
6. Anonymous Function
7. IIFE (Immediately Invoked Function Expression)
8. Callback Function
9. Async Function
*/


// =======================================================
// 1️⃣ NORMAL FUNCTION (Function Declaration)
// =======================================================

/*
Syntax:
function functionName() {
    // code to be executed
}

Characteristics:
- Declared using 'function' keyword
- Can be called before declaration (hoisting)
- No parameters, no return value
- Executes same code every time
*/

console.log("--- Normal Function Examples ---\n");


// =======================================================
// Example 1: Simple Greeting Function
// =======================================================

function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}

// Calling the function
greet();  // First call
greet();  // Second call - Can be called multiple times

console.log("==========================");


// =======================================================
// Example 2: Multi-Step Function (Automation Scenario)
// =======================================================

/*
Real-world use case:
- Opening a web application
- Multiple steps in sequence
- Reusable for testing
*/

function openApp() {
    console.log("Step 1: Opening browser");
    console.log("Step 2: Navigate to URL");
    console.log("Step 3: Application Loaded");
}

// Execute the function
openApp();  // First execution
openApp();  // Second execution

console.log("==========================");


// =======================================================
// Example 3: Check Even or Odd Number
// =======================================================

/*
Logic:
- If number % 2 == 0 → Even
- If number % 2 != 0 → Odd

Limitation:
- Number is hardcoded (num = 11)
- Cannot check different numbers without modifying function
- Solution: Use parameters (covered in next section)
*/

function checkEvenOdd() {
    let num = 11;  // Hardcoded value

    if (num % 2 == 0) {  // 11 % 2 = 1 (not 0, so false)
        console.log(num + " is Even number");
    } else {
        console.log(num + " is Odd number");  // This executes
    }
}

checkEvenOdd();  // Output: 11 is Odd number

console.log("==========================");


// =======================================================
// Example 4: Calculate Factorial
// =======================================================

/*
Factorial (n!):
- Product of all positive integers up to n
- Formula: n! = n × (n-1) × (n-2) × ... × 2 × 1

Example:
5! = 5 × 4 × 3 × 2 × 1 = 120

Calculation Steps:
Iteration 1: fact = 1 × 1 = 1
Iteration 2: fact = 1 × 2 = 2
Iteration 3: fact = 2 × 3 = 6
Iteration 4: fact = 6 × 4 = 24
Iteration 5: fact = 24 × 5 = 120
*/

function factorial() {
    let num = 5;   // Number to calculate factorial
    let fact = 1;  // Initialize factorial to 1

    for (let i = 1; i <= num; i++) {
        fact = fact * i;  // Multiply fact by current number
    }

    console.log("Factorial of " + num + " is:", fact);
}

factorial();  // Output: Factorial of 5 is: 120

console.log("================================");


// =======================================================
// 2️⃣ FUNCTION WITH PARAMETERS
// =======================================================

/*
Syntax:
function functionName(parameter1, parameter2, ...paramN) {
    // code to be executed
}

Parameters vs Arguments:
- Parameters: Variables in function definition (placeholder)
- Arguments: Actual values passed when calling function

Benefits:
- Makes functions flexible
- Same function works with different data
- No need to modify function code
- Reduces code duplication

Example:
function add(a, b) {  // a, b are parameters
    console.log(a + b);
}
add(10, 20);  // 10, 20 are arguments
*/

console.log("--- Function with Parameters ---\n");


// =======================================================
// Example 1: Addition Function
// =======================================================

/*
Parameters: a, b
- Receives two numbers
- Prints their sum
- Can be called with different values
*/

function add(a, b) {
    console.log(a + " + " + b + " =", a + b);
}

// Calling with different arguments
add(10, 20);    // Output: 10 + 20 = 30
add(10, 5);     // Output: 10 + 5 = 15
add(100, 200);  // Output: 100 + 200 = 300

console.log("==========================");


// =======================================================
// Example 2: Greet User by Name
// =======================================================

/*
Parameter: name
- Personalizes greeting message
- Same function, different names
- More user-friendly
*/

function greetUser(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript functions.");
}

// Calling with different names
greetUser("Amit");     // Output: Hello, Amit! Welcome...
greetUser("Mangesh");  // Output: Hello, Mangesh! Welcome...

console.log("==========================");


// =======================================================
// Example 3: Check Even or Odd with Parameter
// =======================================================

/*
Parameter: num
- Now we can check any number
- More flexible than hardcoded version
- Reusable for different values

Note: If no argument is passed, num will be 'undefined'
*/

function checkEvenOdd2(num) {
    // If no argument passed, num is undefined
    if (num === undefined) {
        console.log("Please provide a number");
        return;
    }

    if (num % 2 == 0) {
        console.log(num + " is Even number");
    } else {
        console.log(num + " is Odd number");
    }
}

checkEvenOdd2();    // Output: Please provide a number
checkEvenOdd2(99);  // Output: 99 is Odd number
checkEvenOdd2(100); // Output: 100 is Even number

console.log("==========================");


// =======================================================
// Example 4: Calculate Area of Rectangle
// =======================================================

/*
Parameters: length, width
- Two parameters for rectangle dimensions
- Calculates area = length × width
- Can calculate area for any rectangle
*/

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area of rectangle:", area);
}

// Calling with different dimensions
calculateArea(10, 5);   // Output: Area of rectangle: 50
calculateArea(20, 15);  // Output: Area of rectangle: 300
calculateArea(7, 8);    // Output: Area of rectangle: 56

console.log("==========================");


// =======================================================
// Example 5: Reverse a Number
// =======================================================

/*
Parameter: num
- Reverses the digits of a number
- Example: 135 → 531

Algorithm:
1. Extract last digit using num % 10
2. Build reversed number: rev = rev * 10 + digit
3. Remove last digit using Math.floor(num / 10)
4. Repeat until num becomes 0

Step-by-step for 135:
Step 1: digit = 5, rev = 0 * 10 + 5 = 5, num = 13
Step 2: digit = 3, rev = 5 * 10 + 3 = 53, num = 1
Step 3: digit = 1, rev = 53 * 10 + 1 = 531, num = 0
Result: 531
*/

function reverseNumber(num) {
    let rev = 0;           // Initialize reversed number
    let original = num;    // Store original for display

    while (num > 0) {
        // Extract last digit
        let digit = num % 10;

        // Build reversed number
        rev = rev * 10 + digit;

        // Remove last digit
        num = Math.floor(num / 10);
    }

    console.log("Original:", original, "→ Reversed:", rev);
}

// Calling with different numbers
reverseNumber(135);   // Output: Original: 135 → Reversed: 531
reverseNumber(456);   // Output: Original: 456 → Reversed: 654
reverseNumber(12321); // Output: Original: 12321 → Reversed: 12321 (Palindrome)

console.log("==========================");


// =======================================================
// Example 6: Default Parameters (ES6)
// =======================================================

/*
Default Parameters:
- Provide default value if argument not passed
- Syntax: parameter = defaultValue
- Introduced in ES6 (2015)

Use Cases:
- Optional parameters
- Fallback values
- Safer function calls
*/

function greetWithDefault(name = "Guest") {
    // If name is not provided, "Guest" is used
    console.log("Welcome, " + name);
}

// Calling with and without argument
greetWithDefault("Rahul");  // Output: Welcome, Rahul
greetWithDefault();         // Output: Welcome, Guest (uses default)

console.log("==========================");


// =======================================================
// Example 7: Multiple Parameters
// =======================================================

/*
Multiple Parameters:
- Function can accept multiple values
- Order matters when passing arguments
- Each parameter has specific purpose

Best Practice:
- Use descriptive parameter names
- Keep number of parameters reasonable (max 3-4)
- Consider using object for many parameters
*/

function displayInfo(name, age, city, profession) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
    console.log("Profession:", profession);
}

// Calling with all parameters
displayInfo("Akshay", 30, "Pune", "Developer");

// Output:
// Name: Akshay
// Age: 30
// City: Pune
// Profession: Developer

console.log("==========================");


// =======================================================
// IMPORTANT NOTES
// =======================================================

console.log("\n===== IMPORTANT NOTES =====\n");

console.log("1. Function Naming:");
console.log("   - Use descriptive names (greetUser, calculateArea)");
console.log("   - Use camelCase convention");
console.log("   - Start with verb (get, set, calculate, check)");

console.log("\n2. Parameters:");
console.log("   - Parameters are local to function");
console.log("   - Can have default values");
console.log("   - Order matters when calling");

console.log("\n3. Function Calls:");
console.log("   - Must use parentheses () to call");
console.log("   - Without (), it refers to function object");
console.log("   - Can be called multiple times");

console.log("\n4. Scope:");
console.log("   - Variables inside function are local");
console.log("   - Cannot access outside function");
console.log("   - Parameters are also local variables");

console.log("\n5. Best Practices:");
console.log("   - Keep functions small and focused");
console.log("   - One function = One task");
console.log("   - Use meaningful names");
console.log("   - Add comments for complex logic");
console.log("   - Test functions independently");

console.log("\n===== FUNCTION EXAMPLES COMPLETED =====");


// =======================================================
// QUICK REFERENCE
// =======================================================

/*
Function Declaration:
function functionName(param1, param2) {
    // code
}

Function Call:
functionName(arg1, arg2);

Default Parameters:
function functionName(param = defaultValue) {
    // code
}

Multiple Parameters:
function functionName(param1, param2, param3, param4) {
    // code
}

Key Points:
- Functions make code reusable
- Parameters make functions flexible
- Default parameters provide fallback values
- Use descriptive names for clarity
- Keep functions focused on one task
*/
