import { test } from "@playwright/test";

import path from "path";

import fs from "fs";

// =====================================================
// 🔹 Import JSON File Directly
// =====================================================
// userData.json contains test data
//
// Example:
//
// [
//   {
//      "username": "Admin",
//      "password": "admin123"
//   },
//   {
//      "username": "Admin1",
//      "password": "admin1234"
//   }
// ]

import userData from "../TestData/userData.json";


// =====================================================
// 🔹 Data-Driven Testing using JSON
// =====================================================
// Loop through all test data from JSON file

for (let i = 0; i < userData.length; i++) {

    // =====================================================
    // 🔹 Dynamic Test Creation
    // =====================================================

    test(`Print test data - ${i + 1}`, async () => {

        // Print username
        console.log("Username :", userData[i].username);

        // Print password
        console.log("Password :", userData[i].password);

        console.log("--------------------------------");
    });
}


// =====================================================
// 🔹 Alternative Approach using fs Module
// =====================================================
// fs = File System module
// Used to read external files manually

// path.join()
// → Creates platform-independent file path

const filePath = path.join(
    process.cwd(),
    "TestData",
    "userData.json"
);


// =====================================================
// 🔹 Read JSON File
// =====================================================

// readFileSync()
// → Reads file synchronously

const data = fs.readFileSync(filePath, "utf-8");


// =====================================================
// 🔹 Convert JSON String to JavaScript Object
// =====================================================

// JSON.parse()
// → Converts JSON string into JavaScript object

const jsonData = JSON.parse(data);


// =====================================================
// 🔹 Print Data from JSON
// =====================================================

console.log("========== JSON DATA ==========");

for (let i = 0; i < jsonData.length; i++) {

    console.log("Username :", jsonData[i].username);

    console.log("Password :", jsonData[i].password);

    console.log("--------------------------------");
}


// =====================================================
// 🔥 IMPORTANT THEORY POINTS
// =====================================================

// ✅ JSON
// → JavaScript Object Notation

// ✅ Used for:
// ✔ Test data
// ✔ API payloads
// ✔ Configurations
// ✔ Environment data

// ✅ Data-Driven Testing
// → Running same test with multiple datasets

// ✅ fs Module
// → Node.js built-in File System module

// ✅ readFileSync()
// → Reads file synchronously

// ✅ JSON.parse()
// → Converts JSON string into JavaScript object

// ✅ utf-8
// → Converts file data into readable text

// ✅ path.join()
// → Creates OS-independent file path


// =====================================================
// 🔹 Two Ways to Read JSON in Playwright
// =====================================================

// 1️⃣ Direct Import
// import userData from "../TestData/userData.json";

// ✔ Simple
// ✔ Recommended for static data


// 2️⃣ Using fs Module
// fs.readFileSync()

// ✔ Dynamic reading
// ✔ Useful for runtime operations


// =====================================================
// 🔥 Best Practices
// =====================================================

// ✅ Keep test data separate from scripts

// ✅ Avoid hardcoded credentials

// ✅ Use path.join() instead of absolute paths

// ✅ Use meaningful JSON structure

// ✅ Use loops for data-driven execution


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Data-driven testing allows execution of the same
// test using multiple datasets.”

// “fs module is used to read external files in Node.js.”

// “JSON.parse() converts JSON string into JavaScript object.”

// “utf-8 encoding converts file data into readable text.”