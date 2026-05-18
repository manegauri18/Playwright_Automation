// ================= THEORY =================

// Polymorphism → One name, many forms
// Same method behaves differently based on object

// Types:
// 1. Compile-time Polymorphism (Method Overloading) → Not directly supported in JavaScript
// 2. Runtime Polymorphism (Method Overriding) → Supported using inheritance


// ======================================================
// 1️⃣ COMPILE-TIME POLYMORPHISM (SIMULATION)
// ======================================================

class Calculator {

    // Method behaves differently based on number of arguments
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let calc = new Calculator();
console.log(calc.add(10, 20, 30)); // 60
console.log(calc.add(10, 20));     // 30


// ================= USING REST PARAMETERS =================

class FlexibleCalculator {

    // ...values → collects all arguments into an array
    add(...values) {
        return values.reduce((sum, val) => sum + val, 0);
    }
}

let flex = new FlexibleCalculator();
console.log(flex.add(1, 2));                // 3
console.log(flex.add(1, 2, 3, 4, 5, 6));   // 21


// ======================================================
// 2️⃣ RUNTIME POLYMORPHISM (METHOD OVERRIDING)
// ======================================================

class Animal {

    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    // Overriding parent method
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {

    speak() {
        console.log("Cat meows");
        super.speak(); // calling parent method
    }
}

// Different objects → same method → different behavior
const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(a => a.speak());


// ======================================================
// REAL-TIME EXAMPLE (PAYMENT SYSTEM)
// ======================================================

class Payment {

    pay() {
        console.log("Processing generic payment...");
    }
}

class CreditCard extends Payment {

    pay() {
        console.log("Processing credit card payment...");
    }
}

class UPI extends Payment {

    pay() {
        console.log("Processing UPI payment...");
    }
}

class Cash extends Payment {

    pay() {
        console.log("Payment done using cash...");
    }
}

// Same method → different behavior
const payments = [new CreditCard(), new UPI(), new Cash()];
payments.forEach(p => p.pay());