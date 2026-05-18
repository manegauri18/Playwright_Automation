// JavaScript exception handling examples
// - try: contains code that may throw an exception
// - catch: handles the exception if one occurs
// - finally: runs regardless of whether an exception happened
// - throw: creates a custom exception

// Example 1: try / finally without catch
// This is allowed in JavaScript. catch is optional only if finally is present.
try {
    console.log("Example 1: Inside try");
    // No error is thrown here, so catch is not needed.
} finally {
    console.log("Example 1: Finally always executes");
}

console.log("Example 1 completed\n");

// Example 2: Single catch with multiple conditions.
// JavaScript does not support multiple catch blocks directly.
// Instead, use one catch block and inspect the error type.
try {
    let num = -10;
    if (isNaN(num)) {
        throw new TypeError("Value is not a number");
    }
    if (num < 0) {
        throw new RangeError("Negative number is not allowed");
    }
    console.log("Number is valid:", num);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError caught:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("ReferenceError caught:", error.message);
    } else if (error instanceof RangeError) {
        console.log("RangeError caught:", error.message);
    } else {
        console.log("General error caught:", error.message);
    }
} finally {
    console.log("Example 2: Finally executed\n");
}

// Example 3: try / catch / finally for runtime error.
try {
    console.log("Example 3: Inside try");
    let x = y; // ReferenceError because y is not defined
} catch (error) {
    console.log("Example 3: Error caught:", error.name, error.message);
} finally {
    console.log("Example 3: Finally executed\n");
}

// Example 4: TypeError and RangeError demonstration in a single catch.
try {
    let text = 10;
    // This will throw a TypeError because toUpperCase is not a function on numbers.
    console.log(text.toUpperCase());
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Example 4: TypeError caught:", error.message);
    } else {
        console.log("Example 4: Error caught:", error.message);
    }
}

try {
    let arr = new Array(-5); // RangeError: invalid array length
    console.log(arr);
} catch (error) {
    if (error instanceof RangeError) {
        console.log("Example 4: RangeError caught:", error.message);
    } else {
        console.log("Example 4: Error caught:", error.message);
    }
}

// Important notes:
// 1. SyntaxError occurs when code has invalid syntax and is usually detected before runtime.
// 2. ReferenceError occurs when a variable is not defined.
// 3. TypeError occurs when an operation is performed on the wrong data type.
// 4. RangeError occurs when a value is outside the allowed range.
// 5. throw is used in JavaScript to raise custom errors manually.
// 6. Java-style throws declarations are not used in JavaScript.

// Nested try/catch is allowed in JavaScript.
try {
    try {
        console.log("Nested try: inside inner try");
        throw new Error("Inner error");
    } catch (innerError) {
        console.log("Nested try: inner catch caught:", innerError.message);
        throw new Error("New error from inner catch");
    }
} catch (outerError) {
    console.log("Nested try: outer catch caught:", outerError.message);
}