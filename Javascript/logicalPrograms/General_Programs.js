// LOGICAL PROGRAMS USING LOOPS AND IF-ELSE
// =======================================================
// =======================================================
// Program 1: Print Even and Odd Numbers (1 to 20)
// =======================================================
console.log("--- Program 1: Even and Odd Numbers ---");
for (let i = 1; i <= 20; i++) {
if (i % 2 == 0) {
console.log(i, "is even");
} else {
console.log(i, "is odd");
}
}
console.log("====================================");
// =======================================================
// Program 2: Count Even and Odd Numbers (1 to 50)
// =======================================================
console.log("--- Program 2: Count Even and Odd ---");
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 50; i++) {
if (i % 2 == 0) {
evenCount++; // Increment even count
} else {
oddCount++; // Increment odd count
}
}
console.log("Total Even Numbers:", evenCount); // Output: 25
console.log("Total Odd Numbers:", oddCount); // Output: 25
console.log("====================================");
// =======================================================
// Program 3: Print Numbers Divisible by 5 (1 to 100)
// =======================================================
console.log("--- Program 3: Numbers Divisible by 5 ---");
for (let i = 1; i <= 100; i++) {

if (i % 5 == 0) { // Check if divisible by 5
console.log(i);
}
}
// Output: 5, 10, 15, 20, 25, 30, ..., 95, 100
console.log("====================================");
// =======================================================
// Program 4: Sum of Even and Odd Numbers Separately (1 to 20)
// =======================================================
console.log("--- Program 4: Sum of Even and Odd Numbers ---");
let evenSum = 0;
let oddSum = 0;
for (let i = 1; i <= 20; i++) {
if (i % 2 == 0) {
// Even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
evenSum = evenSum + i; // evenSum += i
} else {
// Odd numbers: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
oddSum = oddSum + i; // oddSum += i
}
}
console.log("Sum of Even Numbers:", evenSum); // Output: 110
console.log("Sum of Odd Numbers:", oddSum); // Output: 100
console.log("====================================");
// =======================================================
// Program 5: Identify Positive, Negative, and Zero Numbers
// =======================================================
console.log("--- Program 5: Positive, Negative, Zero ---");
let nums = [10, -5, 20, -15, 30, 22, 0, 40];
for (let num of nums) {
if (num > 0) {
console.log(num, "is positive");
} else if (num < 0) {
console.log(num, "is negative");
} else {
console.log(num, "is Zero");
}
}

console.log("====================================");
// =======================================================
// Program 6: Count Positive, Negative, and Zero Numbers
// =======================================================
console.log("--- Program 6: Count Positive, Negative, Zero ---");
let nums1 = [10, -5, 20, -15, 30, 22, 0, 40, 10, -4, 44, 0, 23];
let posCount = 0;
let negCount = 0;
let zeroCount = 0;
for (let num of nums1) {
if (num > 0) {
posCount++; // Count positive numbers
} else if (num < 0) {
negCount++; // Count negative numbers
} else {
zeroCount++; // Count zeros
}
}
console.log("Positive Numbers:", posCount); // Output: 7
console.log("Negative Numbers:", negCount); // Output: 4
console.log("Zero Count:", zeroCount); // Output: 2
console.log("====================================");
// =======================================================
// Program 7: Find Factorial of a Number
// =======================================================
console.log("--- Program 7: Factorial ---");
/*
Factorial (n!) = n × (n-1) × (n-2) × ... × 2 × 1
Example:
5! = 5 × 4 × 3 × 2 × 1 = 120
7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
*/
let factNum = 7;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
// Iteration 1: factorial = 1 × 1 = 1
// Iteration 2: factorial = 1 × 2 = 2
// Iteration 3: factorial = 2 × 3 = 6

// Iteration 4: factorial = 6 × 4 = 24
// Iteration 5: factorial = 24 × 5 = 120
// Iteration 6: factorial = 120 × 6 = 720
// Iteration 7: factorial = 720 × 7 = 5040
factorial = factorial * i;
}
console.log(`Factorial of ${factNum} is:`, factorial); // Output:
5040
console.log("====================================");
// =======================================================
// Program 8: Check if a Number is Prime
// =======================================================
console.log("--- Program 8: Check Prime Number ---");
/*
Prime Number Definition:
- A natural number greater than 1
- Divisible only by 1 and itself
- Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...
- Non-Prime: 4 (divisible by 2), 6 (divisible by 2, 3), 8, 9,
10...
*/
let primeNum = 20;
let isPrime = true;
if (primeNum <= 1) {
isPrime = false; // Numbers <= 1 are not prime
} else {
// Check if primeNum is divisible by any number from 2 to primeNum-1
for (let i = 2; i < primeNum; i++) {
if (primeNum % i == 0) {
isPrime = false; // Found a divisor, not prime
break; // No need to check further
}
}
}
if (isPrime) {
console.log(primeNum, "is a prime number");
} else {
console.log(primeNum, "is NOT a prime number");
}
// Output: 20 is NOT a prime number (divisible by 2, 4, 5, 10)

console.log("====================================");
// =======================================================
// Program 9: Print All Prime Numbers (1 to 100)
// =======================================================
console.log("--- Program 9: Prime Numbers from 1 to 100 ---");
for (let num = 2; num <= 100; num++) {
// Start from 2 (first prime number)
let isPrimeNum = true;
// Check if num is divisible by any number from 2 to num-1
for (let i = 2; i < num; i++) {
if (num % i == 0) {
isPrimeNum = false; // Not prime
break; // Exit inner loop
}
}
if (isPrimeNum) {
console.log(num); // Print prime number
}
}
// Output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
53, 59, 61, 67, 71, 73, 79, 83, 89, 97
console.log("====================================");
// =======================================================
// Program 10: Check Palindrome Number
// =======================================================
console.log("--- Program 10: Palindrome Number ---");
/*
Palindrome Number:
- A number that reads the same forward and backward
- Examples: 121, 12321, 1331, 454, 7, 11, 101
- Non-Palindrome: 123, 456, 789
*/
let palindromeNum = 12321;
let originalNum = palindromeNum;
let reversedNum = 0;
let temp = palindromeNum;

while (temp > 0) {
let digit = temp % 10; // Get last digit
reversedNum = reversedNum * 10 + digit; // Build reversed number
temp = Math.floor(temp / 10); // Remove last digit
}
if (originalNum === reversedNum) {
console.log(originalNum, "is a Palindrome Number");
} else {
console.log(originalNum, "is NOT a Palindrome Number");
}
// Example: 12321
// Step 1: digit = 1, reversed = 1, temp = 1232
// Step 2: digit = 2, reversed = 12, temp = 123
// Step 3: digit = 3, reversed = 123, temp = 12
// Step 4: digit = 2, reversed = 1232, temp = 1
// Step 5: digit = 1, reversed = 12321, temp = 0
// 12321 == 12321 → Palindrome
console.log("====================================");
// =======================================================
// Program 11: Check Armstrong Number
// =======================================================
console.log("--- Program 11: Armstrong Number ---");
/*
Armstrong Number (Narcissistic Number):
- Sum of its digits raised to the power of number of digits equals
the number itself
- For 3-digit numbers: sum of cubes of digits
Examples:
- 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✓
- 370 = 3³ + 7³ + 0³ = 27 + 343 + 0 = 370 ✓
- 371 = 3³ + 7³ + 1³ = 27 + 343 + 1 = 371 ✓
- 407 = 4³ + 0³ + 7³ = 64 + 0 + 343 = 407 ✓
- 152 = 1³ + 5³ + 2³ = 1 + 125 + 8 = 134 ✗ (Not Armstrong)
*/
let armNum = 153;
let armOriginal = armNum;
let armSum = 0;
let armTemp = armNum;
while (armTemp > 0) {
let digit = armTemp % 10; // Get last digit

armSum += digit ** 3; // Add cube of digit
armTemp = Math.floor(armTemp / 10); // Remove last digit
}
if (armOriginal === armSum) {
console.log(armOriginal, "is an Armstrong Number");
} else {
console.log(armOriginal, "is NOT an Armstrong Number");
}
// Example: 153
// Step 1: digit = 3, sum = 0 + 27 = 27
// Step 2: digit = 5, sum = 27 + 125 = 152
// Step 3: digit = 1, sum = 152 + 1 = 153
// 153 == 153 → Armstrong Number
console.log("====================================");
// =======================================================
// Program 12: Print All Armstrong Numbers (1 to 1000)
// =======================================================
console.log("--- Program 12: Armstrong Numbers (1 to 1000) ---");
for (let num = 1; num <= 1000; num++) {
let temp = num;
let sum = 0;
while (temp > 0) {
let digit = temp % 10;
sum += digit ** 3;
temp = Math.floor(temp / 10);
}
if (num === sum) {
console.log(num);
}
}
// Output: 1, 153, 370, 371, 407
console.log("====================================");
// =======================================================
// Program 13: Print Star Pattern (Right Triangle)
// =======================================================
console.log("--- Program 13: Star Pattern ---");
/*

Pattern:
*
* *
* * *
* * * *
* * * * *
*/
let rows = 5;
for (let i = 1; i <= rows; i++) {
// Outer loop: Controls number of rows
let pattern = "";
for (let j = 1; j <= i; j++) {
// Inner loop: Controls number of stars in each row
// Row 1: j runs 1 time → *
// Row 2: j runs 2 times → * *
// Row 3: j runs 3 times → * * *
// Row 4: j runs 4 times → * * * *
// Row 5: j runs 5 times → * * * * *
pattern += "* ";
}
console.log(pattern);
}
console.log("====================================");
// =======================================================
// Program 14: Print Number Pattern
// =======================================================
console.log("--- Program 14: Number Pattern ---");
/*
Pattern:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
for (let i = 1; i <= 5; i++) {
let numPattern = "";
for (let j = 1; j <= i; j++) {
numPattern += j + " ";

}
console.log(numPattern);
}
console.log("====================================");
// =======================================================
// Program 15: Print Inverted Star Pattern
// =======================================================
console.log("--- Program 15: Inverted Star Pattern ---");
/*
Pattern:
* * * * *
* * * *
* * *
* *
*
*/
for (let i = 5; i >= 1; i--) {
let invertPattern = "";
for (let j = 1; j <= i; j++) {
invertPattern += "* ";
}
console.log(invertPattern);
}
console.log("====================================");
// =======================================================
// IMPORTANT NOTES
// =======================================================
/*
1. BREAK vs CONTINUE:
- break: Exits the entire loop
- continue: Skips current iteration, continues loop
2. PRIME NUMBER:
- Only divisible by 1 and itself
- Smallest prime: 2
- Check divisibility from 2 to n-1
3. PALINDROME:
- Reads same forward and backward

- Reverse the number and compare
4. ARMSTRONG NUMBER:
- Sum of cubes of digits equals the number
- Only for 3-digit numbers in basic form
5. FACTORIAL:
- Product of all positive integers up to n
- 0! = 1, 1! = 1
6. NESTED LOOPS:
- Outer loop controls rows
- Inner loop controls columns/elements per row
- Used for patterns and 2D operations
*/
console.log("\n===== ALL PROGRAMS COMPLETED =====");