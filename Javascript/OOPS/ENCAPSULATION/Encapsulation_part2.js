// ======================================================
// ENCAPSULATION USING GETTERS & SETTERS
// ======================================================

// Getters and Setters provide CONTROLLED access to private data
// - Getter → controls how data is READ
// - Setter → controls how data is WRITTEN
// - Looks like a property but works like a method internally


class User {

    // ================= PRIVATE FIELDS =================
    #password;
    #email;
    #loginAttempts;

    // ================= CONSTRUCTOR =================
    constructor(email) {
        this.#email = email;
        this.#loginAttempts = 0;
    }

    // ================= SET PASSWORD =================
    set password(pwd) {

        // Validation: minimum length
        if (pwd.length < 6) {
            console.log("Password must be at least 6 characters");
            return;
        }

        // Validation: must contain a number
        if (!/\d/.test(pwd)) {
            console.log("Password must contain at least one number");
            return;
        }

        this.#password = pwd;
        this.#loginAttempts = 0; // reset attempts on success
        console.log("Password set successfully");
    }

    // ================= GET PASSWORD =================
    // Never expose real password → security best practice
    get password() {
        return "******";
    }

    // ================= GET EMAIL =================
    get email() {
        return this.#email;
    }

    // ================= SET EMAIL =================
    set email(newEmail) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(newEmail)) {
            console.log("Invalid email format");
            return;
        }

        this.#email = newEmail;
        console.log("Email updated successfully");
    }

    // ================= VERIFY PASSWORD =================
    verifyPassword(inputPwd) {

        // Account lock logic
        if (this.#loginAttempts >= 3) {
            console.log("Account locked due to too many failed attempts");
            return false;
        }

        const isCorrect = this.#password === inputPwd;

        if (!isCorrect) {
            this.#loginAttempts++;
            console.log(`Incorrect password. Attempts left: ${3 - this.#loginAttempts}`);
        } else {
            this.#loginAttempts = 0;
            console.log("Password verified successfully");
        }

        return isCorrect;
    }

    // ================= ACCOUNT STATUS =================
    getAccountStatus() {
        return {
            email: this.#email,
            passwordSet: !!this.#password,  // true/false
            loginAttempts: this.#loginAttempts,
            accountLocked: this.#loginAttempts >= 3
        };
    }
}


// ======================================================
// DEMO
// ======================================================

console.log("=== User Account Management Demo ===\n");

const user1 = new User("john@example.com");

// 1️⃣ Setting password
console.log("1. Setting password:");
user1.password = "123";        // too short
user1.password = "password";   // no number
user1.password = "pass123";    // valid

// 2️⃣ Getting password (masked)
console.log("\n2. Getting password:");
console.log(user1.password);   // ******

// 3️⃣ Getting email
console.log("\n3. Getting email:");
console.log(user1.email);

// 4️⃣ Updating email
console.log("\n4. Updating email:");
user1.email = "invalid-email";       // invalid
user1.email = "john.doe@gmail.com"; // valid

// 5️⃣ Password verification
console.log("\n5. Password verification:");
console.log(user1.verifyPassword("wrong"));   // false
console.log(user1.verifyPassword("pass123")); // true

// 6️⃣ Account status
console.log("\n6. Account status:");
console.log(user1.getAccountStatus());


// ======================================================
// IMPORTANT CONCEPT
// ======================================================

// ❌ Not allowed (private field)
// console.log(user1.#password);

// ✔ Allowed (controlled access)
console.log(user1.password);