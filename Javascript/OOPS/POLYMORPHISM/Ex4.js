//👉 Rest parameters allow a function to accept multiple arguments as an array.
/*Rest parameter must be last parameter
Only one rest parameter allowed
It returns an array
*/

function sum(...numbers)
{
 let total=0;

 for (let num of numbers)
  {

  total= total+num;
  }

  return total;
}

console.log(sum(1,2,3)); //6

console.log(sum(10,2,3, 10, 20)); //45

//👉 ...numbers collects all arguments into an array.