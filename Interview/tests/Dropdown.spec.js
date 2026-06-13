import { test, expect } from "@playwright/test";

// ====================================================
// 📌 Dropdown vs Listbox
// Dropdown  -> <select> tag (use selectOption())
// Listbox   -> <div>, <ul>, <li> (use click())
// Data Load -> Static vs Dynamic
// ====================================================

test("Handle Dropdown with Validations", async ({ page }) => {

    console.log("🚀 Test Started");

    // 🌐 Step 1: Open application
    await page.goto('https://demo.automationtesting.in/Register.html');
    console.log("Opened application");

    // 📌 Step 2: Locate dropdown elements
    const yearDropDown = page.locator('#yearbox');
    const monthDropDown = page.locator('//select[@placeholder="Month"]');
    const dayDropDown = page.locator('#daybox');

    // ====================================================
    // ✅ Step 3: Validate dropdown visibility
    // ====================================================
    console.log("🔍 Validating dropdown visibility");

    await expect(yearDropDown).toBeVisible();
    await expect(monthDropDown).toBeVisible();
    await expect(dayDropDown).toBeVisible();

    console.log("✅ All dropdowns are visible");

    // ====================================================
    // ✅ Step 4: Fetch and print all dropdown options
    // ====================================================
    const yearOptions = await yearDropDown.locator('option').allTextContents();
    console.log("📅 Available Years:", yearOptions);
    console.log("📊 Total Years:", yearOptions.length);

    const monthOptions = await monthDropDown.locator('option').allTextContents();
    console.log("📆 Available Months:", monthOptions);
    console.log("📊 Total Months:", monthOptions.length);

    // ====================================================
    // ✅ Step 5: Select values
    // ====================================================
    console.log("🎯 Selecting Date: 2012 / April / 23");

    await yearDropDown.selectOption('2012');              // by value
    await monthDropDown.selectOption({ label: 'April' }); // by visible text
    await dayDropDown.selectOption('23');

    console.log("✅ Date selected successfully");

    // ====================================================
    // ✅ Step 6: Get selected values
    // ====================================================
    const selectedYear = await yearDropDown.inputValue();
    const selectedMonth = await monthDropDown.inputValue();
    const selectedDay = await dayDropDown.inputValue();

    console.log("📌 Selected Year:", selectedYear);
    console.log("📌 Selected Month:", selectedMonth);
    console.log("📌 Selected Day:", selectedDay);

    // ====================================================
    // ✅ Step 7: Conditional validation (Manual check)
    // ====================================================
    if (selectedYear === "2012") {
        console.log("✅ Selected year is correct");
    } else {
        console.log("❌ Selected year is incorrect");
    }

    // ====================================================
    // ✅ Step 8: Assertion validation (Recommended)
    // ====================================================
    await expect(yearDropDown).toHaveValue('2012');
    await expect(monthDropDown).toHaveValue('April');
    await expect(dayDropDown).toHaveValue('23');

    console.log("✅ Selected values validated using assertions");

    // ====================================================
    // ✅ Step 9: Data-driven approach (Dynamic input)
    // ====================================================
    const dateString = "2010/May/23";

    // Split string into values
    const [year, month, day] = dateString.split('/');

    console.log("🔁 New Date from string:");
    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);

    // ====================================================
    // ✅ Step 10: Reusable function for dropdown selection
    // ====================================================
    async function selectDropDownByText(locator, value) {
        console.log(`➡️ Selecting ${value}`);
        await locator.selectOption({ label: value });
    }

    // Use reusable function
    await selectDropDownByText(yearDropDown, year);
    await selectDropDownByText(monthDropDown, month);
    await selectDropDownByText(dayDropDown, day);

    // ====================================================
    // ⚠️ Step 11: Avoid hard wait (only for demo)
    // ====================================================
    await page.waitForTimeout(5000);

    console.log("🎉 Test Completed Successfully");
});