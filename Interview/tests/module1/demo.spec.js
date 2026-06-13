import { test, expect } from "@playwright/test"

// Page Screenshot
test("@sanity TC01", async ({ page }) => {

   await page.goto('/');

 

   console.log("sanity test executed from module1")
})

test("@smoke TC02", async ({}) => {

   console.log("smoke test executed from module1")
})

test("@regression TC03", async ({}) => {

   console.log("regression test executed from module1")
})