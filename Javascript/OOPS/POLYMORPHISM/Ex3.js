// Can polymorphism be achieved without classes?

// 👉 ✔ Yes, using objects and functions

let dog = {
  sound: () => console.log("Bark")
};

let cat = {
  sound: () => console.log("Meow")
};

dog.sound();
cat.sound();