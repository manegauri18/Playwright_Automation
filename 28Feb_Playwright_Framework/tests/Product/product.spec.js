// ============================================================
// Product Tests - Enterprise E2E Automation Framework
// ============================================================
//
// Test Scenarios:
// Product details, categories, add to cart
//
// Uses: Data-driven approach with JSON test data
// Tags: @smoke, @regression, @product
//
// ============================================================

const { test, expect } = require('../../fixtures/testFixture');
const { setupHooks } = require('../../hooks/hooks');
const productData = require('../../testData/productData.json');
const Logger = require('../../utils/Logger');
setupHooks(test);

test('TC006 - Add single product to cart @smoke @product', async ({ homePage, productPage }) => {
    const product = productData.singleProduct;
    Logger.step(1, `Select product: ${product.name}`);
    await homePage.selectProductByName(product.name);
    Logger.step(2, 'Verify product page loads');
    const isLoaded = await productPage.isProductPageLoaded();
    expect(isLoaded).toBeTruthy();
    Logger.step(3, 'Verify product title');
    const title = await productPage.getProductTitle();
    expect(title).toContain(product.name);
    Logger.step(4, 'Add product to cart');
    const alertMsg = await productPage.addToCart();
    expect(alertMsg).toContain('Product added');
});

test('TC007 - Add multiple products to cart @regression @product', async ({ homePage, productPage, page }) => {
    const products = productData.multipleProducts;

    for (const product of products) {
        Logger.step(1, `Navigate to home and select: ${product.name}`);
        await page.goto('https://demoblaze.com/', { waitUntil: 'load' });
        await page.waitForTimeout(1500);
        await homePage.selectProductByName(product.name);
        Logger.step(2, 'Add product to cart');
        await productPage.addToCart();
        await page.waitForTimeout(1000);
    }

    Logger.step(3, 'Navigate to cart and verify items');
    const CartPage = require('../../pages/CartPage');
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    const count = await cartPage.getCartItemCount();
    expect(count).toBeGreaterThanOrEqual(2);
});

test('TC012 - Verify product categories are visible @regression @product', async ({ homePage }) => {
    Logger.step(1, 'Verify all categories are visible');
    const categoriesVisible = await homePage.areCategoriesVisible();
    expect(categoriesVisible).toBeTruthy();
});

test('TC013 - Verify product details on product page @regression @product', async ({ homePage, productPage }) => {
    const product = productData.singleProduct;
    Logger.step(1, `Select product: ${product.name}`);
    await homePage.selectProductByName(product.name);
    Logger.step(2, 'Verify product title');
    const title = await productPage.getProductTitle();
    expect(title).toContain(product.name);
    Logger.step(3, 'Verify product price is displayed');
    const price = await productPage.getProductPriceValue();
    expect(price).toBeGreaterThan(0);
    Logger.step(4, 'Verify Add to Cart button is visible');
    const isVisible = await productPage.isAddToCartVisible();
    expect(isVisible).toBeTruthy();
});

test('TC012a - Verify Phones category shows phone products @regression @product', async ({ homePage }) => {
    Logger.step(1, 'Click on Phones category');
    await homePage.selectCategory('phones');
    Logger.step(2, 'Verify products are displayed');
    const count = await homePage.getProductCount();
    expect(count).toBeGreaterThan(0);
    Logger.step(3, 'Verify product names');
    const names = await homePage.getAllProductNames();
    Logger.info(`Phones category products: ${names.join(', ')}`);
    expect(names.length).toBeGreaterThan(0);
});

test('TC012b - Verify Laptops category shows laptop products @regression @product', async ({ homePage }) => {
    Logger.step(1, 'Click on Laptops category');
    await homePage.selectCategory('laptops');
    Logger.step(2, 'Verify products are displayed');
    const count = await homePage.getProductCount();
    expect(count).toBeGreaterThan(0);
});

test('TC012c - Verify Monitors category shows monitor products @regression @product', async ({ homePage }) => {
    Logger.step(1, 'Click on Monitors category');
    await homePage.selectCategory('monitors');
    Logger.step(2, 'Verify products are displayed');
    const count = await homePage.getProductCount();
    expect(count).toBeGreaterThan(0);
});