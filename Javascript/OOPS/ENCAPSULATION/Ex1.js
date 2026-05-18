class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();

acc.deposit(1000);
console.log(acc.getBalance()); // 1000

// console.log(acc.#balance); ❌ Error (cannot access directly)