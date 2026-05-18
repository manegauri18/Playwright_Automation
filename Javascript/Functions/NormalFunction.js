/*
Characteristics:
- Declared using 'function' keyword
- Can be called before declaration (hoisting)
- No parameters, no return value
- Executes same code every time
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



