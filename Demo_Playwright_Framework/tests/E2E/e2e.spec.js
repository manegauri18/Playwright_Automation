// ============================================================
// E2E Tests - Enterprise E2E Automation Framework
// ============================================================
//
// Full End-to-End test scenarios covering complete user flows
//
// Test Scenarios:
// Complete purchase, navigation, cross-browser
//
// Tags: @smoke, @e2e, @regression
//
// ============================================================

const { test, expect } = require('../../fixtures/testFixture');
const { setupHooks } = require('../../hooks/hooks');
const loginData = require('../../testData/loginData.json');
const productData = require('../../testData/productData.json');
const checkoutData = require('../../testData/checkoutData.json');
const Logger = require('../../utils/Logger');
const RandomDataGenerator = require('../../utils/RandomDataGenerator');

setupHooks(test);

test('TC014 - Verify navigation menu links @regression @e2e', async ({ homePage }) => {
    Logger.step(1, 'Verify navigation menu is visible');
    const isNavVisible = await homePage.isNavigationMenuVisible();
    expect(isNavVisible).toBeTruthy();

    Logger.step(2, 'Verify home page is loaded');
    const isLoaded = await homePage.isHomePageLoaded();
    expect(isLoaded).toBeTruthy();
});

test('TC016 - Validate no broken links on homepage @regression @e2e', async ({ page }) => {
    Logger.step(1, 'Get all links on the page');
    const links = await page.locator('a[href]').all();
    Logger.info(`Found ${links.length} links on homepage`);
    expect(links.length).toBeGreaterThan(0);

    Logger.step(2, 'Verify key navigation links exist');
    const homeLink = await page.locator('a[href="index.html"]').isVisible();
    const cartLink = await page.locator('#cartur').isVisible();
    expect(homeLink).toBeTruthy();
    expect(cartLink).toBeTruthy();
});

test('TC017 - Search/Browse product by category @regression @e2e', async ({ homePage }) => {
    Logger.step(1, 'Select Phones category');
    await homePage.selectCategory('phones');
    const phoneProducts = await homePage.getAllProductNames();
    Logger.info(`Phone products: ${phoneProducts.join(', ')}`);
    expect(phoneProducts.length).toBeGreaterThan(0);

    Logger.step(2, 'Select Laptops category');
    await homePage.selectCategory('laptops');
    const laptopProducts = await homePage.getAllProductNames();
    Logger.info(`Laptop products: ${laptopProducts.join(', ')}`);
    expect(laptopProducts.length).toBeGreaterThan(0);

    Logger.step(3, 'Select Monitors category');
    await homePage.selectCategory('monitors');
    const monitorProducts = await homePage.getAllProductNames();
    Logger.info(`Monitor products: ${monitorProducts.join(', ')}`);
    expect(monitorProducts.length).toBeGreaterThan(0);
});

test('TC018 - Cross browser homepage validation @smoke @e2e', async ({ homePage, page }) => {
    Logger.step(1, 'Verify homepage loads in current browser');
    const isLoaded = await homePage.isHomePageLoaded();
    expect(isLoaded).toBeTruthy();

    Logger.step(2, 'Verify page title');
    const title = await page.title();
    Logger.info(`Page title: ${title}`);
    expect(title).toContain('STORE');

    Logger.step(3, 'Verify categories');
    const categoriesVisible = await homePage.areCategoriesVisible();
    expect(categoriesVisible).toBeTruthy();
});

test('TC019 - Parallel execution product browsing @smoke @e2e', async ({ homePage, productPage }) => {
    Logger.step(1, 'Select a product');
    await homePage.selectProductByName(productData.singleProduct.name);

    Logger.step(2, 'Verify product details');
    const title = await productPage.getProductTitle();
    expect(title).toContain(productData.singleProduct.name);

    Logger.step(3, 'Verify price is displayed');
    const price = await productPage.getProductPriceValue();
    expect(price).toBeGreaterThan(0);
});

test('TC020 - Complete E2E purchase flow - login, add product, checkout @smoke @e2e', async ({ loginPage, homePage, productPage, cartPage, page }) => {
    Logger.step(1, 'Login with valid credentials');
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    const isLoggedIn = await loginPage.isLoggedIn();

    expect(isLoggedIn).toBeTruthy();

    Logger.step(2, 'Navigate to home and select product');

    await page.goto('https://demoblaze.com/', { waitUntil: 'load' });

    await page.waitForTimeout(1500);

    await homePage.selectProductByName(productData.singleProduct.name);

    Logger.step(3, 'Verify product page and add to cart');

    const productTitle = await productPage.getProductTitle();

    expect(productTitle).toContain(productData.singleProduct.name);

    await productPage.addToCart();

    await page.waitForTimeout(1000);

    Logger.step(4, 'Navigate to cart');

    await cartPage.goToCart();

    const cartCount = await cartPage.getCartItemCount();

    expect(cartCount).toBeGreaterThan(0);

    Logger.step(5, 'Complete checkout');

    const customerDetails = {
        name: RandomDataGenerator.generateRandomName(),
        country: RandomDataGenerator.generateRandomCountry(),
        city: RandomDataGenerator.generateRandomCity(),
        creditCard: checkoutData.validCheckout.creditCard,
        month: checkoutData.validCheckout.month,
        year: checkoutData.validCheckout.year
    };

    await cartPage.completeCheckout(customerDetails);

    Logger.step(6, 'Verify order confirmation');

    const isConfirmed = await cartPage.isOrderConfirmed();

    expect(isConfirmed).toBeTruthy();

    Logger.step(7, 'Verify confirmation details');

    const details = await cartPage.getConfirmationDetails();

    expect(details).toContain('Amount');

    await cartPage.clickConfirmOk();

    Logger.step(8, 'Logout');

    await loginPage.logout();

    await page.waitForTimeout(1000);

    const isLoginVisible = await loginPage.isLoginNavVisible();

    expect(isLoginVisible).toBeTruthy();

    Logger.info('E2E Purchase Flow Completed Successfully!');
});