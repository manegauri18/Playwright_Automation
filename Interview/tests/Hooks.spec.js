import { test, expect } from "@playwright/test";

test.beforeAll('Before all hook', async () => {

    console.log('Runs once before all tests');
})

test.beforeEach('Before each hook', async ({ page }) => {

    console.log('Runs before every test');
});

test.afterEach('After each hook', async ({ page }) => {

    console.log('Runs after every test');
});

test.afterAll('After all hook', async () => {

    console.log('Runs once after all tests');
});

test('My Test', async ({ page }) => {

    console.log('Executing Test');
});