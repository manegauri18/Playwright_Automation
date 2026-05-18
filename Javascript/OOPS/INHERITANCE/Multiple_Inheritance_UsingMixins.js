/*
Key Points (Important for Interview)
Mixin is not a class, it’s just an object with methods
Used to reuse code
Helps simulate multiple inheritance
Mixin is a way to add common functionality to multiple classes without using inheritance.

Added using:
Object.assign(Class.prototype, mixinObject);

Object.assign()👉 A built-in JavaScript method used to copy properties from one object to another
Object.assign(target, source)

Class.prototype👉 This is where all shared methods of a class are stored.
*/

//Mixin Object

let CanRun= {

    run()
    {
        console.log("running");
    }
}

//class
class Person{

    walk()
    {
        console.log("walking");
    }
}


Object.assign(Person.prototype, CanRun);

let p1= new Person();
p1.walk();
p1.run();


//Here, CanRun is a mixin object. Using Object.assign, I added its method to Person.prototype, 
// so all instances of Person can use run(). This is how we simulate multiple inheritance in JavaScript.”