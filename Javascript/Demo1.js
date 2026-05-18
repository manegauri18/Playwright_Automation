
const set = new Set();

set.add("Pune");
set.add(50);
set.add(true);

console.log("Initial set is:", set);


// set.add("Pune");
// console.log("Updated set is:", set);


console.log("size of set is:", set.size);

set.add("Mumbai");
console.log("Updated set is:", set);

set.delete("Pune");
console.log("Updated set1 is:", set);

console.log("set has city mumbai:", set.has("Mumbai"));

const cities= new Set(["Kharghar", "Ambegaon", "Guroli"]);
console.log("cities", cities);

for (let city of cities){

    console.log("city is: ", city)
}


let orders = ["ODR1", "ODR5", "ODR1", "ODR3"];

const uniqueValues = new Set(orders);

console.log("uniques values are: ", uniqueValues);