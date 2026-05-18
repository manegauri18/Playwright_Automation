// =====================================================
// 📘 SET in JavaScript
// =====================================================
// 👉 Set = Collection of UNIQUE values
// 👉 Duplicate values are NOT allowed
// 👉 Insertion order is preserved
// =====================================================

// 🔹 Step 1: Create empty Set
let mySet = new Set();

// 🔹 Step 2: Add values
mySet.add(100);
mySet.add("Ketan");
mySet.add(true);

console.log("My Set:", mySet);

// 🔹 Step 3: Adding duplicate value (ignored)
mySet.add(100); // duplicate
console.log("After adding duplicate (100):", mySet);

// =====================================================
// 🔍 Step 4: Check presence of value
// =====================================================
console.log("Has 'Ketan'?", mySet.has("Ketan")); // true
console.log("Has 'Demo'?", mySet.has("Demo"));   // false

// =====================================================
// 🔹 Step 5: Initialize Set with values
// =====================================================
let cities = new Set(["Pune", "Mumbai", "Abd"]);
console.log("Initial Cities:", cities);

// 🔹 Step 6: Add new value
cities.add("Hyd");
console.log("After adding Hyd:", cities);

// =====================================================
// 🔹 Step 7: Delete value
// =====================================================
cities.delete("Pune");  // correct value
console.log("After deleting Pune:", cities);

// Trying to delete non-existing value
cities.delete("Pune1"); // no error, ignored
console.log("After deleting Pune1 (not present):", cities);

// =====================================================
// 🔹 Step 8: Iterate Set
// =====================================================
console.log("Iterating cities:");

for (let city of cities) {
    console.log("City:", city);
}

// =====================================================
// 🔹 Step 9: Clear Set (Remove all values)
// =====================================================
// cities.clear();
// console.log("After clear:", cities);


// =====================================================
// 📊 Difference between Map and Set (Interview)
// =====================================================

// 🔹 Map:
// - Stores key-value pairs
// - Example methods:
//   map.set(key, value)
//   map.get(key)
//   map.has(key)
//   map.delete(key)
//   map.clear()

// 🔹 Set:
// - Stores only values (no key)
// - Values must be unique
// - Example methods:
//   set.add(value)
//   set.has(value)
//   set.delete(value)
//   set.clear()

// =====================================================
// 🎯 Interview Points
// =====================================================
// ✔ Set does NOT allow duplicates
// ✔ Maintains insertion order
// ✔ Used for:
//    - Removing duplicates
//    - Validation (unique data)
//    - Comparing UI vs API data

// =====================================================
// 🚀 Example (Real Automation Use Case)
// =====================================================

let orders = ["ORD1", "ORD2", "ORD1", "ORD3"];

// Remove duplicates
let uniqueOrders = new Set(orders);

console.log("Unique Orders:", uniqueOrders);