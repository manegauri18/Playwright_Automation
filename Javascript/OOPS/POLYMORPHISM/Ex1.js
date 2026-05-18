class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark 🐶");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow 🐱");
  }
}

let obj = [new Animal(), new Dog(), new Cat()];

obj.forEach(animal =>{animal.makeSound()});