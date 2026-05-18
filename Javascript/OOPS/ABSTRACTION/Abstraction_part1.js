// ================= THEORY =================

// Abstraction → Hiding complex internal logic and showing only essential features
// Example: Car.startCar() → internally checks fuel, engine, sensors (hidden)

// Encapsulation → Wrapping data + methods together and controlling access
// Example: private variables (#fuel, #engine) cannot be accessed directly


class Car {

    // ================= PRIVATE VARIABLES =================
    // These are hidden from outside (Encapsulation)
    #fuel = 10;              // Initial fuel (fixed from -10 to valid value)
    #engine = "off";
    #isLocked = true;       // Fixed spelling

    // ================= PRIVATE METHOD =================
    // Internal helper method (hidden from user)
    #checkFuel() {

        if (this.#fuel <= 0) {
            console.log("No fuel");
            return false;
        }
        return true;
    }

    // ================= PUBLIC METHOD =================
    // User can call this → Abstraction (hides internal checks)
    startCar() {

        if (this.#isLocked) {
            console.log("Car is locked");
            return;
        }

        // Fixed syntax issue here
        if (!this.#checkFuel()) {
            return;
        }

        this.#engine = "on";
        console.log("Car started");
    }

    // ================= DRIVE METHOD =================
    drive() {

        if (this.#engine !== "on") {
            console.log("Start the car first!");
            return;
        }

        this.#fuel -= 10; // Fuel consumption
        console.log("Car is moving");
        console.log("Fuel left:", this.#fuel);
    }

    // ================= UNLOCK METHOD =================
    unlockCar() {
        this.#isLocked = false;
        console.log("Car Unlocked");
    }
}


// ================= EXECUTION =================
const car1 = new Car();

car1.startCar();     // Car is locked
car1.unlockCar();    // Unlock car
car1.startCar();     // Car started
car1.drive();        // Car moves