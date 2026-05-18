// Exception handling is a mechanism used to handle runtime errors without stopping
// the entire program execution.
//
// What is an Exception?
// An exception is an unexpected event that occurs during program execution and
// disrupts the normal flow of the program.
//
// JavaScript exception handling keywords:
//   try    - run code that may throw an exception
//   catch  - handle the exception when it occurs
//   finally- run cleanup code whether or not an exception occurred
//   throw  - create and raise a custom exception

// Example 1: A simple try/catch to prevent the program from crashing.
console.log("Program 1 started");

try {
    // This line will throw a ReferenceError because result1 is not defined.
    console.log(result1);
    // Any code after the exception inside this try block is skipped.
    console.log("This line is not reached if an exception is thrown.");
} catch (error) {
    // The catch block receives the exception object as `error`.
    // You can inspect the error message, name, and stack trace.
    console.log("An exception occurred:", error.message);
    console.log("Error type:", error.name);
} finally {
    // The finally block always runs, whether an exception occurred or not.
    console.log("Finally block executed for Program 1.");
}

console.log("Program 1 completed\n");

// Example 2: Handling a runtime error inside a second try/catch.
console.log("Program 2 started");

try {
    // This will throw a ReferenceError because Result2 is not defined.
    console.log(Result2);
} catch (error) {
    console.log("An exception occurred in Program 2:", error.message);
} finally {
    console.log("Finally block executed for Program 2.");
}

console.log("Program 2 ended\n");

// Example 3: Successful try block with no exception.
// This demonstrates that catch is skipped when no error occurs.
console.log("Program 3 started");

try {
    console.log("No error here, so catch is skipped.");
} catch (error) {
    console.log("This will not run because no exception was thrown.");
} finally {
    console.log("Finally block executed for Program 3.");
}

console.log("Program 3 ended\n");

// Example 4: Using throw to raise a custom exception manually.
function divide(a, b) {
    if (b === 0) {
        // Create a new Error object and throw it explicitly.
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log("Program 4 started");

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("Custom exception caught:", error.message);
} finally {
    console.log("Finally block executed for Program 4.");
}

console.log("Program 4 ended");

