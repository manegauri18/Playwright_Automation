class Person {
  walk() {
    console.log("Person walks");
  }
}

class Employee extends Person {
  work() {
    console.log("Employee works");
  }
}

class Manager extends Employee {
  manage() {
    console.log("Manager manages team");
  }
}

let m = new Manager();

m.walk();
m.work();
m.manage();