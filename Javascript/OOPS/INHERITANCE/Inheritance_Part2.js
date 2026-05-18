class Employee { // Parent class (base class)
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showDetails() { // Method to display employee details
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

// Child class inheriting from Employee
class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary); // Call parent constructor
        this.language = language;
    }
    showSkill() { // Method to display developer's skill
        console.log(`${this.name} knows ${this.language}`);
    }
}

// Creating an instance of Developer
const dev1 = new Developer("Amit", 60000, "Javascript");
dev1.showDetails(); // Inherited method from Employee
dev1.showSkill();   // Method from Developer class

// ====================================================
// MULTIPLE INHERITANCE IN JAVASCRIPT
// ====================================================

// Multiple inheritance means a class can inherit properties and methods from more than one parent class
// JavaScript doesn't support multiple inheritance directly like Python, but we can achieve it using mixins

// Example of what multiple inheritance would look like in Python (not possible in JS):
// class A {
//     method1() {}
// }
// class B {
//     method2() {}
// }
// class C extends A, B {  // ❌ Not possible in JavaScript
//     method3() {}
// }

// ====================================================
// MULTIPLE INHERITANCE USING MIXINS
// ====================================================

// Mixin objects (behave like parent classes)
const canEat = {
    eat() {
        console.log("Eating...");
    }
};

const canWalk = {
    walk() {
        console.log("Walking...");
    }
};

const canRun = {
    run() {
        console.log("Running...");
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }
}

// Applying multiple inheritance using mixins
// Object.assign() copies all methods from mixins to Person.prototype
Object.assign(Person.prototype, canEat, canWalk, canRun);

const person1 = new Person("Amit");
person1.eat();  // Method from canEat mixin
person1.walk(); // Method from canWalk mixin
person1.run();  // Method from canRun mixin

// Now Person class behaves like it inherited from canEat, canWalk, and canRun parent classes
// Object.assign() copies all enumerable properties from source objects to the target object