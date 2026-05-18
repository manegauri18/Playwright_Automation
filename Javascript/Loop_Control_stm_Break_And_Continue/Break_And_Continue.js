// LOOP CONTROL STATEMENTS
// =======================================================

/*
1. BREAK Statement:
   - Exits the loop immediately
   - Stops all remaining iterations
   - Control moves to the statement after the loop

2. CONTINUE Statement:
   - Skips the current iteration
   - Moves to the next iteration
   - Loop continues to run
*/


// =======================================================
// Example 1: BREAK Statement - Exit Loop at Specific Condition
// =======================================================

console.log("--- BREAK Example 1 ---");

for (let i = 6; i <= 10; i++) {
    // Loop runs: i = 6, 7, 8, 9, 10
    // Checking if i == 15 (this will never be true in this loop)

    if (i == 15) {  // Condition is always false
        console.log("Breaking at i ==", i);
        break;  // This line never executes
    }
    console.log(i);  // Prints: 6, 7, 8, 9, 10
}

console.log("Loop Completed");
console.log("====================================");


// =======================================================
// Example 2: CONTINUE Statement - Skip Specific Iteration
// =======================================================

console.log("--- CONTINUE Example ---");

for (let i = 1; i <= 10; i++) {
    // Loop runs: i = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    if (i === 5) {  // When i is 5
        console.log("Skipping i ==", i);
        continue;  // Skip printing 5, move to next iteration
    }
    console.log(i);  // Prints: 1, 2, 3, 4, 6, 7, 8, 9, 10 (5 is skipped)
}

console.log("====================================");


// =======================================================
// Example 3: BREAK with Array - Stop When Element Found
// =======================================================

console.log("--- BREAK with Array ---");

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    // Iteration 1: arr[0] = 10 → 10 == 30? false → print 10
    // Iteration 2: arr[1] = 20 → 20 == 30? false → print 20
    // Iteration 3: arr[2] = 30 → 30 == 30? true → break (stop loop)

    if (arr[i] == 30) {
        break;  // Exit loop when 30 is found
    }
    console.log(arr[i]);  // Prints: 10, 20
}

console.log("Loop Stopped");
console.log("====================================");


// =======================================================
// Example 4: CONTINUE - Skip Even Numbers (Print Only Odd)
// =======================================================

console.log("--- Skip Even Numbers using CONTINUE ---");

for (let i = 1; i <= 10; i++) {
    // Check if number is even
    if (i % 2 == 0) {  // i % 2 == 0 means even number
        continue;  // Skip even numbers
    }
    console.log(i);  // Prints only odd: 1, 3, 5, 7, 9
}

console.log("====================================");


