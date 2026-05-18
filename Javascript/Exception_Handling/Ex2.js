// Program 1: Demonstrate try / catch / finally in JavaScript.
console.log("Program 1 started");

try {
    // The try block contains code that may throw an exception.
    let a = 10;
    let b = 20;
    let c = 20;
    console.log(a + b + c); // This runs normally because no exception is thrown.
} catch (error) {
    // If an exception occurs inside try, execution jumps here.
    // The error object contains message, name, and stack information.
    console.log("Error occurred:", error.message);
} finally {
    // The finally block always executes, regardless of whether an exception occurred.
    console.log("Finally block executed for Program 1.");
}

console.log("Program 1 ended\n");


// Program 2: Use throw to raise a custom exception and validate input.
function validateScore(score) {
    // Validation logic: if the input is not a number, throw an error.
    if (typeof score !== 'number') {
        throw new Error('Invalid input: score must be a number');
    }

    // Validation logic: if the score is out of the expected range, throw an error.
    if (score < 0 || score > 100) {
        throw new Error('Invalid score: score must be between 0 and 100');
    }

    return 'Score is valid';
}

console.log("Program 2 started");

try {
    // Both calls are valid and do not throw.
    console.log(validateScore(90));
    console.log(validateScore(10));
} catch (error) {
    // This block runs only if validateScore throws an exception.
    console.log("Validation error:", error.message);
} finally {
    console.log("Validation completed for Program 2.");
}

console.log("Program 2 ended\n");

// Key points:
// 1. try block contains the risky code that may throw an exception.
// 2. catch block handles the exception and prevents the program from crashing.
// 3. finally block always executes, even if the try block throws an error.
// 4. throw is used to create custom errors when input or business logic is invalid.
