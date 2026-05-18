//Parent class
class Sagar{

  constructor(name)
  {
     this.name= name;
  }

  Guroli()
  {
    console.log(`${this.name} is very intelligent`);
  }

}

//child class
class Gauri extends Sagar{

  constructor(name, age)
  {
     super(name);  //calling parent constructor
     this.age= age;
  }

  showDetails() 
  {
    console.log(`${this.name} is ${this.age} years old`);
  }

  Loni()
  {
    console.log("This is method loni");
  }
}

let p1= new Gauri("Neel", 8);
p1.showDetails();
p1.Loni();
p1.Guroli();