//Hierarchical inheritance = One parent → multiple children

class Employee {
  work() 
  {
    console.log("Employee works");
  }
}

class Developer extends Employee {
  code() 
  {
    console.log("Developer writes code");
  }
}

class Tester extends Employee {
  test()
   {
    console.log("Tester tests software");
  }
}


//create object of child classes
let dev = new Developer();
let tester = new Tester();

dev.work();
dev.code();

tester.work();
tester.test();