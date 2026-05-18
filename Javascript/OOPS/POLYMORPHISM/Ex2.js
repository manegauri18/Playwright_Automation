//👉 Same function add() works differently based on input type.
//How does dynamic typing support polymorphism?

function add(a, b) 
{
   return a + b;
}

console.log(add(2, 3));        // 5 (number addition)
console.log(add("Hello ", "JS")); // Hello JS (string concatenation)

