/*
================================================================================
                    JAVASCRIPT ARRAYS - COMPLETE GUIDE
================================================================================

What is an Array?
-----------------
Array is a special variable that can hold multiple values at once.
Instead of declaring separate variables for each value, we can store 
multiple values in a single array variable.

Characteristics of Array:
-------------------------
1. Arrays can store multiple values in a single variable
2. Array elements are indexed based starting from 0
3. Arrays can store different data types (mixed array)
4. Arrays are dynamic - size can change
5. Arrays are objects in JavaScript

================================================================================
*/

//=============================================================================
// ARRAY CREATION METHODS
//=============================================================================

//-----------------------------------------------------------------------------
// Method 1: Array Literal (Most common and recommended way)
//-----------------------------------------------------------------------------
// This is the simplest and most preferred way to create arrays
let fruits = ["Apple", "Banana", "Orange", "Mango"];
//    Index:      0        1         2        3

// length property: Returns the number of elements in the array
console.log(fruits.length);  // Output: 4

//-----------------------------------------------------------------------------
// Method 2: Using Array Constructor
//-----------------------------------------------------------------------------
// Creates array using the 'new Array()' constructor
// Less common, but useful in certain scenarios
let number = new Array(10, 20, 30, 40, 50, 60);
console.log(number);  // Output: [10, 20, 30, 40, 50, 60]

//-----------------------------------------------------------------------------
// Method 3: Empty Array - Add Elements Later
//-----------------------------------------------------------------------------
// Create an empty array first, then add elements using index
let colors = [];  // Empty array
colors[0] = "Red";     // Add element at index 0
colors[1] = "Green";   // Add element at index 1
colors[2] = "Blue";    // Add element at index 2
console.log(colors);   // Output: ["Red", "Green", "Blue"]

//-----------------------------------------------------------------------------
// Method 4: Array with Predefined Size
//-----------------------------------------------------------------------------
// Creates an array with 50 empty slots (not recommended for most cases)
// The array has length 50 but all slots are empty (undefined)
let emptyArray = new Array(50);  // Creates array with 50 empty slots
console.log(emptyArray.length);  // Output: 50

//=============================================================================
// ARRAY INDEXING AND ACCESS
//=============================================================================

/*
Array Index Rules:
------------------
- Index starts from 0 (not 1)
- First element: array[0]
- Last element: array[array.length - 1]
- Negative index: Not supported directly in JavaScript (unlike Python)

Visual Representation:
let fruits = ["Apple", "Banana", "Orange", "Mango"]
Index:           0        1         2        3
*/

//-----------------------------------------------------------------------------
// Accessing Array Elements by Index
//-----------------------------------------------------------------------------
let items = ["Laptop", "Mouse", "keyboard", "Monitor", "headphones"];
//   Index:     0         1         2          3           4

// Access first element (index 0)
console.log(items[0]);  // Output: Laptop

// Access second element (index 1)
console.log(items[1]);  // Output: Mouse

// Access third element (index 2)
console.log(items[2]);  // Output: keyboard

// Access fourth element (index 3)
console.log(items[3]);  // Output: Monitor

// Access fifth element (index 4)
console.log(items[4]);  // Output: headphones

// Access last element using length property
// items.length = 5, so items[5-1] = items[4]
console.log(items[items.length - 1]);  // Output: headphones

// Accessing non-existent index returns undefined
console.log(items[10]);  // Output: undefined (index doesn't exist)

//=============================================================================
// ARRAY PROPERTIES 
//=============================================================================

//-----------------------------------------------------------------------------
// length Property - Returns Number of Elements
//-----------------------------------------------------------------------------
let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
console.log(cities);         // Output: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"]
console.log(cities.length);  // Output: 5 (total number of elements)
console.log(cities[4]);      // Output: Kolkata (element at index 4)

//=============================================================================
// MODIFYING ARRAY ELEMENTS
//=============================================================================

//-----------------------------------------------------------------------------
// Changing Existing Elements
//-----------------------------------------------------------------------------
let marks = [85, 90, 78, 92, 88];
console.log("Original Array :", marks);  // Output: [85, 90, 78, 92, 88]

// Change element at index 2 from 78 to 95
marks[2] = 95;
console.log("Updated Array :", marks);   // Output: [85, 90, 95, 92, 88]

// Change multiple elements
marks[0] = 90;  // Change first element from 85 to 90
marks[1] = 92;  // Change second element from 90 to 92
console.log(marks);  // Output: [90, 92, 95, 92, 88]

//=============================================================================


// ############ ARRAY METHODS - ADDING ELEMENTS #########################


// 1. push() - Adds Element at the End
//-----------------------------------------------------------------------------
// push() method adds one or more elements to the END of an array
// Returns: New length of the array
// Modifies: Original array (mutating method)

let animals = ["Dog", "cat"];
animals.push("Elephant");  // Add "Elephant" at the end
console.log("After push (Elephant) :", animals);  // Output: ["Dog", "cat", "Elephant"]

// We can add multiple elements at once
animals.push("Lion", "Tiger");  // Add both "Lion" and "Tiger"
console.log(animals);  // Output: ["Dog", "cat", "Elephant", "Lion", "Tiger"]



// 2. unshift() - Adds Element at the Beginning
//-----------------------------------------------------------------------------
// unshift() method adds one or more elements to the BEGINNING of an array
// Returns: New length of the array
// Modifies: Original array (mutating method)
// Note: Slower than push() because all existing elements need to be re-indexed

let vegetables = ["Potato", "Tomato"];
vegetables.unshift("Onion");  // Add "Onion" at the beginning
console.log(vegetables);  // Output: ["Onion", "Potato", "Tomato"]

// Add multiple elements at the beginning
vegetables.unshift("Carrot", "Cabbage");  // Add both at the start
console.log(vegetables);  // Output: ["Carrot", "Cabbage", "Onion", "Potato", "Tomato"]




// 3. splice() - Add at Specific Position
//-----------------------------------------------------------------------------
// splice() is the most versatile array method
// Can add, remove, or replace elements at any position
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
//
// Parameters:
// - startIndex: Position to begin changes (0-based index)
// - deleteCount: How many elements to remove (0 = don't remove any)
// - item1, item2, ...: Elements to add at the startIndex
//
// Returns: Array of deleted elements
// Modifies: Original array (mutating method)

let language = ["Java", "Python", "Javascript"];
//      Index:     0        1           2

// At index 2, delete 2 elements, add "c++" and "Ruby"
// This removes "Javascript" and adds "c++" and "Ruby"
language.splice(2, 2, "c++", "Ruby");
console.log(language);  // Output: ["Java", "Python", "c++", "Ruby"]

//-----------------------------------------------------------------------------
// Example 1: Remove Elements Only (No Addition)
//-----------------------------------------------------------------------------
let arr = [10, 20, 30, 40, 50];
//  Index:  0   1   2   3   4

// Start at index 1, delete 2 elements (removes 20 and 30)
arr.splice(1, 2);
console.log(arr);  // Output: [10, 40, 50]

//-----------------------------------------------------------------------------
// Example 2: Add Elements Only (No Deletion)
//-----------------------------------------------------------------------------
let arr1 = [10, 20, 50];
//   Index:  0   1   2

// Start at index 2, delete 0 elements, add 30 and 40
// Inserts 30 and 40 before index 2 (before 50)
arr1.splice(2, 0, 30, 40);
console.log(arr1);  // Output: [10, 20, 30, 40, 50]

//-----------------------------------------------------------------------------
// Example 3: Replace Elements (Delete and Add)
//-----------------------------------------------------------------------------
let arr2 = [10, 20, 30, 40];
//   Index:  0   1   2   3

// Start at index 1, delete 2 elements (20, 30), add 100 and 200
// Replaces 20 and 30 with 100 and 200
arr2.splice(1, 2, 100, 200);
console.log(arr2);  // Output: [10, 100, 200, 40]

//=============================================================================
// ARRAY METHODS - REMOVING ELEMENTS
//=============================================================================

//-----------------------------------------------------------------------------
// 1. pop() - Removes Last Element
//-----------------------------------------------------------------------------
// pop() method removes the LAST element from an array
// Returns: The removed element
// Modifies: Original array (mutating method)
// Fast operation: O(1) time complexity

let browser = ["Chrome", "FireFox", "Safari", "Edge"];
console.log(browser);  // Output: ["Chrome", "FireFox", "Safari", "Edge"]

// Remove and return the last element
// let removed = browser.pop();  // removed = "Edge"
console.log(browser.pop());  // Output: Edge (the removed element)
// Now browser = ["Chrome", "FireFox", "Safari"]

//-----------------------------------------------------------------------------
// 2. shift() - Removes First Element
//-----------------------------------------------------------------------------
// shift() method removes the FIRST element from an array
// Returns: The removed element
// Modifies: Original array (mutating method)
// Slower than pop(): O(n) time complexity (all elements need re-indexing)

let browser1 = ["Chrome", "FireFox", "Safari", "Edge"];
console.log(browser1);  // Output: ["Chrome", "FireFox", "Safari", "Edge"]

// Remove and return the first element
console.log(browser1.shift());  // Output: Chrome (the removed element)

// Array after shift() - first element removed, all others shifted left
console.log(browser1);  // Output: ["FireFox", "Safari", "Edge"]

/*
================================================================================
                        SUMMARY OF ARRAY METHODS
================================================================================

Adding Elements:
----------------
push()      - Add at end (fast)
unshift()   - Add at beginning (slower)
splice()    - Add at any position (flexible)

Removing Elements:
------------------
pop()       - Remove from end (fast)
shift()     - Remove from beginning (slower)
splice()    - Remove from any position (flexible)

Key Points:
-----------
1. push() and pop() are faster (work on end of array)
2. unshift() and shift() are slower (need to re-index all elements)
3. splice() is most versatile (can add, remove, replace at any position)
4. All these methods modify the original array (mutating methods)

Performance Tips:
-----------------
✓ Use push()/pop() when possible (faster)
✗ Avoid frequent unshift()/shift() on large arrays (slower)
✓ Use splice() when you need to modify middle of array

================================================================================
*/

//=============================================================================
// ARRAY METHODS - SEARCHING
//=============================================================================

//-----------------------------------------------------------------------------
// 1. indexOf() - Returns First Index of Element
//-----------------------------------------------------------------------------
// indexOf() searches for an element and returns its FIRST occurrence index
// Returns: Index of element (or -1 if not found)
// Syntax: array.indexOf(searchElement, startIndex)
// Does NOT modify the original array

let num = [10, 20, 30, 40, 30, 50];
//  Index:  0   1   2   3   4   5

console.log("Array :", num);  // Output: [10, 20, 30, 40, 30, 50]
console.log(num.length);  // Output: 6

// Find index of 20
console.log(num.indexOf(20));  // Output: 1 (found at index 1)

// Find index of 30 (appears twice, returns first occurrence)
console.log(num.indexOf(30));  // Output: 2 (first occurrence at index 2)

// Find index of 300 (doesn't exist)
console.log(num.indexOf(300));  // Output: -1 (not found)

//-----------------------------------------------------------------------------
// 2. lastIndexOf() - Returns Last Index of Element
//-----------------------------------------------------------------------------
// lastIndexOf() searches for an element and returns its LAST occurrence index
// Returns: Index of element (or -1 if not found)
// Searches from end to beginning
// Does NOT modify the original array

console.log("last index of :", num.lastIndexOf(30));  // Output: 4 (last occurrence at index 4)
console.log("last index of :", num.lastIndexOf(300));  // Output: -1 (not found)

//-----------------------------------------------------------------------------
// 3. includes() - Check if Element Exists (ES6)
//-----------------------------------------------------------------------------
// includes() checks if an array contains a specific element
// Returns: true if found, false if not found
// Syntax: array.includes(searchElement, startIndex)
// Does NOT modify the original array
// More readable than indexOf() !== -1

console.log(num.includes(30));   // Output: true (30 exists in array)
console.log(num.includes(300));  // Output: false (300 doesn't exist)

//-----------------------------------------------------------------------------
// 4. find() - Returns First Element that Satisfies Condition
//-----------------------------------------------------------------------------
// find() returns the FIRST element that passes a test function
// Returns: The element itself (or undefined if not found)
// Syntax: array.find(callback(element, index, array))
// Does NOT modify the original array
// Useful for finding objects in array

let ages = [15, 16, 17, 25, 30, 35];
//   Index:  0   1   2   3   4   5

// Find first age that is >= 10
// Arrow function: test => test >= 10
// test is each element, checks if >= 10
let adult = ages.find(test => test >= 10);

console.log(ages);   // Output: [15, 16, 17, 25, 30, 35]
console.log(adult);  // Output: 15 (first element >= 10)

//=============================================================================
// ARRAY METHODS - SLICING AND JOINING
//=============================================================================

//-----------------------------------------------------------------------------
// 1. slice() - Extract Portion of Array
//-----------------------------------------------------------------------------
// slice() extracts a section of an array and returns a NEW array
// Syntax: array.slice(startIndex, endIndex)
// - startIndex: Where to begin extraction (included)
// - endIndex: Where to end extraction (excluded)
// Does NOT modify the original array
// Negative index: Counts from end (-1 is last element)

let letters = ["A", "B", "C", "D", "E", "F"];
// Positive Index:  0    1    2    3    4    5
// Negative Index: -6   -5   -4   -3   -2   -1

console.log(letters);  // Output: ["A", "B", "C", "D", "E", "F"]

// Extract from index 2 to end
console.log(letters.slice(2));  // Output: ["C", "D", "E", "F"]

// Extract from index 4 to end
console.log(letters.slice(4));  // Output: ["E", "F"]

// Extract from index 1 to 4 (4 is excluded)
console.log(letters.slice(1, 4));  // Output: ["B", "C", "D"]

// Extract last 3 elements (from -3 to end)
console.log(letters.slice(-3));  // Output: ["D", "E", "F"]

// Extract from beginning (from -6 to end)
console.log(letters.slice(-6));  // Output: ["A", "B", "C", "D", "E", "F"]

// Extract from -6 to -2 (start included, end excluded)
console.log(letters.slice(-6, -2));  // Output: ["A", "B", "C", "D"]

// Another example: Extract from index 1 to 4
console.log(letters.slice(1, 4));  // Output: ["B", "C", "D"]

// Using negative indexes: -5 to -2
console.log(letters.slice(-5, -2));  // Output: ["B", "C", "D"]

//-----------------------------------------------------------------------------
// 2. concat() - Join Two or More Arrays
//-----------------------------------------------------------------------------
// concat() merges two or more arrays into a NEW array
// Syntax: array1.concat(array2, array3, ...)
// Does NOT modify the original arrays
// Returns a new combined array

let arr11 = [1, 2, 3];
let arr22 = [4, 5, 6];
let arr33 = [7, 8, 9];

console.log(arr11);  // Output: [1, 2, 3]
console.log(arr22);  // Output: [4, 5, 6]
console.log(arr33);  // Output: [7, 8, 9]

// Combine all three arrays
let combine = arr11.concat(arr22, arr33);
console.log(combine);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//-----------------------------------------------------------------------------
// 3. join() - Convert Array to String
//-----------------------------------------------------------------------------
// join() converts all array elements into a string
// Syntax: array.join(separator)
// - separator: String to separate elements (default is comma)
// Does NOT modify the original array
// Returns a string

let words = ["Hello", "World", "Javascript"];
console.log(words);  // Output: ["Hello", "World", "Javascript"]

// Join with space separator
console.log(words.join(" "));  // Output: "Hello World Javascript"

// Join with hyphen separator
console.log(words.join("-"));  // Output: "Hello-World-Javascript"

// Join with no separator (empty string)
console.log(words.join(""));  // Output: "HelloWorldJavascript"

//-----------------------------------------------------------------------------
// 4. split() - Convert String to Array (String Method)
//-----------------------------------------------------------------------------
// split() divides a string into an array of substrings
// Syntax: string.split(separator, limit)
// - separator: Character/string to split on
// This is a STRING method, not an array method
// Returns an array

let sentence = "Hello World Javascript";
console.log(sentence.split(" "));  // Output: ["Hello", "World", "Javascript"]
// Splits the string at each space character

//=============================================================================
// ARRAY METHODS - SORTING
//=============================================================================

//-----------------------------------------------------------------------------
// 1. sort() - Sorts Array
//-----------------------------------------------------------------------------
// sort() arranges array elements in ascending order
// Default: Sorts as strings (alphabetically)
// Modifies: Original array (mutating method)
// Returns: The sorted array

// Sorting strings (alphabetically)
let names = ["Rahul", "B", "Mangesh", "Akash", "Priya"];
console.log(names);  // Output: ["Rahul", "B", "Mangesh", "Akash", "Priya"]
names.sort();  // Sort alphabetically
console.log(names);  // Output: ["Akash", "B", "Mangesh", "Priya", "Rahul"]

// Sorting numbers (WRONG way - sorts as strings)
let values = [40, 100, 1, 5, 25, 10];
console.log(values);  // Output: [40, 100, 1, 5, 25, 10]
values.sort();  // Sorts as strings: "1", "10", "100", "25", "40", "5"
console.log(values);  // Output: [1, 10, 100, 25, 40, 5] (WRONG!)

//-----------------------------------------------------------------------------
// Compare Function for Sorting Numbers
//-----------------------------------------------------------------------------
// To sort numbers correctly, use a compare function
// Syntax: array.sort((a, b) => a - b)
// 
// How it works:
// - If (a - b) < 0: a comes before b (ascending)
// - If (a - b) > 0: b comes before a
// - If (a - b) = 0: order unchanged

// Sort in ascending order (smallest to largest)
values.sort((a, b) => a - b);
console.log(values);  // Output: [1, 5, 10, 25, 40, 100] (CORRECT!)

// Sort in descending order (largest to smallest)
values.sort((a, b) => b - a);
console.log(values);  // Output: [100, 40, 25, 10, 5, 1]

//-----------------------------------------------------------------------------
// 2. reverse() - Reverses Array Order
//-----------------------------------------------------------------------------
// reverse() reverses the order of elements in an array
// Modifies: Original array (mutating method)
// Returns: The reversed array

let digits = [1, 2, 3, 4, 5];
console.log(digits);  // Output: [1, 2, 3, 4, 5]
digits.reverse();  // Reverse the order
console.log(digits);  // Output: [5, 4, 3, 2, 1]

//=============================================================================
// ARRAY ITERATION METHODS
//=============================================================================

let scores = [85, 90, 78, 92, 88];

//-----------------------------------------------------------------------------
// 1. forEach() - Execute Function for Each Element
//-----------------------------------------------------------------------------
// forEach() executes a provided function once for each array element
// Syntax: array.forEach(callback(element, index, array))
// Does NOT return anything (returns undefined)
// Does NOT modify the original array
// Cannot use break or continue

// Using function with element and index parameters
scores.forEach(function (score, index) {
    // Template literal: `text ${variable}`
    console.log(`Index ${index} : ${score}`);
});
// Output:
// Index 0 : 85
// Index 1 : 90
// Index 2 : 78
// Index 3 : 92
// Index 4 : 88

//-----------------------------------------------------------------------------
// 2. Traditional for Loop (For Comparison)
//-----------------------------------------------------------------------------
// Classic for loop with counter variable
for (let i = 0; i < scores.length; i++) {
    // String concatenation using +
    console.log("Index " + i + " : " + scores[i]);
}
// Same output as forEach above

//-----------------------------------------------------------------------------
// 3. for...of Loop (ES6)
//-----------------------------------------------------------------------------
// for...of loop iterates over array values directly
// Simpler syntax when you don't need the index
// Cannot access index directly (only values)
for (let score of scores) {
    console.log(score);  // Prints each score
}
// Output: 85, 90, 78, 92, 88

//=============================================================================
// SORTING NUMBERS - DETAILED EXPLANATION
//=============================================================================

let numbers1 = [10, 5, 20, 1];
console.log(numbers1);  // Output: [10, 5, 20, 1]

// Sort without compare function (sorts as strings - WRONG for numbers)
numbers1.sort();
console.log(numbers1);  // Output: [1, 10, 20, 5] (WRONG!)

// Sort with compare function - Ascending order
numbers1.sort(function (a, b) {
    return a - b;  // If a < b, returns negative (a comes first)
});
console.log(numbers1);  // Output: [1, 5, 10, 20] (CORRECT!)

// Sort with compare function - Descending order
numbers1.sort(function (a, b) {
    return b - a;  // If b > a, returns positive (b comes first)
});
console.log(numbers1);  // Output: [20, 10, 5, 1]

/*
Compare Function Logic:
-----------------------
sort((a, b) => a - b)

How it works:
- a and b are two elements being compared
- a - b < 0: a comes before b (ascending order)
- a - b > 0: b comes before a
- a - b = 0: order remains unchanged

Example: Comparing 5 and 10
- a = 5, b = 10
- a - b = 5 - 10 = -5 (negative)
- Since result is negative, 5 comes before 10
- Result: [5, 10] (ascending)

For descending order:
- b - a = 10 - 5 = 5 (positive)
- Since result is positive, 10 comes before 5
- Result: [10, 5] (descending)
*/

//=============================================================================
// MULTIDIMENSIONAL ARRAYS (2D ARRAYS)
//=============================================================================

//-----------------------------------------------------------------------------
// 2D Array - Array of Arrays
//-----------------------------------------------------------------------------
// A 2D array is an array where each element is also an array
// Used to represent matrices, tables, grids
// Access: array[row][column]

let martrix = [
    [1, 2, 3],   // Row 0: Index [0][0], [0][1], [0][2]
    [4, 5, 6],   // Row 1: Index [1][0], [1][1], [1][2]
    [7, 8, 9]    // Row 2: Index [2][0], [2][1], [2][2]
];

console.log(martrix);  // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Access element at row 1, column 1
console.log(martrix[1][1]);  // Output: 5

// Access element at row 2, column 2
console.log(martrix[2][2]);  // Output: 9

//-----------------------------------------------------------------------------
// Practical Example: Student Marks Table
//-----------------------------------------------------------------------------
// Each row represents a student with [name, mark1, mark2, mark3]
let studentMarks = [
    ["Rahul", 85, 90, 78],  // Row 0: Rahul's data
    ["Priya", 92, 77, 86],  // Row 1: Priya's data
    ["Ketan", 78, 84, 82]   // Row 2: Ketan's data
];

console.log(studentMarks);

// Print student marks using forEach
studentMarks.forEach(student => {
    // Template literal with tab spacing
    // student[0] = name, student[1] = mark1, etc.
    console.log(`${student[0]}\t${student[1]}\t${student[2]}\t${student[3]}`);
});
// Output:
// Rahul    85    90    78
// Priya    92    77    86
// Ketan    78    84    82

//-----------------------------------------------------------------------------
// Nested Loop to Print 2D Array
//-----------------------------------------------------------------------------
// Outer loop: Iterates through rows
// Inner loop: Iterates through columns in each row
for (let i = 0; i < studentMarks.length; i++) {  // Loop through rows
    let row = "";  // Empty string to build row data

    for (let j = 0; j < studentMarks[i].length; j++) {  // Loop through columns
        row += studentMarks[i][j] + "  ";  // Add each element with spacing
    }

    console.log(row);  // Print complete row
}
// Output:
// Rahul  85  90  78  
// Priya  92  77  86  
// Ketan  78  84  82  

//=============================================================================
// ARRAY METHOD - toString()
//=============================================================================

//-----------------------------------------------------------------------------
// toString() - Convert Array to String
//-----------------------------------------------------------------------------
// toString() converts an array to a comma-separated string
// Syntax: array.toString()
// Does NOT accept separator parameter (always uses comma)
// Does NOT modify the original array
// Returns a string

let digits1 = [1, 2, 3, 4, 5];

// Convert array to string
// Note: toString() doesn't accept parameters (separator is ignored)
let test = digits1.toString("-");  // "-" parameter is ignored
console.log(test);  // Output: "1,2,3,4,5" (comma-separated, not hyphen)

// Check data type
console.log(typeof test);  // Output: string

// Note: To use custom separator, use join() instead
// digits1.join("-") would give "1-2-3-4-5"

/*
================================================================================
                        COMPLETE SUMMARY
================================================================================

Array Creation:
---------------
let arr = [1, 2, 3];              // Array literal (recommended)
let arr = new Array(1, 2, 3);     // Array constructor
let arr = [];                     // Empty array

Accessing Elements:
-------------------
arr[0]                            // First element
arr[arr.length - 1]               // Last element
arr[10]                           // undefined (if doesn't exist)

Adding Elements:
----------------
arr.push(item)                    // Add at end (fast)
arr.unshift(item)                 // Add at beginning (slow)
arr.splice(index, 0, item)        // Add at specific position

Removing Elements:
------------------
arr.pop()                         // Remove from end (fast)
arr.shift()                       // Remove from beginning (slow)
arr.splice(index, count)          // Remove from specific position

Searching:
----------
arr.indexOf(item)                 // First index of item (-1 if not found)
arr.lastIndexOf(item)             // Last index of item
arr.includes(item)                // true/false if item exists
arr.find(callback)                // First element that passes test

Slicing & Joining:
------------------
arr.slice(start, end)             // Extract portion (doesn't modify)
arr.concat(arr2)                  // Merge arrays
arr.join(separator)               // Convert to string
str.split(separator)              // Convert string to array

Sorting:
--------
arr.sort()                        // Sort alphabetically
arr.sort((a,b) => a-b)            // Sort numbers ascending
arr.sort((a,b) => b-a)            // Sort numbers descending
arr.reverse()                     // Reverse order

Iteration:
----------
arr.forEach(callback)             // Execute function for each
for (let i=0; i<arr.length; i++)  // Traditional for loop
for (let item of arr)             // for...of loop (ES6)

Other Methods:
--------------
arr.toString()                    // Convert to comma-separated string
arr.length                        // Number of elements

Multidimensional:
-----------------
let matrix = [[1,2], [3,4]];      // 2D array
matrix[0][1]                      // Access element (row 0, col 1)

Key Points:
-----------
✓ Arrays are zero-indexed (start at 0)
✓ Arrays are dynamic (size can change)
✓ Arrays can hold mixed data types
✓ Some methods modify original (mutating)
✓ Some methods return new array (non-mutating)
✓ Use compare function for sorting numbers

================================================================================
*/

console.log("\n=== End of Arrays Complete Guide ===");
