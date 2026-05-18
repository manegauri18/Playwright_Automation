// ======================================================
// OOPS PRINCIPLES (4 PILLARS)
// ======================================================

// 1. Encapsulation  -> Binding data + methods together
// 2. Abstraction    -> Showing only required details
// 3. Inheritance    -> Reusing properties of another class
// 4. Polymorphism   -> Same method behaves differently

// ======================================================
// INHERITANCE
// ======================================================

// Definition:
// Inheritance allows one class to use properties and methods of another class

// Parent class = Base / Super class
// Child class  = Derived / Sub class

// ======================================================
// TYPES OF INHERITANCE
// ======================================================

// 1. Single Inheritance       -> One parent → one child
// 2. Multilevel Inheritance   -> Grandparent → Parent → Child
// 3. Multiple Inheritance     -> One child → multiple parents (Not in JS directly)
// 4. Hierarchical Inheritance -> One parent → multiple children
// 5. Hybrid Inheritance       -> Combination of multiple types

// ======================================================
// 1. SINGLE INHERITANCE
// ======================================================

class Animal { // Parent class
    constructor(name) {
        this.name = name;
    }

    // Parent class method
    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Dog extends Animal { // Child class
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Child class method
    bark() {
        console.log(`${this.name} is barking`);
    }

    getInfo() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

// Creating objects
console.log("=== SINGLE INHERITANCE ===");
let dog = new Dog("Buddy", "Golden Retriever");
dog.bark();      // Child method
dog.eat();       // Inherited from parent
dog.sleep();     // Inherited from parent
dog.getInfo();   // Child method

console.log("****************");

let animal = new Animal("Generic Animal");
animal.eat();
animal.sleep();
// animal.bark(); // ❌ Error - bark() is not available in Animal class

// ======================================================
// 2. MULTILEVEL INHERITANCE
// ======================================================
// Grandparent → Parent → Child

class LivingBeing { // Grandparent class
    constructor(name) {
        this.name = name;
    }

    breathe() {
        console.log(`${this.name} is breathing`);
    }
}

class Animal1 extends LivingBeing { // Parent class
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog1 extends Animal1 { // Child class
    constructor(name, type, breed) {
        super(name, type);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Puppy extends Dog1 { // Great-grandchild class
    constructor(name, type, breed, age) {
        super(name, type, breed);
        this.age = age;
    }

    play() {
        console.log(`${this.name} (${this.age} months old) is playing`);
    }

    // Method overriding with super keyword
    bark() {
        console.log(`${this.name} is barking softly (puppy bark)`);
        super.bark(); // Call parent's bark method
    }
}

console.log("\n=== MULTILEVEL INHERITANCE ===");
let puppy = new Puppy("Max", "Domestic", "Labrador", 3);
puppy.play();     // Own method
puppy.bark();     // Overridden method + parent method
puppy.eat();      // From Animal1
puppy.breathe();  // From LivingBeing

// ======================================================
// 3. HIERARCHICAL INHERITANCE
// ======================================================
// One parent → multiple children

class Vehicle { // Parent class
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} vehicle started`);
    }

    stop() {
        console.log(`${this.brand} vehicle stopped`);
    }
}

class Car extends Vehicle { // Child 1
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} car is being driven`);
    }

    honk() {
        console.log(`${this.brand} car is honking`);
    }
}

class Bike extends Vehicle { // Child 2
    constructor(brand, type) {
        super(brand);
        this.type = type;
    }

    ride() {
        console.log(`${this.brand} ${this.type} bike is being ridden`);
    }

    wheelie() {
        console.log(`${this.brand} bike is doing a wheelie`);
    }
}

class Truck extends Vehicle { // Child 3
    constructor(brand, capacity) {
        super(brand);
        this.capacity = capacity;
    }

    loadCargo() {
        console.log(`${this.brand} truck is loading ${this.capacity} tons of cargo`);
    }
}

console.log("\n=== HIERARCHICAL INHERITANCE ===");
const car = new Car("Toyota", "Camry");
car.start();    // Inherited
car.drive();    // Own method
car.honk();     // Own method
car.stop();     // Inherited

console.log("---");
const bike = new Bike("Honda", "Sport");
bike.start();   // Inherited
bike.ride();    // Own method
bike.wheelie(); // Own method
bike.stop();    // Inherited

console.log("---");
const truck = new Truck("Volvo", 20);
truck.start();      // Inherited
truck.loadCargo();  // Own method
truck.stop();       // Inherited

// ======================================================
// 4. HYBRID INHERITANCE
// ======================================================
// Combination of multiple inheritance types

class Employee { // Base class
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    work() {
        console.log(`${this.name} (ID: ${this.id}) is working`);
    }

    takeBreak() {
        console.log(`${this.name} is taking a break`);
    }
}

// Single inheritance from Employee
class Developer extends Employee {
    constructor(name, id, language) {
        super(name, id);
        this.language = language;
    }

    code() {
        console.log(`${this.name} is coding in ${this.language}`);
    }

    debug() {
        console.log(`${this.name} is debugging code`);
    }
}

// Multilevel inheritance: Employee -> Developer -> FullStackDeveloper
class FullStackDeveloper extends Developer {
    constructor(name, id, language, frameworks) {
        super(name, id, language);
        this.frameworks = frameworks;
    }

    developFrontend() {
        console.log(`${this.name} is developing frontend using ${this.frameworks.join(', ')}`);
    }

    developBackend() {
        console.log(`${this.name} is developing backend`);
    }
}

// Another branch from Employee (Hierarchical)
class Tester extends Employee {
    constructor(name, id, testingType) {
        super(name, id);
        this.testingType = testingType;
    }

    test() {
        console.log(`${this.name} is performing ${this.testingType} testing`);
    }

    reportBugs() {
        console.log(`${this.name} is reporting bugs`);
    }
}

// Multilevel from Tester
class AutomationTester extends Tester {
    constructor(name, id, testingType, tools) {
        super(name, id, testingType);
        this.tools = tools;
    }

    automateTests() {
        console.log(`${this.name} is automating tests using ${this.tools.join(', ')}`);
    }

    // Method overriding
    test() {
        console.log(`${this.name} is performing automated ${this.testingType} testing`);
        super.test(); // Call parent method
    }
}

console.log("\n=== HYBRID INHERITANCE ===");
const fullStackDev = new FullStackDeveloper("Alice", "EMP001", "JavaScript", ["React", "Node.js"]);
fullStackDev.work();              // From Employee
fullStackDev.code();              // From Developer
fullStackDev.developFrontend();   // Own method
fullStackDev.developBackend();    // Own method

console.log("---");
const automationTester = new AutomationTester("Bob", "EMP002", "API", ["Playwright", "Jest"]);
automationTester.work();          // From Employee
automationTester.test();          // Overridden method
automationTester.automateTests(); // Own method
automationTester.reportBugs();    // From Tester

// ======================================================
// MULTIPLE INHERITANCE (Simulation using Mixins)
// ======================================================
// JavaScript doesn't support multiple inheritance directly
// But we can simulate it using mixins

// Mixin 1
const CanFly = {
    fly() {
        console.log(`${this.name} is flying`);
    },

    land() {
        console.log(`${this.name} is landing`);
    }
};

// Mixin 2
const CanSwim = {
    swim() {
        console.log(`${this.name} is swimming`);
    },

    dive() {
        console.log(`${this.name} is diving`);
    }
};

// Base class
class Bird {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Apply mixins to create multiple inheritance effect
class Duck extends Bird {
    constructor(name) {
        super(name);
    }
}

// Add mixin methods to Duck prototype
Object.assign(Duck.prototype, CanFly, CanSwim);

console.log("\n=== MULTIPLE INHERITANCE (using Mixins) ===");
const duck = new Duck("Donald");
duck.eat();   // From Bird
duck.fly();   // From CanFly mixin
duck.swim();  // From CanSwim mixin
duck.dive();  // From CanSwim mixin
duck.land();  // From CanFly mixin

// ======================================================
// INHERITANCE BEST PRACTICES
// ======================================================

console.log("\n=== INHERITANCE BEST PRACTICES ===");

// 1. Use super() in constructor
// 2. Use super.methodName() to call parent methods
// 3. Method overriding for customization
// 4. Use instanceof to check inheritance

console.log("duck instanceof Duck:", duck instanceof Duck);           // true
console.log("duck instanceof Bird:", duck instanceof Bird);           // true
console.log("fullStackDev instanceof Employee:", fullStackDev instanceof Employee); // true
console.log("fullStackDev instanceof Developer:", fullStackDev instanceof Developer); // true

// ======================================================
// COMMON INHERITANCE PATTERNS
// ======================================================

// Pattern 1: Template Method Pattern
class DataProcessor {
    process() {
        this.readData();
        this.processData();
        this.saveData();
    }

    readData() {
        console.log("Reading data...");
    }

    // Abstract method (to be overridden)
    processData() {
        throw new Error("processData() must be implemented by subclass");
    }

    saveData() {
        console.log("Saving data...");
    }
}

class CSVProcessor extends DataProcessor {
    processData() {
        console.log("Processing CSV data...");
    }
}

class JSONProcessor extends DataProcessor {
    processData() {
        console.log("Processing JSON data...");
    }
}

console.log("\n=== TEMPLATE METHOD PATTERN ===");
const csvProcessor = new CSVProcessor();
csvProcessor.process();

console.log("---");
const jsonProcessor = new JSONProcessor();
jsonProcessor.process();