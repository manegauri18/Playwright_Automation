// ================== Parent Class ==================
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} logged in`);
  }

  logout() {
    console.log(`${this.username} logged out`);
  }

  getDetails() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }
}

// ================== Child Class ==================
class Admin extends User {
  constructor(username, email, role) {
    super(username, email); // call parent constructor
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${this.username} deleted user ${user.username}`);
  }

  manageSystem() {
    console.log(`${this.username} is managing the system`);
  }

  // Method Overriding
  login() {
    super.login(); // calling parent method (optional but good practice)
    console.log(`Admin ${this.username} logged in with special privileges`);
  }
}

// ================== Usage ==================
let user1 = new User("Gauri", "gauri@test.com");
let admin1 = new Admin("Sagar", "sagar@test.com", "SuperAdmin");

// Parent methods
user1.login();
user1.getDetails();

// Child methods
admin1.login();          // overridden + parent method
admin1.getDetails();     // inherited
admin1.manageSystem();   // own method
admin1.deleteUser(user1);
admin1.logout();         // inherited