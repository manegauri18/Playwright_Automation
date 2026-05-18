// ============================================
// OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT
// ============================================

/*
═══════════════════════════════════════════════════════════════════════════════
                            WHAT IS OOP?
═══════════════════════════════════════════════════════════════════════════════

DEFINITION:
- OOP (Object-Oriented Programming) is a programming paradigm
- Based on the concept of "objects"
- Objects contain data (properties) and code (methods)
- Helps organize code in reusable, maintainable way
- Real-world modeling approach

4 PILLARS OF OOP:
1. ENCAPSULATION - Bundling data and methods together in a single unit (class)
2. ABSTRACTION - Hiding complex implementation details, showing only necessary features
3. INHERITANCE - Creating new classes from existing ones (code reusability)
4. POLYMORPHISM - Same method name, different behaviors in different classes

BENEFITS OF OOP:
✓ Code Reusability
✓ Better Organization
✓ Easy Maintenance
✓ Real-world Modeling
✓ Data Security (Encapsulation)
✓ Scalability
*/

/*
═══════════════════════════════════════════════════════════════════════════════
                            WHAT IS A CLASS?
═══════════════════════════════════════════════════════════════════════════════

DEFINITION:
- A CLASS is a BLUEPRINT or TEMPLATE for creating objects
- It defines the structure (properties) and behavior (methods)
- Class itself is NOT an object, it's a template to create objects
- Think of it as a DESIGN PLAN or FACTORY MOLD

REAL-WORLD ANALOGY:
- Class = Car Blueprint (design document)
- Object = Actual Car (physical vehicle)
- Just like a blueprint can create many cars, a class can create many objects

SYNTAX:
class ClassName {
    constructor(parameters) {
        // Initialize properties
    }
    
    method1() {
        // Method code
    }
}

USES OF CLASS:
✓ Create multiple objects with same structure
✓ Organize related data and functions together
✓ Implement real-world entities in code
✓ Reuse code efficiently
✓ Maintain clean and structured code
✓ Enable inheritance and polymorphism
*/

/*
═══════════════════════════════════════════════════════════════════════════════
                            WHAT IS AN OBJECT?
═══════════════════════════════════════════════════════════════════════════════

DEFINITION:
- An OBJECT is an INSTANCE of a class
- It's the ACTUAL ENTITY created from the class blueprint
- Each object has its own unique data (property values)
- Objects are created using the 'new' keyword

REAL-WORLD ANALOGY:
- If Class = House Blueprint
- Then Object = Actual House built from that blueprint
- You can build 100 houses (objects) from 1 blueprint (class)
- Each house can have different colors, furniture (different property values)

SYNTAX:
let objectName = new ClassName(arguments);

USES OF OBJECT:
✓ Store specific data for an entity
✓ Represent real-world things in code
✓ Access properties and methods
✓ Perform operations on specific data
✓ Create multiple instances with different values

KEY POINTS:
- Each object is independent
- Changing one object doesn't affect other objects
- All objects from same class share the same methods
- But each object has its own property values
*/

/*
═══════════════════════════════════════════════════════════════════════════════
                            WHAT IS A CONSTRUCTOR?
═══════════════════════════════════════════════════════════════════════════════

DEFINITION:
- CONSTRUCTOR is a SPECIAL METHOD inside a class
- It AUTOMATICALLY runs when you create a new object
- Used to INITIALIZE (set up) the object's properties
- Always named 'constructor'
- Called automatically with 'new' keyword

REAL-WORLD ANALOGY:
- Constructor = Factory Setup Process
- When a car is manufactured, it goes through setup:
  - Install engine
  - Paint color
  - Add wheels
  - Set serial number
- Similarly, constructor sets up initial values for object

SYNTAX:
constructor(parameters) {
    this.property = value;
}

USES OF CONSTRUCTOR:
✓ Initialize object properties with values
✓ Set default values
✓ Accept parameters to customize each object
✓ Run setup code when object is created
✓ Validate input data
✓ Perform initial calculations

HOW CONSTRUCTOR WORKS:
1. You write: new Person("Akshay", 30)
2. JavaScript creates empty object: {}
3. Constructor runs automatically
4. 'this' refers to the new empty object
5. Properties are added: this.name = "Akshay"
6. Constructor finishes
7. Object is returned and stored in person1
*/

/*
═══════════════════════════════════════════════════════════════════════════════
                            WHAT IS 'this' KEYWORD?
═══════════════════════════════════════════════════════════════════════════════

DEFINITION:
- 'this' refers to the CURRENT OBJECT
- It's used inside class methods to access object's properties
- 'this' points to the object that is calling the method

EXAMPLE:
class Person {
    constructor(name) {
        this.name = name;  // 'this' refers to current object
    }
}

let person1 = new Person("Akshay");  // 'this' refers to person1
let person2 = new Person("Ketan");   // 'this' refers to person2

WHY USE 'this'?
✓ To differentiate between parameter and property
✓ To access object's own properties inside methods
✓ To refer to current object
✓ To avoid naming conflicts

WITHOUT 'this':
constructor(name) {
    name = name;  // ❌ Confusing! Which name?
}

WITH 'this':
constructor(name) {
    this.name = name;  // ✓ Clear! this.name is property, name is parameter
}
*/

// ============================================
// EXAMPLE 1: PERSON CLASS
// Demonstrates: Class, Object, Constructor, this
// ============================================

// CLASS - Blueprint for creating Person objects
class Person {

    // CONSTRUCTOR - Special method that runs automatically when object is created
    // Used to initialize object properties
    constructor(name, age) {
        this.name = name;  // 'this.name' is property, 'name' is parameter
        this.age = age;    // 'this' refers to current object being created
    }

    // METHOD - Function inside class
    // Can be called on any Person object
    greet() {
        // 'this' refers to the object that calls this method
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

// CREATING OBJECTS - Instances of Person class
// 'new' keyword creates object and calls constructor automatically
let person1 = new Person("Akshay", 30);  // Object 1 with name="Akshay", age=30
let person2 = new Person("Ketan", 32);   // Object 2 with name="Ketan", age=32

// CALLING METHODS on objects
person1.greet();  // Output: Hello, my name is Akshay and I am 30 years old.
person2.greet();  // Output: Hello, my name is Ketan and I am 32 years old.

// ACCESSING PROPERTIES of objects
console.log(person1.name);  // Output: Akshay
console.log(person1.age);   // Output: 30

/*
EXPLANATION:
1. Person is a CLASS (blueprint)
2. person1 and person2 are OBJECTS (instances)
3. constructor() initializes name and age properties
4. 'this' refers to current object (person1 or person2)
5. greet() is a method that can be called on any Person object
6. Each object has its own name and age values
*/

// ============================================
// EXAMPLE 2: CALCULATOR CLASS
// Demonstrates: Constructor with no parameters, Multiple methods
// ============================================

class Calculator {

    // Constructor with no parameters
    // Initializes result property to 0
    constructor() {
        this.result = 0;  // Default value
    }

    // Method to add two numbers
    add(a, b) {
        this.result = a + b;  // Store result in object's property
        return this.result;   // Return the result
    }

    // Method to subtract two numbers
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    // Method to divide two numbers
    divide(a, b) {
        // Validation: Check if dividing by zero
        if (b === 0) {
            console.log("Error: Division by zero is not allowed.");
            return null;  // Return null for invalid operation
        }
        this.result = a / b;
        return this.result;
    }

    // Method to get current result
    getResult() {
        return this.result;
    }
}

// Creating Calculator object
let calc = new Calculator();  // result = 0

// Calling methods and displaying results
console.log("Addition:", calc.add(10, 5));       // 10 + 5 = 15
console.log("Multiplication:", calc.multiply(10, 5));  // 10 * 5 = 50
console.log("Division:", calc.divide(10, 5));    // 10 / 5 = 2
console.log("Current Result:", calc.getResult()); // 2 (last operation result)

/*
EXPLANATION:
1. Calculator class has one property: result
2. Constructor initializes result to 0
3. Each method performs calculation and stores in this.result
4. Methods return the result value
5. getResult() retrieves the last calculated result
6. divide() method has validation to prevent division by zero
*/

// ============================================
// EXAMPLE 3: BANK ACCOUNT CLASS (REAL-WORLD)
// Demonstrates: Complex class with multiple methods, Array property, Object in Array
// ============================================

class BankAccount {

    // Constructor with default parameter (initialBalance = 0)
    constructor(accountNumber, holderName, initialBalance = 0) {
        this.accountNumber = accountNumber;  // Account number
        this.holderName = holderName;        // Account holder name
        this.balance = initialBalance;       // Current balance (default 0)
        this.transactions = [];              // Array to store transaction history
    }

    // Method to deposit money
    deposit(amount) {
        // Validation: Amount must be positive
        if (amount > 0) {
            this.balance += amount;  // Add amount to balance

            // Store transaction details in array
            this.transactions.push({
                type: 'Deposit',                        // Transaction type
                amount: amount,                         // Amount deposited
                date: new Date().toLocaleDateString()   // Current date
            });

            console.log(`✓ Deposited ₹${amount}. New Balance: ₹${this.balance}`);
        }
        else {
            console.log("✗ Invalid deposit amount. Amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        // Validation: Amount must be positive AND less than or equal to balance
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;  // Subtract amount from balance

            // Store transaction details
            this.transactions.push({
                type: 'Withdraw',
                amount: amount,
                date: new Date().toLocaleDateString()
            });

            console.log(`✓ Withdrawn ₹${amount}. New Balance: ₹${this.balance}`);
        }
        else if (amount > this.balance) {
            console.log("✗ Insufficient balance. Cannot withdraw.");
        }
        else {
            console.log("✗ Invalid withdrawal amount. Amount must be positive.");
        }
    }

    // Method to check current balance
    checkBalance() {
        console.log(`Account Balance: ₹${this.balance}`);
        return this.balance;
    }

    // Method to display account information
    getAccountInfo() {
        console.log("\n--- Account Information ---");
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Holder Name: ${this.holderName}`);
        console.log(`Balance: ₹${this.balance}`);
    }

    // Method to display transaction history
    getTransactionHistory() {
        console.log("\n--- Transaction History ---");

        // Check if there are any transactions
        if (this.transactions.length === 0) {
            console.log("No transactions yet.");
            return;
        }

        // Loop through all transactions and display
        this.transactions.forEach((tx, index) => {
            console.log(`${index + 1}. ${tx.type} of ₹${tx.amount} on ${tx.date}`);
        });
    }
}

// ============================================
// USING BANK ACCOUNT CLASS - ACCOUNT 1
// ============================================

console.log("\n========== ACCOUNT 1 ==========");

// Creating first bank account object
let account1 = new BankAccount("ACC0001", "Ketan Jadhav", 5000);

// Display account information
account1.getAccountInfo();

// Perform transactions
account1.deposit(2000);    // Deposit ₹2000 (Balance: 7000)
account1.deposit(3000);    // Deposit ₹3000 (Balance: 10000)
account1.withdraw(1500);   // Withdraw ₹1500 (Balance: 8500)
account1.withdraw(10000);  // Try to withdraw ₹10000 (Insufficient balance)
account1.checkBalance();   // Check current balance
account1.deposit(1000);    // Deposit ₹1000 (Balance: 9500)

// Display all transactions
account1.getTransactionHistory();

// ============================================
// USING BANK ACCOUNT CLASS - ACCOUNT 2
// ============================================

console.log("\n========== ACCOUNT 2 ==========");

// Creating second bank account object
let account2 = new BankAccount("ACC0002", "Akash Patil", 15000);

// Display account information
account2.getAccountInfo();

// Perform transactions
account2.deposit(2000);    // Deposit ₹2000 (Balance: 17000)
account2.deposit(3000);    // Deposit ₹3000 (Balance: 20000)
account2.withdraw(1500);   // Withdraw ₹1500 (Balance: 18500)
account2.withdraw(10000);  // Withdraw ₹10000 (Balance: 8500)
account2.checkBalance();   // Check current balance
account2.deposit(1000);    // Deposit ₹1000 (Balance: 9500)

// Display all transactions
account2.getTransactionHistory();

/*
EXPLANATION OF BANK ACCOUNT:
1. BankAccount class has 4 properties:
   - accountNumber: Unique account ID
   - holderName: Name of account holder
   - balance: Current balance amount
   - transactions: Array storing all transaction history

2. Constructor accepts 3 parameters:
   - accountNumber (required)
   - holderName (required)
   - initialBalance (optional, default = 0)

3. Methods:
   - deposit(): Add money to account
   - withdraw(): Remove money from account (with validation)
   - checkBalance(): Display current balance
   - getAccountInfo(): Display account details
   - getTransactionHistory(): Display all transactions

4. Each transaction is stored as an object with:
   - type: "Deposit" or "Withdraw"
   - amount: Transaction amount
   - date: Transaction date

5. account1 and account2 are independent objects:
   - Each has its own balance
   - Each has its own transaction history
   - Operations on account1 don't affect account2
*/

// ============================================
// EXAMPLE 4: SIMPLE CLASS WITHOUT CONSTRUCTOR
// Demonstrates: Class can exist without constructor
// ============================================

class Test {
    // Method without constructor
    demo() {
        console.log("This is demo method");
    }
}

// Creating object
let demo1 = new Test();  // No parameters needed (no constructor)
demo1.demo();  // Output: This is demo method

/*
EXPLANATION:
- If you don't define a constructor, JavaScript creates a default empty constructor
- You can still create objects and call methods
- But you cannot initialize properties during object creation
*/

// ============================================
// EXAMPLE 5: STATIC METHODS
// Demonstrates: Static methods belong to class, not objects
// ============================================

class Bank {
    // Static method - belongs to class, not objects
    static demo() {
        console.log("This is static method");
    }

    // Static method calling another static method
    static show() {
        this.demo();  // 'this' refers to class itself in static methods
    }
}

// Calling static methods directly on class (no object needed)
Bank.show();  // Output: This is static method
Bank.demo();  // Output: This is static method

// ❌ CANNOT call static methods on objects
// let b = new Bank();
// b.demo();  // Error! demo is not a function

/*
EXPLANATION OF STATIC METHODS:
1. Static methods are called on CLASS, not on OBJECTS
2. Use 'static' keyword before method name
3. Syntax: ClassName.methodName()
4. Cannot be called on objects
5. Used for utility functions that don't need object data

WHEN TO USE STATIC METHODS:
✓ Utility functions (Math.sqrt(), Math.random())
✓ Factory methods (create objects)
✓ Helper functions
✓ Constants (Math.PI)

EXAMPLE:
class MathHelper {
    static square(num) {
        return num * num;
    }
}

MathHelper.square(5);  // ✓ Correct (called on class)

let m = new MathHelper();
m.square(5);  // ❌ Error (cannot call on object)
*/

// ============================================
// COMPARISON: STATIC vs NON-STATIC METHODS
// ============================================

class Example {
    // Non-static method (instance method)
    instanceMethod() {
        console.log("This is instance method - called on object");
    }

    // Static method (class method)
    static staticMethod() {
        console.log("This is static method - called on class");
    }
}

// Non-static method: Need to create object first
let obj = new Example();
obj.instanceMethod();  // ✓ Works

// Static method: Call directly on class
Example.staticMethod();  // ✓ Works

// ❌ WRONG USAGE:
// Example.instanceMethod();  // Error! Need object
// obj.staticMethod();        // Error! Static methods not on objects

/*
═══════════════════════════════════════════════════════════════════════════════
                            KEY CONCEPTS SUMMARY
═══════════════════════════════════════════════════════════════════════════════

1. CLASS:
   - Blueprint/Template for creating objects
   - Defines structure (properties) and behavior (methods)
   - Written once, used many times
   - Syntax: class ClassName { }

2. OBJECT:
   - Instance of a class
   - Created using 'new' keyword
   - Has its own unique data
   - Syntax: let obj = new ClassName()

3. CONSTRUCTOR:
   - Special method inside class
   - Runs automatically when object is created
   - Used to initialize properties
   - Syntax: constructor(parameters) { }

4. 'this' KEYWORD:
   - Refers to current object
   - Used to access object's properties and methods
   - Helps differentiate between parameters and properties
   - Example: this.name = name

5. STATIC METHODS:
   - Belong to class, not objects
   - Called on class directly
   - Cannot be called on objects
   - Syntax: static methodName() { }

═══════════════════════════════════════════════════════════════════════════════
                            RELATIONSHIP DIAGRAM
═══════════════════════════════════════════════════════════════════════════════

CLASS (Blueprint)
    ↓
    Contains CONSTRUCTOR (Initializer)
    ↓
    Creates OBJECTS (Instances)
    ↓
    Objects use 'this' to access their own properties
    ↓
    Objects can call METHODS

EXAMPLE:
class Person {              ← CLASS
    constructor(name) {     ← CONSTRUCTOR
        this.name = name;   ← 'this' refers to current object
    }
    greet() {               ← METHOD
        console.log(this.name);
    }
}

let p1 = new Person("Akshay");  ← OBJECT 1
let p2 = new Person("Ketan");   ← OBJECT 2

═══════════════════════════════════════════════════════════════════════════════
                            IMPORTANT POINTS
═══════════════════════════════════════════════════════════════════════════════

✓ Class is a template, Object is an instance
✓ Constructor runs automatically when object is created
✓ 'this' refers to current object
✓ Each object has its own property values
✓ All objects share the same methods
✓ Static methods belong to class, not objects
✓ Use 'new' keyword to create objects
✓ Constructor name is always 'constructor'
✓ A class can have only ONE constructor
✓ Constructor can have default parameters

═══════════════════════════════════════════════════════════════════════════════
*/

console.log("\n✓ OOP Complete Guide with Detailed Comments Finished!");
console.log("✓ Covered: Class, Object, Constructor, 'this', Static Methods");