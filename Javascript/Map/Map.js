//Map -  A JavaScript Map is an object that can store collections of key-value pairs
//keys can be any data type (strings, numbers, objects, function).
//Maps are optimized for frequent additions and removals of key-value pairs
//The original order is preserved during iteration.
// let Demo ={


// }

const map = new Map();

//Add key value pairs using set
//set - Adds a new element with a specified key and value to the Map. If an element with the same key already exists
// , the element will be updated.
map.set("name", "Rohit");
map.set("age", 30);
map.set("Course", "Playwright");

console.log("Initial map :", map)
map.set("age", 40);
console.log("After updating age :", map)

//access values using get
console.log("name :", map.get("name")); //
console.log("Age :", map.get("age")); //
console.log("Course :", map.get("Course")); //

//check if a key exists using has
console.log("has name ", map.has("name")) //true
console.log("has name1 ", map.has("name1")) //false

//size (numenr of entries) = The size property returns the number of elements in a map.
console.log("Map Size:", map.size);

//get() = to get the value of respective key

console.log("age value is: ", map.get("age"));

for (let key of map.keys()) {
    console.log("key :", key);
}

for (let value of map.values()) {
    console.log("Value :", value);
}

for (let [key, value] of map.entries()) {
    console.log(`${key} = ${value}`);
}



//Map and object
//collection key value pair , collection of key vlue pair

//Object - key - String / Any data type  - 
//object - Not Guranteed  .Maintans insertion order
//object - no direct propert - map.size

//const obj = {}.    const map = new Map();
//obj.name = "Rahul"


//map.set("name", "Rahul")

const myMap = new Map([['name', "Virat"], ["role", "QA Eng"]]);
console.log(myMap)
console.log(typeof myMap)

//Map us bultin class in javascript
//Creating instance/object of this class