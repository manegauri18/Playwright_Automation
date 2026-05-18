const { test, expect } = require('../../fixtures/testFixture');
const { setupHooks } = require('../../hooks/hooks');
const productData = require('../../testData/productData.json');
const Logger = require('../../utils/Logger');

setupHooks(test);

test('TC008 - Remove product from cart @regression @cart', async ({ homePage, productPage, cartPage, page }) => {
    Logger.step(1, 'Add a product to cart');
    await homePage.selectProductByName(productData.singleProduct.name);
    await productPage.addToCart();
    await page.waitForTimeout(1000);

    Logger.step(2, 'Navigate to cart');
    await cartPage.goToCart();

    Logger.step(3, 'Verify product is in cart');
    const countBefore = await cartPage.getCartItemCount();
    expect(countBefore).toBeGreaterThan(0);

    Logger.step(4, 'Delete product from cart');
    await cartPage.deleteFirstItem();
    await page.waitForTimeout(1500);

    Logger.step(5, 'Verify product is removed');
    const countAfter = await cartPage.getCartItemCount();
    expect(countAfter).toBeLessThan(countBefore);
});

test('TC009 - Verify cart total price @regression @cart', async ({ homePage, productPage, cartPage, page }) => {
    const products = productData.multipleProducts;
    let expectedTotal = 0;

    Logger.step(1, 'Add multiple products to cart');

    for (const product of products) {
        await page.goto('https://demoblaze.com/', { waitUntil: 'load' });
        await page.waitForTimeout(1500);
        await homePage.selectProductByName(product.name);
        await productPage.addToCart();
        expectedTotal += product.expectedPrice;
        await page.waitForTimeout(1000);
    }

    Logger.step(2, 'Navigate to cart');
    await cartPage.goToCart();

    Logger.step(3, 'Verify total price');
    const displayedTotal = await cartPage.getTotalPrice();

    Logger.info(`Expected total: ${expectedTotal}, Displayed total: ${displayedTotal}`);

    expect(displayedTotal).toBe(expectedTotal);
});

test('TC009a - Verify cart displays correct product names @regression @cart', async ({ homePage, productPage, cartPage, page }) => {
    const product = productData.singleProduct;

    Logger.step(1, `Add product: ${product.name}`);
    await homePage.selectProductByName(product.name);
    await productPage.addToCart();
    await page.waitForTimeout(1000);

    Logger.step(2, 'Navigate to cart');
    await cartPage.goToCart();

    Logger.step(3, 'Verify product name in cart');
    const names = await cartPage.getCartProductNames();

    expect(names).toContain(product.name);
});