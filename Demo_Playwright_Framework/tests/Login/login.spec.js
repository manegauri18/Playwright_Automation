// ============================================================
// Login Tests - Enterprise E2E Automation Framework
// ============================================================
//
// Test Scenarios: Valid Login, Invalid Login, Blank credentials
// Uses: Data-driven approach with JSON test data
// Tags: @smoke, @regression, @login
//
// ============================================================

const { test, expect } = require('../../fixtures/testFixture');
const { setupHooks } = require('../../hooks/hooks');
const loginData = require('../../testData/loginData.json');
const Logger = require('../../utils/Logger');

setupHooks(test);

test('TC001 - Valid Login with correct credentials @smoke @login', async ({ loginPage }) => {

    Logger.step(1, 'Login with valid credentials');
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    Logger.step(2, 'Verify user is logged in');
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
    Logger.step(3, 'Verify welcome text contains username');
    const welcomeText = await loginPage.getWelcomeText();
    expect(welcomeText).toContain('Welcome');
});

test('TC002 - Invalid Login with wrong credentials @regression @login', async ({ loginPage, page }) => {
    Logger.step(1, 'Login with invalid credentials');

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);

    Logger.step(2, 'Verify user is NOT logged in');

    await loginPage.wait(2000);

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeFalsy();
});

test('TC003 - Login with blank username @regression @login', async ({ loginPage, page }) => {
    Logger.step(1, 'Login with blank username');

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await loginPage.login(loginData.blankUsername.username, loginData.blankUsername.password);

    Logger.step(2, 'Verify user is NOT logged in');

    await loginPage.wait(2000);

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeFalsy();
});

test('TC004 - Login with blank password @regression @login', async ({ loginPage, page }) => {
    Logger.step(1, 'Login with blank password');

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await loginPage.login(loginData.blankPassword.username, loginData.blankPassword.password);

    Logger.step(2, 'Verify user is NOT logged in');

    await loginPage.wait(2000);

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeFalsy();
});

test('TC005 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});

test('TC006 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});

test('TC007 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});
test('TC0011 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});
test('TC009 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});

test('TC0010 - Logout after successful login @smoke @login', async ({ loginPage }) => {
    Logger.step(1, 'Login with valid credentials');

    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    Logger.step(2, 'Verify user is logged in');

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(3, 'Perform logout');

    await loginPage.logout();

    Logger.step(4, 'Verify Login nav is visible after logout');

    await loginPage.wait(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();
});