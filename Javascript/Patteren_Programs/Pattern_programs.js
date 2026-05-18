// =======================================================
// NESTED LOOP PATTERNS - DETAILED GUIDE
// =======================================================


// =======================================================
// What is a Nested Loop?
// =======================================================

/*
Nested Loop:
- A loop inside another loop
- Outer loop controls rows
- Inner loop controls columns/elements per row

Structure:
for (let i = start; i <= end; i++) {      // Outer loop (rows)
    for (let j = start; j <= end; j++) {  // Inner loop (columns)
        // code
    }
}

Use Cases:
- Printing patterns
- 2D arrays/matrices
- Multiplication tables
- Complex data structures
*/


// =======================================================
// Pattern 1: Square Pattern (5x5)
// =======================================================

/*
Output:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

Logic:
- Outer loop: Runs 5 times (5 rows)
- Inner loop: Runs 5 times for each row (5 columns)
- Each row has same number of stars
*/

console.log("--- Pattern 1: Square Pattern ---");

let n1 = 5;

for (let i = 0; i < n1; i++) {
    // Outer loop: Controls rows
    // i = 0, 1, 2, 3, 4 (5 iterations)

    let row = "";  // Empty string to build row

    for (let j = 0; j < n1; j++) {
        // Inner loop: Controls columns
        // j = 0, 1, 2, 3, 4 (5 iterations for each row)

        row += "* ";  // row = row + "* "
    }

    console.log(row);  // Print complete row
}

console.log("\n");


// =======================================================
// Pattern 2: Star Triangle (Increasing)
// =======================================================

/*
Output:
*
* *
* * *
* * * *
* * * * *

Logic:
- Row 1: i=1, prints 1 star
- Row 2: i=2, prints 2 stars
- Row 3: i=3, prints 3 stars
- Row 4: i=4, prints 4 stars
- Row 5: i=5, prints 5 stars
*/

console.log("--- Pattern 2: Star Triangle ---");

let n3 = 5;

for (let i = 1; i <= n3; i++) {
    // Outer loop: i = 1, 2, 3, 4, 5

    let row = "";

    for (let j = 0; j < i; j++) {
        // Inner loop runs 'i' times
        // When i=1: j runs 1 time (0)
        // When i=2: j runs 2 times (0, 1)
        // When i=3: j runs 3 times (0, 1, 2)

        row += "* ";
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 3: Number 1 Triangle
// =======================================================

/*
Output:
1
1 1
1 1 1
1 1 1 1
1 1 1 1 1

Logic:
- Same as star triangle
- But prints "1" instead of "*"
*/

console.log("--- Pattern 3: Number 1 Triangle ---");

let n4 = 5;

for (let i = 1; i <= n4; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += "1 ";  // Print constant number 1
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 4: Alphabet A Triangle
// =======================================================

/*
Output:
A
A A
A A A
A A A A
A A A A A

Logic:
- Same structure as previous patterns
- Prints letter "A" instead of numbers
*/

console.log("--- Pattern 4: Alphabet A Triangle ---");

let n5 = 5;

for (let i = 1; i <= n5; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += "A ";  // Print constant letter A
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 5: Word Pattern (Javascript)
// =======================================================

/*
Output:
Javascript
Javascript Javascript
Javascript Javascript Javascript
Javascript Javascript Javascript Javascript
Javascript Javascript Javascript Javascript Javascript

Logic:
- Prints word "Javascript" multiple times
- Number of words increases with each row
*/

console.log("--- Pattern 5: Word Pattern ---");

let n6 = 5;

for (let i = 1; i <= n6; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += "Javascript ";  // Print word
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 6: Row Number Pattern
// =======================================================

/*
Output:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

Logic:
- Each row prints its row number (i)
- Row 1: prints 1 one time
- Row 2: prints 2 two times
- Row 3: prints 3 three times
*/

console.log("--- Pattern 6: Row Number Pattern ---");

let n7 = 5;

for (let i = 1; i <= n7; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += i + " ";  // Print row number (i)
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 7: Column Index from 0
// =======================================================

/*
Output:
0
0 1
0 1 2
0 1 2 3
0 1 2 3 4

Logic:
- Prints column index starting from 0
- Inner loop variable (j) starts from 0
*/

console.log("--- Pattern 7: Column Index from 0 ---");

let n8 = 5;

for (let i = 1; i <= n8; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += j + " ";  // Print column index (j starts from 0)
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 8: Column Index from 1
// =======================================================

/*
Output:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Logic:
- Prints column index starting from 1
- Inner loop variable (j) starts from 1
*/

console.log("--- Pattern 8: Column Index from 1 ---");

let n9 = 5;

for (let i = 1; i <= n9; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";  // Print column index (j starts from 1)
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 9: Continuous Increment from 2
// =======================================================

/*
Output:
2
3 4
5 6 7
8 9 10 11
12 13 14 15 16

Logic:
- Numbers continue across rows
- Start from 2 and keep incrementing
- Variable x13 maintains state across rows
*/

console.log("--- Pattern 9: Continuous Increment from 2 ---");

let n13 = 5;
let x13 = 2;  // Starting number

for (let i = 1; i <= n13; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += x13 + " ";
        x13++;  // Increment after each print (continuous)
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 10: Continuous Increment from 1
// =======================================================

/*
Output:
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

Logic:
- Similar to previous pattern
- Starts from 1 instead of 2
*/

console.log("--- Pattern 10: Continuous Increment from 1 ---");

let n14 = 5;
let x14 = 1;  // Starting number

for (let i = 1; i <= n14; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += x14 + " ";
        x14++;  // Increment continuously
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 11: Even Numbers Pattern (Reset Each Row)
// =======================================================

/*
Output:
10
10 12
10 12 14
10 12 14 16
10 12 14 16 18

Logic:
- Each row starts from 10
- Increments by 2 (even numbers)
- x15 is reset to 10 for each row
*/

console.log("--- Pattern 11: Even Numbers Pattern ---");

let n15 = 5;

for (let i = 1; i <= n15; i++) {
    let row = "";
    let x15 = 10;  // Reset to 10 for each row

    for (let j = 1; j <= i; j++) {
        row += x15 + " ";
        x15 += 2;  // Increment by 2 (even numbers)
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 12: Alphabet A Triangle (Repeated)
// =======================================================

/*
Output:
A
A A
A A A
A A A A
A A A A A

Logic:
- Same as Pattern 4
- Prints letter "A" in triangle pattern
*/

console.log("--- Pattern 12: Alphabet A Triangle ---");

let n17 = 5;

for (let i = 1; i <= n17; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "A ";
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 13: Continuous Alphabet Matrix (5x5)
// =======================================================

/*
Output:
A B C D E
F G H I J
K L M N O
P Q R S T
U V W X Y

Logic:
- Prints alphabets continuously
- 5 columns per row
- ASCII code 65 = 'A'
- String.fromCharCode() converts ASCII to character
*/

console.log("--- Pattern 13: Continuous Alphabet Matrix ---");

let n22 = 5;
let x22 = 65;  // ASCII code for 'A'

for (let i = 1; i <= n22; i++) {
    let row = "";

    for (let j = 1; j <= n22; j++) {
        row += String.fromCharCode(x22) + " ";  // Convert ASCII to character
        x22++;  // Move to next alphabet
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 14: Continuous Alphabet Triangle
// =======================================================

/*
Output:
A
B C
D E F
G H I J
K L M N O

Logic:
- Alphabets continue across rows
- Triangle shape (increasing columns)
- ASCII code increments continuously
*/

console.log("--- Pattern 14: Continuous Alphabet Triangle ---");

let n23 = 5;
let x23 = 65;  // ASCII code for 'A'

for (let i = 1; i <= n23; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(x23) + " ";
        x23++;  // Move to next alphabet continuously
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 15: Same Alphabet Per Row
// =======================================================

/*
Output:
A
B B
C C C
D D D D
E E E E E

Logic:
- Each row prints same alphabet
- Alphabet changes after each row
- x24 increments after inner loop completes
*/

console.log("--- Pattern 15: Same Alphabet Per Row ---");

let n24 = 5;
let x24 = 65;  // ASCII code for 'A'

for (let i = 1; i <= n24; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(x24) + " ";
        // Same alphabet for entire row
    }

    x24++;  // Move to next alphabet after row completes
    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 16: Inverted Star Triangle
// =======================================================

/*
Output:
* * * * *
* * * *
* * *
* *
*

Logic:
- Starts with maximum stars (5)
- Decreases by 1 each row
- Outer loop runs in reverse (i from 5 to 1)
*/

console.log("--- Pattern 16: Inverted Star Triangle ---");

let n29 = 5;

for (let i = n29; i >= 1; i--) {
    // Outer loop: i = 5, 4, 3, 2, 1 (decreasing)

    let row = "";

    for (let j = 1; j <= i; j++) {
        // Inner loop runs 'i' times
        // When i=5: j runs 5 times
        // When i=4: j runs 4 times
        // When i=3: j runs 3 times

        row += "* ";
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 17: Inverted Number Triangle
// =======================================================

/*
Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

Logic:
- Each row starts from 1
- Number of elements decreases
- Prints column index (j)
*/

console.log("--- Pattern 17: Inverted Number Triangle ---");

let n30 = 5;

for (let i = n30; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";  // Print column index
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 18: Right-Aligned Star Triangle (Manual)
// =======================================================

/*
Output:
       *
     * *
   * * *
 * * * *
* * * * *

Logic:
- Stars are right-aligned
- Uses space before stars
- Manual approach with string concatenation
*/

console.log("--- Pattern 18: Right-Aligned Star Triangle (Manual) ---");

let n32 = 5;

for (let i = 1; i <= n32; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += " *";  // Space before each star
    }

    console.log(row);
}

console.log("\n");


// =======================================================
// Pattern 19: Right-Aligned Star Triangle (Using repeat())
// =======================================================

/*
Output:
     *
    * *
   * * *
  * * * *
 * * * * *

Logic:
- Uses String.repeat() method
- " ".repeat(n-i) creates leading spaces
- " *".repeat(i) creates stars with spaces

String Methods:
- repeat(n): Repeats string n times
- Example: "* ".repeat(3) → "* * * "
*/

console.log("--- Pattern 19: Right-Aligned Star Triangle (repeat) ---");

let n33 = 5;

for (let i = 1; i <= n33; i++) {
    // " ".repeat(n33 - i): Creates leading spaces for alignment
    // When i=1: 4 spaces + 1 star
    // When i=2: 3 spaces + 2 stars
    // When i=3: 2 spaces + 3 stars
    // When i=4: 1 space + 4 stars
    // When i=5: 0 spaces + 5 stars

    console.log(" ".repeat(n33 - i) + " *".repeat(i));
}

console.log("\n");


// =======================================================
// KEY CONCEPTS SUMMARY
// =======================================================

console.log("===== KEY CONCEPTS =====\n");

console.log("1. Nested Loop Structure:");
console.log("   - Outer loop: Controls rows");
console.log("   - Inner loop: Controls columns/elements per row");

console.log("\n2. Pattern Types:");
console.log("   - Square: Same elements in all rows");
console.log("   - Triangle: Increasing/Decreasing elements");
console.log("   - Inverted: Reverse order");
console.log("   - Right-Aligned: Spaces before elements");

console.log("\n3. Variable Scope:");
console.log("   - Variables inside inner loop reset each iteration");
console.log("   - Variables outside loops maintain state");

console.log("\n4. ASCII Codes:");
console.log("   - 65 = 'A', 90 = 'Z'");
console.log("   - 97 = 'a', 122 = 'z'");
console.log("   - String.fromCharCode(65) → 'A'");

console.log("\n5. String Methods:");
console.log("   - repeat(n): Repeats string n times");
console.log("   - Example: '* '.repeat(3) → '* * * '");

console.log("\n6. Loop Direction:");
console.log("   - Increasing: i from 1 to n");
console.log("   - Decreasing: i from n to 1");

console.log("\n===== ALL PATTERNS COMPLETED =====");
