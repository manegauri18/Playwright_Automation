/*
================================================================================
                    JAVASCRIPT STRINGS - COMPLETE GUIDE
================================================================================

What is a String?
-----------------
A string is a sequence of characters used to represent text.
Strings are one of the most commonly used data types in JavaScript.

Real-World Examples:
--------------------
- Names: "John", "Priya", "Amit"
- Messages: "Hello World", "Welcome"
- Emails: "user@example.com"
- Addresses: "123 Main Street, Pune"

Key Characteristics:
--------------------
1. Strings are immutable (cannot be changed, only replaced)
2. Strings are indexed (each character has a position starting from 0)
3. Strings can be created using single quotes, double quotes, or backticks
4. Strings are primitive data types
5. JavaScript provides many built-in methods to work with strings

================================================================================
*/

//=============================================================================
// STRING CREATION METHODS
//=============================================================================

console.log("=== STRING CREATION METHODS ===\n");

//-----------------------------------------------------------------------------
// Method 1: Single Quotes
//-----------------------------------------------------------------------------
// Most common way to create strings
// Use single quotes when string contains double quotes
let name1 = 'John';
console.log("Single quotes :", name1);  // Output: John

//-----------------------------------------------------------------------------
// Method 2: Double Quotes
//-----------------------------------------------------------------------------
// Equally common as single quotes
// Use double quotes when string contains single quotes (apostrophe)
let name2 = "Priya";
console.log("Double quotes : ", name2);  // Output: Priya

//-----------------------------------------------------------------------------
// Method 3: Backticks / Template Literals (ES6)
//-----------------------------------------------------------------------------
// Modern way to create strings
// Allows string interpolation and multi-line strings
let name3 = `Amit`;
console.log("Backticks :", name3);  // Output: Amit

//-----------------------------------------------------------------------------
// Method 4: String Constructor (Not Recommended)
//-----------------------------------------------------------------------------
// Creates a String object instead of primitive string
// Avoid using this method in practice
let name4 = new String("Rahul");
console.log("String constructor : ", name4);  // Output: [String: 'Rahul']
console.log("Type:", typeof name4);  // Output: object (not string)

//=============================================================================
// STRING INDEXING
//=============================================================================

console.log("\n=== STRING INDEXING ===\n");

/*
String Index Rules:
-------------------
- Index starts from 0 (not 1)
- First character: string[0]
- Last character: string[string.length - 1]
- Negative index: Not supported directly in JavaScript

Visual Representation:
String: "Hello"
Index:   01234
Char:    H e l l o
*/

let text = "Hello";
//   Index:  0 1 2 3 4

console.log(text);  // Output: Hello
console.log(text.length);  // Output: 5 (number of characters)

//-----------------------------------------------------------------------------
// Accessing Individual Characters
//-----------------------------------------------------------------------------
// Use square brackets with index number to access characters

console.log("First char :", text[0]);  // Output: H (index 0)
console.log("Second char :", text[1]);  // Output: e (index 1)

// Access last character using length property
// text.length = 5, so last index = 5 - 1 = 4
console.log("Last char :", text[text.length - 1]);  // Output: o

// Accessing non-existent index returns undefined
console.log("Index 10 :", text[10]);  // Output: undefined (index doesn't exist)

//=============================================================================
// STRING PROPERTIES
//=============================================================================

console.log("\n=== STRING PROPERTIES ===\n");

//-----------------------------------------------------------------------------
// length Property - Returns Number of Characters
//-----------------------------------------------------------------------------
// The length property tells you how many characters are in the string
// Spaces and special characters are counted

let message = "Javascript";
console.log("String :", message);  // Output: Javascript
console.log("Length :", message.length);  // Output: 10 characters

// Empty string has length 0
let empty = "";
console.log("Empty string length :", empty.length);  // Output: 0

// String with only spaces - spaces are counted as characters
let empty1 = "   ";
console.log("Spaces string length :", empty1.length);  // Output: 3 (three spaces)

//=============================================================================
// STRING CONCATENATION (Joining Strings)
//=============================================================================

console.log("\n=== STRING CONCATENATION ===\n");

//-----------------------------------------------------------------------------
// Method 1: Using + Operator
//-----------------------------------------------------------------------------
// The + operator joins (concatenates) two or more strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // Join with space in between
console.log(fullName);  // Output: John Doe

//-----------------------------------------------------------------------------
// Method 2: Using concat() Method
//-----------------------------------------------------------------------------
// concat() method joins strings together
// Syntax: string1.concat(string2, string3, ...)
let str1 = "Hello";
let str2 = "World";
let combine = str1.concat(" ", str2);  // Add space between strings
console.log(combine);  // Output: Hello World

//-----------------------------------------------------------------------------
// Method 3: Template Literals (ES6) - Recommended
//-----------------------------------------------------------------------------
// Template literals use backticks and ${} for variable interpolation
// This is the modern and preferred way to combine strings with variables
let name = "Amit";
let age = 25;

// ${name} and ${age} are replaced with actual values
let intro = `My name is ${name} and I am ${age} years old`;
console.log(intro);  // Output: My name is Amit and I am 25 years old

//=============================================================================
// CASE CONVERSION METHODS
//=============================================================================

console.log("\n=== CASE CONVERSION METHODS ===\n");

let text1 = "JavaScript Programming";

//-----------------------------------------------------------------------------
// toUpperCase() - Convert All Characters to Uppercase
//-----------------------------------------------------------------------------
// Returns a new string with all characters in uppercase
// Does NOT modify the original string (strings are immutable)
console.log("Original :", text1);  // Output: JavaScript Programming
let upper = text1.toUpperCase();
console.log("Uppercase :", upper);  // Output: JAVASCRIPT PROGRAMMING

//-----------------------------------------------------------------------------
// toLowerCase() - Convert All Characters to Lowercase
//-----------------------------------------------------------------------------
// Returns a new string with all characters in lowercase
// Useful for case-insensitive comparisons
let lower = text1.toLowerCase();
console.log("Lowercase :", lower);  // Output: javascript programming

//=============================================================================
// STRING SEARCHING METHODS
//=============================================================================

console.log("\n=== STRING SEARCHING METHODS ===\n");

let sentence = "Javascript is simple languagez";
//      Index:  0123456789...

//-----------------------------------------------------------------------------
// indexOf() - Returns Index of First Occurrence
//-----------------------------------------------------------------------------
// Searches for a substring and returns its first position
// Returns -1 if substring is not found
// Syntax: string.indexOf(searchValue, startPosition)

// Find "is" in the sentence
let index = sentence.indexOf("is");
console.log("Index of 'is' :", index);  // Output: 11 (first occurrence)

// Find first occurrence of "a"
let index1 = sentence.indexOf("a");
console.log(index1);  // Output: 1 (first 'a' is at index 1)

// Find "z" - returns last index where it's found
let index11 = sentence.indexOf("z");
console.log(index11);  // Output: 28 (position of 'z')

//-----------------------------------------------------------------------------
// lastIndexOf() - Returns Index of Last Occurrence
//-----------------------------------------------------------------------------
// Searches from end to beginning
// Returns the last position where substring is found
// Returns -1 if not found
let lastIndex = sentence.lastIndexOf("z");
console.log("Last index of 'z' :", lastIndex);  // Output: 28

//-----------------------------------------------------------------------------
// includes() - Check if Substring Exists (ES6)
//-----------------------------------------------------------------------------
// Returns true if substring is found, false otherwise
// More readable than indexOf() !== -1
// Case-sensitive

let hasSimple = sentence.includes("simple");
console.log(hasSimple);  // Output: true (sentence contains "simple")

let hasSimple1 = sentence.includes("simple1");
console.log(hasSimple1);  // Output: false (sentence doesn't contain "simple1")

//-----------------------------------------------------------------------------
// startsWith() - Check if String Starts with Substring (ES6)
//-----------------------------------------------------------------------------
// Returns true if string starts with specified substring
// Case-sensitive
let startsWithJava = sentence.startsWith("Java");
console.log(startsWithJava);  // Output: true (starts with "Java")

let startsWithPython = sentence.startsWith("Python");
console.log(startsWithPython);  // Output: false (doesn't start with "Python")

//-----------------------------------------------------------------------------
// endsWith() - Check if String Ends with Substring (ES6)
//-----------------------------------------------------------------------------
// Returns true if string ends with specified substring
// Case-sensitive
let endsWithz = sentence.endsWith("z");
console.log(endsWithz);  // Output: true (ends with "z")

let endsWithg = sentence.endsWith("g");
console.log(endsWithg);  // Output: false (doesn't end with "g")

//-----------------------------------------------------------------------------
// search() - Search Using Regular Expression
//-----------------------------------------------------------------------------
// Similar to indexOf() but supports regular expressions
// Returns index of first match, or -1 if not found
let searchIndex = sentence.search(/simple/);
console.log("Search index of 'simple' :", searchIndex);  // Output: 14

let searchIndexis = sentence.search(/is/);
console.log("Search index of 'is' :", searchIndexis);  // Output: 11

//=============================================================================
// STRING EXTRACTING METHODS
//=============================================================================

console.log("\n=== STRING EXTRACTING METHODS ===\n");

//-----------------------------------------------------------------------------
// slice() - Extract Part of String
//-----------------------------------------------------------------------------
// Extracts a section of string and returns it as new string
// Syntax: string.slice(startIndex, endIndex)
// - startIndex: Where to begin extraction (included)
// - endIndex: Where to end extraction (excluded)
// - Supports negative indexes (count from end)
// - Does NOT modify original string

let text2 = "Javascript Programming";
// Positive Index:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21
// Character:       J  a  v  a  s  c  r  i  p  t  P  r  o  g  r  a  m  m  i  n  g
// Negative Index: -22-21-20-19-18-17-16-15-14-13-12-11-10 -9 -8 -7 -6 -5 -4 -3 -2 -1

console.log("Original :", text2);  // Output: Javascript Programming

// Extract from index 0 to 10 (10 is excluded)
console.log("Slice(0, 10) :", text2.slice(0, 10));  // Output: Javascript

// Extract from index 0 to end
console.log("Slice(0) :", text2.slice(0));  // Output: Javascript Programming

// Extract from index 11 to end
console.log("Slice(11) :", text2.slice(11));  // Output: Programming

// No parameters - returns entire string
console.log("Slice() :", text2.slice());  // Output: Javascript Programming

// Negative index - count from end
// -11 means 11 characters from the end
console.log("slice(-11) :", text2.slice(-11));  // Output: Programming

// From start to -12 (12 characters from end, excluded)
console.log("slice(0, -12) :", text2.slice(0, -12));  // Output: Javascript

//-----------------------------------------------------------------------------
// substring() - Similar to slice() (No Negative Indexing)
//-----------------------------------------------------------------------------
// Similar to slice() but doesn't support negative indexes
// If negative index is used, it's treated as 0
// Syntax: string.substring(startIndex, endIndex)

console.log(text2.substring(0, 10));  // Output: Javascript
console.log(text2.substring(0));  // Output: Javascript Programming
console.log(text2.substring(11));  // Output: Programming

// Negative index treated as 0
console.log(text2.substring(-11));  // Output: Javascript Programming (same as substring(0))

//-----------------------------------------------------------------------------
// charAt() - Get Character at Specific Index
//-----------------------------------------------------------------------------
// Returns the character at specified index
// Returns empty string if index is out of range
// Syntax: string.charAt(index)

console.log(text2.charAt(0));  // Output: J (first character)
console.log(text2.charAt(11));  // Output: P (character at index 11)

//=============================================================================
// STRING REPLACING METHODS
//=============================================================================

console.log("\n=== STRING REPLACING METHODS ===\n");

let text3 = "Javascript is awesome. Javascript is powerful.";

//-----------------------------------------------------------------------------
// replace() - Replace First Occurrence
//-----------------------------------------------------------------------------
// Replaces the FIRST occurrence of a substring with new substring
// Does NOT modify original string (returns new string)
// Syntax: string.replace(searchValue, newValue)

console.log(text3.replace("Javascript", "Python"));
// Output: Python is awesome. Javascript is powerful.
// Note: Only first "Javascript" is replaced

//-----------------------------------------------------------------------------
// replaceAll() - Replace All Occurrences (ES2021)
//-----------------------------------------------------------------------------
// Replaces ALL occurrences of a substring
// Modern method, may not work in older browsers
console.log(text3.replaceAll("Javascript", "Python"));
// Output: Python is awesome. Python is powerful.
// Note: Both "Javascript" occurrences are replaced

//-----------------------------------------------------------------------------
// replace() with Regular Expression - Case-Insensitive Replace
//-----------------------------------------------------------------------------
// Using regex with flags:
// g = global (replace all occurrences)
// i = case-insensitive
console.log(text3.replace(/javascript/gi, "Python"));
// Output: Python is awesome. Python is powerful.
// Note: Replaces all occurrences, case-insensitive

//=============================================================================
// STRING TRIMMING METHODS
//=============================================================================

console.log("\n=== STRING TRIMMING METHODS ===\n");

let text5 = "   Hello world    ";
//           ^^^            ^^^^
//           spaces         spaces

//-----------------------------------------------------------------------------
// trim() - Remove Whitespace from Both Ends
//-----------------------------------------------------------------------------
// Removes spaces, tabs, newlines from start and end
// Does NOT remove spaces in the middle
// Useful for cleaning user input
console.log("Original :", text5);  // Output: "   Hello world    "
console.log("Trimmed :", text5.trim());  // Output: "Hello world"

//-----------------------------------------------------------------------------
// trimStart() / trimLeft() - Remove Whitespace from Start (ES2019)
//-----------------------------------------------------------------------------
// Removes whitespace only from the beginning
console.log("Trimstart :", text5.trimStart());  // Output: "Hello world    "

//-----------------------------------------------------------------------------
// trimEnd() / trimRight() - Remove Whitespace from End (ES2019)
//-----------------------------------------------------------------------------
// Removes whitespace only from the end
console.log("Trimend :", text5.trimEnd());  // Output: "   Hello world"

//=============================================================================
// STRING SPLITTING METHODS
//=============================================================================

console.log("\n=== STRING SPLITTING METHODS ===\n");

//-----------------------------------------------------------------------------
// split() - Convert String to Array
//-----------------------------------------------------------------------------
// Divides a string into an array of substrings
// Syntax: string.split(separator, limit)
// - separator: Character or string to split on
// - limit: Maximum number of splits (optional)

// Example 1: Split by space
let sentence2 = "Javascript is programming language";
let words = sentence2.split(" ");  // Split at each space
console.log(words);
// Output: ['Javascript', 'is', 'programming', 'language']

// Example 2: Split by comma
let sentence3 = "Javascript,is,programming,language";
let words1 = sentence3.split(",");  // Split at each comma
console.log(words1);
// Output: ['Javascript', 'is', 'programming', 'language']

// Access individual elements of array
console.log(words1[0]);  // Output: Javascript

// Example 3: Split by specific character
let word = "Hello";
let chars = word.split("e");  // Split at 'e'
console.log(chars);
// Output: ['H', 'llo'] (splits at 'e', 'e' is removed)

//=============================================================================
// STRING REPEATING METHODS (ES6)
//=============================================================================

console.log("\n=== STRING REPEATING METHODS ===\n");

//-----------------------------------------------------------------------------
// repeat() - Repeat String Multiple Times
//-----------------------------------------------------------------------------
// Returns a new string with specified number of copies
// Syntax: string.repeat(count)

let str3 = "*";
console.log(str3.repeat(50));  // Output: ************************************************** (50 stars)

// Practical Example: Creating patterns
// Print increasing number of stars
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    console.log(str3.repeat(i));  // Repeat star i times
}

// Create a line separator
let str4 = "-";
console.log(str4.repeat(50));  // Output: -------------------------------------------------- (50 dashes)

//=============================================================================
// STRING COMPARISON
//=============================================================================

console.log("\n=== STRING COMPARISON ===\n");

//-----------------------------------------------------------------------------
// Using == Operator (Loose Equality)
//-----------------------------------------------------------------------------
// Compares values after type conversion
// "10" == 10 returns true (string converted to number)
let str1a = "apple";
let str2a = "apple";
console.log(str1a == str2a);  // Output: true (same value)

//-----------------------------------------------------------------------------
// Using === Operator (Strict Equality) - Recommended
//-----------------------------------------------------------------------------
// Compares both value AND type
// No type conversion happens
// More reliable and recommended
let str1aa = "apple";
let str2aa = "apple";
console.log(str1aa === str2aa);  // Output: true (same value and type)

//-----------------------------------------------------------------------------
// Comparing Different Types
//-----------------------------------------------------------------------------
// Demonstrates difference between == and ===

let no = 10;        // Number type
let no1 = "10";     // String type

// == performs type conversion
console.log(no == no1);  // Output: true (string "10" converted to number 10)

// === does NOT perform type conversion
console.log(no === no1);  // Output: false (different types: number vs string)

/*
================================================================================
                        IMPORTANT NOTES
================================================================================

1. String Immutability:
   - Strings cannot be changed after creation
   - Methods return new strings, don't modify original
   - Example: str.toUpperCase() returns new string

2. String Indexing:
   - Index starts at 0
   - Last index = string.length - 1
   - Negative indexes not supported directly

3. String Methods:
   - Most methods don't modify original string
   - They return new strings
   - Original string remains unchanged

4. Comparison:
   - Use === for strict equality (recommended)
   - Use == for loose equality (type conversion)
   - Strings are case-sensitive

5. Common Use Cases:
   - trim() for user input validation
   - toLowerCase() for case-insensitive comparison
   - split() to convert CSV data to array
   - includes() to check if substring exists

6. Best Practices:
   - Use template literals for string interpolation
   - Use === for comparison
   - Trim user input before validation
   - Use meaningful variable names

================================================================================
                        QUICK REFERENCE
================================================================================

Creation:
let str = "text";
let str = 'text';
let str = `text ${variable}`;

Properties:
str.length                  // Number of characters

Case Conversion:
str.toUpperCase()          // UPPERCASE
str.toLowerCase()          // lowercase

Searching:
str.indexOf(substr)        // First index (-1 if not found)
str.lastIndexOf(substr)    // Last index
str.includes(substr)       // true/false
str.startsWith(substr)     // true/false
str.endsWith(substr)       // true/false
str.search(/pattern/)      // Search with regex

Extracting:
str.slice(start, end)      // Extract portion
str.substring(start, end)  // Similar to slice
str.charAt(index)          // Character at index

Replacing:
str.replace(old, new)      // Replace first occurrence
str.replaceAll(old, new)   // Replace all occurrences

Trimming:
str.trim()                 // Remove whitespace from both ends
str.trimStart()            // Remove from start
str.trimEnd()              // Remove from end

Splitting:
str.split(separator)       // Convert to array

Repeating:
str.repeat(count)          // Repeat string

Comparison:
str1 == str2               // Loose equality (with type conversion)
str1 === str2              // Strict equality (no type conversion)

================================================================================
*/
