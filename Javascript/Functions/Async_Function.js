/*
================================================================================
            ASYNC/AWAIT AND SYNCHRONOUS VS ASYNCHRONOUS JAVASCRIPT
================================================================================

Key Concepts:
-------------
1. Async: Makes a function asynchronous and it always returns a Promise
2. Await: Used to wait for a Promise to complete (pauses execution)
3. Await can ONLY be used inside async functions
4. JavaScript is synchronous by default but can handle async operations

================================================================================
*/

//=============================================================================
// COMMENTED OUT EXAMPLES - Basic Async Function
//=============================================================================

// // Example 1: Simple async function
// async function fetchdData() {
//     console.log("Hello student");
//     // This function returns a Promise that resolves to undefined
//     // because we're not explicitly returning anything
// }
// 
// // Call the async function and handle the Promise with .then()
// fetchdData().then(result => console.log(result));
// // Output: 
// // Hello student
// // undefined (because no return value)

//-----------------------------------------------------------------------------
// COMMENTED OUT EXAMPLES - Async with Await
//-----------------------------------------------------------------------------

// // Example 2: Async function with await
// 
// // This function returns a Promise that resolves after 1 second
// function delay() {
//     return new Promise(resolve => {
//         // setTimeout executes the callback after 1000ms (1 second)
//         setTimeout(() => resolve("Data Loaded"), 1000);
//     });
// }
// 
// // Async function that waits for the delay to complete
// async function getData() {
//     console.log("Start");           // Prints immediately
//     let result = await delay();     // WAITS for 1 second until Promise resolves
//     console.log(result);            // Prints "Data Loaded" after 1 second
//     console.log("END");             // Prints after result
// }
// 
// getData();
// 
// // Output (with timing):
// // Start                    (immediately)
// // Data Loaded              (after 1 second)
// // END                      (after 1 second)

/*
================================================================================
                    WITHOUT AWAIT vs WITH AWAIT
================================================================================

Without await:
- You ask for data and move ahead immediately
- Code continues executing without waiting
- You get a Promise object, not the actual data

With await:
- You wait until data comes (Promise resolves)
- Code pauses at that line until Promise completes
- You get the actual resolved value, not the Promise

Example:
--------
// Without await:
let result = delay();        // result = Promise (pending)
console.log(result);         // Promise { <pending> }

// With await:
let result = await delay();  // Waits for Promise to resolve
console.log(result);         // "Data Loaded" (actual value)

================================================================================
*/

//=============================================================================
// 1. SYNCHRONOUS (SYNC) EXECUTION
//=============================================================================

/*
Synchronous Execution:
- Tasks are executed one by one (line by line)
- Next task waits until previous task is finished
- Blocking behavior - each line must complete before next line runs
- This is the DEFAULT behavior in JavaScript
*/

console.log("=== SYNCHRONOUS EXAMPLE ===");
console.log("Start");    // Executes first
console.log("Task 1");   // Executes second (waits for previous line)
console.log("Task 2");   // Executes third (waits for previous line)
console.log("End");      // Executes last (waits for previous line)

// Output (immediate, in order):
// Start
// Task 1
// Task 2
// End

// All lines execute immediately, one after another
// Total execution time: Few milliseconds

//=============================================================================
// 2. ASYNCHRONOUS (ASYNC) EXECUTION
//=============================================================================

/*
Asynchronous Execution:
- Tasks can run in background without blocking
- JavaScript does NOT wait for async operations to complete
- Non-blocking behavior - code continues while waiting
- Used for: Network requests, file operations, timers, database queries
*/

console.log("\n=== ASYNCHRONOUS EXAMPLE ===");

//-----------------------------------------------------------------------------
// Helper Function: Creates a delay using Promise
//-----------------------------------------------------------------------------
// This function simulates an async operation (like fetching data from server)
function delay() {
    // Promise: Represents a value that will be available in the future
    return new Promise(resolve => {
        // setTimeout: Executes callback after specified delay
        setTimeout(() => {
            console.log("Task 1");  // This runs after 2 seconds
            resolve();              // Mark Promise as completed
        }, 2000);  // 2000 milliseconds = 2 seconds
    });
}

//-----------------------------------------------------------------------------
// Async Function: Demonstrates await behavior
//-----------------------------------------------------------------------------
async function name() {
    console.log("Start");     // Prints immediately

    await delay();            // WAITS here for 2 seconds
    // Code pauses until Promise resolves
    // "Task 1" prints after 2 seconds

    console.log("End");       // Prints after delay completes
}

// Call the async function
name();

// Output (with timing):
// Start                    (immediately)
// Task 1                   (after 2 seconds)
// End                      (after 2 seconds)

// Total execution time: ~2 seconds

/*
================================================================================
                    EXECUTION FLOW EXPLANATION
================================================================================

Step-by-Step Breakdown:
-----------------------

1. name() function is called
2. console.log("Start") executes immediately → prints "Start"
3. await delay() is encountered:
   - delay() function is called
   - Returns a Promise
   - setTimeout schedules callback for 2 seconds later
   - await PAUSES the function execution here
4. After 2 seconds:
   - setTimeout callback executes
   - console.log("Task 1") prints → prints "Task 1"
   - resolve() is called, completing the Promise
5. Function resumes after await:
   - console.log("End") executes → prints "End"

================================================================================
                    KEY DIFFERENCES: SYNC vs ASYNC
================================================================================

Synchronous:
✓ Executes line by line
✓ Blocking (waits for each operation)
✓ Predictable order
✓ Simple to understand
✗ Can freeze UI if operation takes time
✗ Inefficient for time-consuming tasks

Asynchronous:
✓ Non-blocking (doesn't wait)
✓ Efficient for time-consuming operations
✓ Better user experience (UI stays responsive)
✓ Can handle multiple operations simultaneously
✗ More complex to understand
✗ Order of execution can be unpredictable without await

================================================================================
                    REAL-WORLD EXAMPLES
================================================================================

Synchronous Operations:
- Mathematical calculations: let sum = 10 + 20;
- Variable assignments: let name = "John";
- Console logging: console.log("Hello");
- Array operations: arr.push(5);

Asynchronous Operations:
- Fetching data from API: fetch('https://api.example.com/data')
- Reading files: fs.readFile('file.txt')
- Database queries: db.query('SELECT * FROM users')
- Timers: setTimeout(), setInterval()
- User interactions: button clicks, form submissions

================================================================================
                    ASYNC/AWAIT ADVANTAGES
================================================================================

Before Async/Await (Using Promises with .then()):
--------------------------------------------------
function getData() {
    delay()
        .then(result => {
            console.log(result);
            return anotherDelay();
        })
        .then(result2 => {
            console.log(result2);
        })
        .catch(error => {
            console.error(error);
        });
}
// Problem: "Callback hell" or "Promise chaining" - hard to read

After Async/Await:
------------------
async function getData() {
    try {
        let result = await delay();
        console.log(result);
        let result2 = await anotherDelay();
        console.log(result2);
    } catch (error) {
        console.error(error);
    }
}
// Solution: Looks like synchronous code - easy to read and maintain

================================================================================
                    IMPORTANT NOTES
================================================================================

1. JavaScript is Synchronous by Default:
   - Code executes line by line
   - But we can handle async operations using:
     * setTimeout / setInterval
     * Promises
     * async / await
     * Callbacks

2. Async Function Always Returns a Promise:
   - Even if you return a regular value
   - The value is automatically wrapped in Promise.resolve()

3. Await Can Only Be Used Inside Async Functions:
   - await delay();        ✗ Error (not in async function)
   - async function() {
       await delay();      ✓ Correct
     }

4. Error Handling:
   - Use try-catch blocks with async/await
   - Use .catch() with Promises

5. Multiple Awaits:
   - Each await pauses execution
   - Operations run sequentially (one after another)
   - For parallel execution, use Promise.all()

================================================================================
                    COMMON ASYNC OPERATIONS IN JAVASCRIPT
================================================================================

1. setTimeout / setInterval:
   setTimeout(() => console.log("Hello"), 1000);

2. Fetch API (Network Requests):
   let response = await fetch('https://api.example.com/data');
   let data = await response.json();

3. File Operations (Node.js):
   let content = await fs.promises.readFile('file.txt', 'utf8');

4. Database Queries:
   let users = await db.collection('users').find();

5. Event Listeners:
   button.addEventListener('click', async () => {
       await processClick();
   });

================================================================================
*/

console.log("\n=== End of Async/Await Guide ===");

/*
SUMMARY:
--------
✓ JavaScript is synchronous by default
✓ Async operations run in background without blocking
✓ async keyword makes function return a Promise
✓ await keyword pauses execution until Promise resolves
✓ await can only be used inside async functions
✓ Use async/await for cleaner, more readable asynchronous code
✓ Common async operations: setTimeout, fetch, file I/O, database queries
*/
