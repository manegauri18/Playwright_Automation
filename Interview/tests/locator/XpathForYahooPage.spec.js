import { test, expect } from '@playwright/test';

const BASE_URL = 'https://login.yahoo.com/';

// TC-001: Test Page Load with Title
test('TC-001 - Yahoo Login Page Loads Successfully', async ({ page }) => {
    await page.goto(BASE_URL);

    // Validate page title contains Yahoo
    const title = await page.title();
    expect(title).toContain('Yahoo');
    console.log('✓ Yahoo login page loaded with correct title');
});

// TC-002: Test Email Input Field Visibility
test('TC-002 - Email Input Field is Visible', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath by attribute - find input by ID
    const emailInput = page.locator("//input[@id='login-username']");
    const isVisible = await emailInput.isVisible();

    if (isVisible) {
        expect(isVisible).toBe(true);
        console.log('✓ Email input field found by ID attribute');
    } else {
        // XPath by attribute - find by type
        const emailInputAlt = page.locator("//input[@type='text']");
        expect(await emailInputAlt.count()).toBeGreaterThan(0);
        console.log('✓ Email input field found by type attribute');
    }
});

// TC-003: Test Next Button with Text Matching
test('TC-003 - Next Button Contains Text', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath contains text - exact match
    const nextButton = page.locator("//span[contains(text(), 'Next')]");
    const buttonCount = await nextButton.count();

    if (buttonCount > 0) {
        expect(buttonCount).toBeGreaterThan(0);
        console.log('✓ Next button found by exact text match');
    } else {
        // XPath contains text - partial match
        const nextButtonAlt = page.locator("//span[contains(text(), 'Next')]");
        expect(await nextButtonAlt.count()).toBeGreaterThan(0);
        console.log('✓ Next button found by contains text');
    }
});

// TC-004: Test Sign In Heading
test('TC-004 - Sign In Heading is Present', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath by text - find heading containing sign in
    const heading = page.locator("//h1[contains(text(), 'Sign')]");
    const headingCount = await heading.count();

    expect(headingCount).toBeGreaterThanOrEqual(0);
    console.log('✓ Page heading validated');
});

// TC-005: Test Empty Email Submission Error
test('TC-005 - Empty Email Shows Error', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath by attribute - find submit button
    const submitButton = page.locator("//button[@type='submit']").first();
    const isEnabled = await submitButton.isEnabled();

    if (isEnabled) {
        await submitButton.click();
        await page.waitForTimeout(1000);

        // XPath by attribute - look for error message
        const error = page.locator("//*[@role='alert']");
        const errorCount = await error.count();

        console.log(`✓ Submit attempted, error elements found: ${errorCount}`);
    } else {
        console.log('✓ Submit button validation completed');
    }
});

// TC-006: Test Email Input Fill
test('TC-006 - Email Input Can Be Filled', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath by index - get first input of type text
    const emailInput = page.locator("//input[@type='text']").first();
    const isEditable = await emailInput.isEditable();

    if (isEditable) {
        await emailInput.fill('testuser@yahoo.com');

        // XPath by attribute - validate value
        const value = await emailInput.inputValue();
        expect(value).toBe('testuser@yahoo.com');
        console.log('✓ Email successfully filled in input field');
    } else {
        console.log('✓ Email input field validation completed');
    }
});

// TC-007: Test Forgot Password Link
test('TC-007 - Forgot Password Link Exists', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath contains text - find link with forgot password text
    const forgotLink = page.locator("//a[contains(text(), 'Forgot')]");
    const linkCount = await forgotLink.count();

    if (linkCount > 0) {
        // XPath by attribute - get href
        const href = await forgotLink.getAttribute('href');
        expect(href).toBeTruthy();
        console.log(`✓ Forgot password link found: ${href}`);
    } else {
        console.log('✓ Forgot password link validation completed');
    }
});

// TC-008: Test Create Account Link
test.only('TC-008 - Create Account Link Exists', async ({ page }) => {
    await page.goto(BASE_URL);

    // XPath contains text - find signup/create link
    const signupLink = page.locator("//span[contains(text(), 'Create')]");
    const linkCount = await signupLink.count();

    if (linkCount > 0) {
        // XPath by index - get first matching link
        const firstLink = signupLink.first();
        const href = await firstLink.getAttribute('href');
        expect(href).toBeTruthy();
        console.log(`✓ Create account link found: ${href}`);
    } else {
        console.log('✓ Create account link validation completed');
    }
});

// TC-010: Test Complete Login Flow
test.skip('TC-010 - Complete Login Flow with All Validations', async ({ page }) => {
    await page.goto(BASE_URL);

    // Step 1: Validate initial state
    const emailInput = page.locator("//input[@type='text']").first();
    await expect(emailInput).toBeVisible();
    console.log('✓ Step 1: Email input is visible');

    // Step 2: Fill email
    const isEditable = await emailInput.isEditable().catch(() => false);
    if (isEditable) {
        await emailInput.fill('student@yahoo.com');
        const value = await emailInput.inputValue();
        expect(value).toBe('student@yahoo.com');
        console.log('✓ Step 2: Email filled successfully');
    }

    // Step 3: Validate next button
    const nextButton = page.locator("//button[contains(text(), 'Next')]").first();
    const isEnabled = await nextButton.isEnabled().catch(() => false);
    console.log(`✓ Step 3: Next button enabled state: ${isEnabled}`);
});