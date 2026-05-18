/*
================================================================================
                    JAVASCRIPT OBJECTS - COMPLETE GUIDE
================================================================================

What is an Object?
------------------
An object is a collection of key-value pairs (properties and methods).
Objects are used to store related data and functionality together.

Real-World Example:
-------------------
Person Object:
- Properties: name, age, city (data)
- Methods: greet(), getDetails() (functions/actions)

Object Characteristics:
-----------------------
1. Objects store data as key-value pairs
2. Keys are also called properties or attributes
3. Values can be any data type (String, number, array, function, object)
4. Objects are mutable - can be changed after creation
5. Objects are reference types (not primitive)

Array vs Object:
----------------
Array:
- Ordered collection of data
- Accessed by index (0, 1, 2, 3...)
- Example: ["Apple", "Banana", "Orange"]
- Use: When you need a list of similar items

Object:
- Unordered collection of data
- Accessed by key/property name
- Example: {name: "John", age: 30, city: "Pune"}
- Use: When you need to store related properties of an entity

================================================================================
*/

//=============================================================================
// OBJECT CREATION METHODS
//=============================================================================

//-----------------------------------------------------------------------------
// Method 1: Object Literal (Most Common and Recommended)
//-----------------------------------------------------------------------------
// This is the simplest and most popular way to create objects
// Syntax: let objectName = { key1: value1, key2: value2 };
// Can use 'let' or 'const' (const is recommended for objects)

let person = {  // Object with 4 properties
    name: "Rahul",      // Property: name (String)
    age: 25,            // Property: age (Number)
    city: "Pune",       // Property: city (String)
    isStudent: true     // Property: isStudent (Boolean)
}

// Display entire object
console.log("Person Object :", person);
// Output: Person Object : { name: 'Rahul', age: 25, city: 'Pune', isStudent: true }

// Access individual properties using dot notation
console.log(person.name);  // Output: Rahul
console.log(person.age);   // Output: 25

//-----------------------------------------------------------------------------
// Method 2: Using new Object() Constructor
//-----------------------------------------------------------------------------
// Less common approach, but valid
// Creates empty object first, then adds properties

let student = new Object();  // Create empty object
student.name = "Amit";       // Add property: name
student.rollNo = 101;        // Add property: rollNo
student.course = "Javascript";  // Add property: course
student.isStudent = true;    // Add property: isStudent (set to true)
student.isStudent = false;   // Update property: isStudent (changed to false)

// Display student object
console.log("Student object", student);
// Output: Student object { name: 'Amit', rollNo: 101, course: 'Javascript', isStudent: false }

//-----------------------------------------------------------------------------
// Method 3: Using Object.create()
//-----------------------------------------------------------------------------
// Creates a new object with specified prototype
// Object.create(null) creates an empty object with no prototype

let employee = Object.create(null);  // Create empty object with no prototype
employee.name = "Akash";    // Add property: name
employee.salary = 50000;    // Add property: salary

// Display employee object
console.log("Employee Object", employee);
// Output: Employee Object { name: 'Akash', salary: 50000 }


console.log("================")

//=============================================================================
// ACCESSING OBJECT PROPERTIES
//=============================================================================

//-----------------------------------------------------------------------------
// Method 1: Dot Notation (Most Common)
//-----------------------------------------------------------------------------
// Syntax: objectName.propertyName
// This is the most readable and commonly used method

let user = {
    firstName: "Akash",
    lastName: "Shinde",
    age: 30,
    city: "Pune",
    email: "Aksha@gmail.com"
}

// Access properties using dot notation
console.log("First Name :", user.firstName);  // Output: First Name : Akash
console.log("Age  :", user.age);  // Output: Age  : 30

//-----------------------------------------------------------------------------
// Method 2: Bracket Notation
//-----------------------------------------------------------------------------
// Syntax: objectName["propertyName"] or objectName['propertyName']
// Useful when:
// - Property name has spaces or special characters
// - Property name is stored in a variable
// - Property name is dynamic

// Access properties using bracket notation
console.log("City :", user['city']);    // Output: City : Pune (single quotes)
console.log("Email :", user["email"]);   // Output: Email : Aksha@gmail.com (double quotes)
console.log("Age :", user[`age`]);       // Output: Age : 30 (template literal/backticks)

// All three ways work the same - choose based on preference

//=============================================================================
// MODIFYING OBJECT PROPERTIES
//=============================================================================

//-----------------------------------------------------------------------------
// Changing Existing Properties
//-----------------------------------------------------------------------------
// Objects are mutable - we can change property values after creation

let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    inStock: true
}

// Display original object
console.log(product);
// Output: { name: 'Laptop', price: 50000, brand: 'Dell', inStock: true }

// Update existing properties
product.price = 60000;    // Change price from 50000 to 60000
product.inStock = false;  // Change inStock from true to false

// Display updated object
console.log(product);
// Output: { name: 'Laptop', price: 60000, brand: 'Dell', inStock: false }

//-----------------------------------------------------------------------------
// Adding New Properties
//-----------------------------------------------------------------------------
// We can add new properties to existing objects dynamically

product.warrnaty = "2 years";  // Add new property: warranty (note: typo in property name)
product.rating = 4.5;           // Add new property: rating

// Display object after adding new properties
console.log("After adding new pro :", product);
// Output: { name: 'Laptop', price: 60000, brand: 'Dell', inStock: false, warrnaty: '2 years', rating: 4.5 }

//-----------------------------------------------------------------------------
// Deleting Properties
//-----------------------------------------------------------------------------
// Use 'delete' operator to remove properties from object
// Syntax: delete objectName.propertyName

delete product.rating;     // Remove rating property
delete product.warrnaty;   // Remove warranty property

// Display object after deleting properties
console.log(product);
// Output: { name: 'Laptop', price: 60000, brand: 'Dell', inStock: false }
// rating and warrnaty properties are removed

//=============================================================================
// OBJECT METHODS (Functions Inside Objects)
//=============================================================================

// Methods are functions that belong to an object
// They can access object properties using 'this' keyword
// Methods define the behavior/actions of an object

//-----------------------------------------------------------------------------
// Example 1: Person Object with Methods
//-----------------------------------------------------------------------------

let person1 = {
    name: "Rahul",
    age: 25,
    city: "Pune",

    //-----------------------------------------------------------------------------
    // Method 1: greet() - Simple greeting function
    //-----------------------------------------------------------------------------
    // Traditional function syntax: propertyName: function() { }
    greet: function () {
        // 'this' refers to the current object (person1)
        // this.name accesses the 'name' property of person1
        console.log("Hello, my name is " + this.name);
    },

    //-----------------------------------------------------------------------------
    // Method 2: getDetails() - Returns formatted string with all details
    //-----------------------------------------------------------------------------
    getDetails: function () {
        // Template literal (backticks) for string interpolation
        // ${this.name} inserts the value of name property
        return `Name : ${this.name}, Age : ${this.age}, City : ${this.city}`;
    }
}

//-----------------------------------------------------------------------------
// Calling Object Methods
//-----------------------------------------------------------------------------

// Call greet() method - prints greeting to console
person1.greet();  // Output: Hello, my name is Rahul

// Call getDetails() method and print returned value
console.log(person1.getDetails());
// Output: Name : Rahul, Age : 25, City : Pune

// Store returned value in variable, then print
let details = person1.getDetails();
console.log(details);
// Output: Name : Rahul, Age : 25, City : Pune


//-----------------------------------------------------------------------------
// Example 2: Calculator Object with Multiple Methods
//-----------------------------------------------------------------------------
// Demonstrates ES6 shorthand method syntax (no 'function' keyword needed)

let calcualtor = {
    // Properties to store numbers
    num1: 0,
    num2: 0,

    //-----------------------------------------------------------------------------
    // Method: setNumber() - Sets the two numbers for calculation
    //-----------------------------------------------------------------------------
    // ES6 shorthand syntax: methodName(parameters) { }
    setNumber(a, b) {
        this.num1 = a;  // Store first number (10)
        this.num2 = b;  // Store second number (5)
    },

    //-----------------------------------------------------------------------------
    // Method: additon() - Returns sum of two numbers
    //-----------------------------------------------------------------------------
    // Note: Parameter 'iton' is not used (can be removed)
    additon(iton) {
        return this.num1 + this.num2;  // 10 + 5 = 15
    },

    //-----------------------------------------------------------------------------
    // Method: Substration() - Returns difference of two numbers
    //-----------------------------------------------------------------------------
    Substration() {
        return this.num1 - this.num2;  // 10 - 5 = 5
    },

    //-----------------------------------------------------------------------------
    // Method: Multiplication() - Returns product of two numbers
    //-----------------------------------------------------------------------------
    Multiplication() {
        return this.num1 * this.num2;  // 10 * 5 = 50
    }
}

// Set numbers first before performing calculations
calcualtor.setNumber(10, 5);  // num1 = 10, num2 = 5

// Perform calculations and display results
console.log(calcualtor.additon());        // Output: 15 (10 + 5)
console.log(calcualtor.Substration());    // Output: 5 (10 - 5)
console.log(calcualtor.Multiplication()); // Output: 50 (10 * 5)

//=============================================================================
// THE 'this' KEYWORD
//=============================================================================

// 'this' keyword:
// - Refers to the current object
// - Used to access properties and methods of the same object
// - Value of 'this' depends on how the function is called
// - In object methods, 'this' refers to the object that owns the method

//-----------------------------------------------------------------------------
// Example 3: Student Object - Demonstrates 'this' Keyword Usage
//-----------------------------------------------------------------------------

let student1 = {
    // Properties
    name: "Amit",                    // String property
    marks: [85, 90, 78, 92, 88],    // Array property (5 marks)

    //-----------------------------------------------------------------------------
    // Method: getTotalMarks() - Calculates sum of all marks
    //-----------------------------------------------------------------------------
    getTotalMarks() {
        let total = 0;  // Initialize total to 0

        // Loop through each mark in the marks array
        // 'this.marks' accesses the marks property of current object
        for (let mark of this.marks) {
            total += mark;  // Add each mark to total
        }
        // Loop iterations:
        // total = 0 + 85 = 85
        // total = 85 + 90 = 175
        // total = 175 + 78 = 253
        // total = 253 + 92 = 345
        // total = 345 + 88 = 433

        return total;  // Return final total (433)
    },

    //-----------------------------------------------------------------------------
    // Method: getAvgrage() - Calculates average of marks
    //-----------------------------------------------------------------------------
    getAvgrage() {
        // Call another method of same object using 'this'
        let totalMarks = this.getTotalMarks();  // Get total (433)

        // Calculate average: total / number of marks
        // this.marks.length = 5
        return totalMarks / this.marks.length;  // 433 / 5 = 86.6
    },

    //-----------------------------------------------------------------------------
    // Method: diplayResult() - Displays complete student report
    //-----------------------------------------------------------------------------
    diplayResult() {
        // Access property using 'this'
        console.log("Student Name :", this.name);

        // Call method using 'this'
        console.log("Total marks :", this.getTotalMarks());

        // Call another method using 'this'
        console.log("Average :", this.getAvgrage());
    }
}

// Alternative ways to call methods (commented out):
// console.log(student1.getTotalMarks());  // Would print: 433
// console.log(student1.getAvgrage());     // Would print: 86.6

// Call displayResult() method to show complete report
student1.diplayResult();
// Output:
// Student Name : Amit
// Total marks : 433
// Average : 86.6

//=============================================================================
// CONSTRUCTOR FUNCTION
//=============================================================================

// Constructor Function:
// - Used to create multiple objects with same structure
// - Function name starts with capital letter (convention)
// - Called with 'new' keyword
// - 'this' refers to the newly created object
// - Automatically returns the new object

//-----------------------------------------------------------------------------
// Constructor Function Example
//-----------------------------------------------------------------------------
// Function name: person2 (should be Person2 by convention)
// Creates person objects with name and age properties

function person2(name, age) {
    // 'this' refers to the new object being created
    this.name = name;  // Set name property
    this.age = age;    // Set age property
    // No need to return - automatically returns 'this'
}

// Create new person object using constructor
// 'new' keyword:
// 1. Creates empty object
// 2. Sets 'this' to point to new object
// 3. Executes function body
// 4. Returns the new object
let p1 = new person2("Amit", 30);

// Access property of created object
console.log(p1.name);  // Output: Amit

// Note: Yes, we can define a constructor function to create objects
// This is useful when you need to create multiple similar objects

// Example of creating multiple objects:
// let p2 = new person2("Priya", 25);
// let p3 = new person2("Rahul", 28);

/*
================================================================================
                        SUMMARY
================================================================================

Object Creation:
----------------
1. Object Literal: let obj = { key: value }  (Most common)
2. new Object(): let obj = new Object()      (Less common)
3. Object.create(): let obj = Object.create(null)

Accessing Properties:
---------------------
1. Dot notation: obj.property        (Most common)
2. Bracket notation: obj["property"] (For dynamic access)

Modifying Objects:
------------------
1. Update: obj.property = newValue
2. Add: obj.newProperty = value
3. Delete: delete obj.property

Object Methods:
---------------
- Functions inside objects
- Access object properties using 'this' keyword
- Syntax: methodName() { } or methodName: function() { }

'this' Keyword:
---------------
- Refers to current object
- Used to access properties and methods of same object
- Essential for object methods

Constructor Functions:
----------------------
- Create multiple similar objects
- Called with 'new' keyword
- Function name starts with capital letter (convention)
- 'this' refers to new object being created

Best Practices:
---------------
✓ Use object literal for single objects
✓ Use constructor function for multiple similar objects
✓ Use 'this' to access object properties in methods
✓ Use meaningful property and method names
✓ Use const for objects that won't be reassigned

================================================================================
*/ 