// ================= THEORY =================

// Encapsulation means:
// Wrapping data (variables) and methods (functions) together
// and restricting direct access to data.

// Data Hiding + Controlled Access

// ---------------- REAL-LIFE EXAMPLE ----------------
// ATM / Bank System
// - Balance is hidden
// - User cannot modify balance directly
// - Only allowed via deposit(), withdraw(), getBalance()


class BankAccount {

    // ================= PRIVATE VARIABLE =================
    #balance; // cannot be accessed directly outside

    // ================= CONSTRUCTOR =================
    // Constructors are always publicly accessible in JavaScript
    constructor(name, balance) {
        this.name = name;

        // Validation during object creation
        if (balance < 0) {
            console.log("Initial balance cannot be negative. Setting to 0.");
            this.#balance = 0;
        } else {
            this.#balance = balance;
        }
    }

    // ================= DEPOSIT METHOD =================
    deposit(amount) {

        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return; // IMPORTANT FIX
        }

        this.#balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    // ================= WITHDRAW METHOD =================
    withdraw(amount) {

        if (amount <= 0) {
            console.log("Withdraw amount must be greater than 0");
            return; // IMPORTANT FIX
        }

        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }

    // ================= GET BALANCE =================
    getBalance() {
        return this.#balance;
    }

    // ================= TRANSFER METHOD =================
    transfer(amount, targetAccount) {

        if (amount <= 0) {
            console.log("Transfer amount must be greater than 0");
            return;
        }

        if (amount <= this.#balance) {
            this.#balance -= amount;
            targetAccount.deposit(amount);
            console.log(`Transferred: ${amount} to ${targetAccount.name}`);
        } else {
            console.log("Insufficient balance for transfer");
        }
    }
}


// ================= EXECUTION =================
const acc1 = new BankAccount("Akash", 5000);
const acc2 = new BankAccount("Rahul", 3000);

// Deposit
acc1.deposit(2000);
console.log(acc1.getBalance()); // 7000

// Withdraw
acc1.withdraw(1000);
console.log(acc1.getBalance()); // 6000

// Transfer
acc1.transfer(2000, acc2);
console.log(acc1.getBalance()); // 4000
console.log(acc2.getBalance()); // 5000

// Invalid operations
acc1.deposit(-500);     // Error handled
acc1.withdraw(10000);  // Insufficient balance
acc1.transfer(-200, acc2);


// ================= IMPORTANT POINT =================

// ❌ Not allowed:
// console.log(acc1.#balance);

// ✔ Correct:
// Access only via methods → getBalance(), deposit(), withdraw()