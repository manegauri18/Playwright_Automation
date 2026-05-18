// testFixture.js

// ============================================================
// Test Fixtures - Enterprise E2E Automation Framework
// ============================================================
//
// Custom Playwright test fixtures for page object injection
// Extends base test with reusable page object instances
// All tests automatically get page objects via fixtures
//
// ============================================================

const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const ContactPage = require('../pages/ContactPage');

const Logger = require('../utils/Logger');

const test = base.test.extend({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        Logger.info('Initialized LoginPage fixture');

        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);

        Logger.info('Initialized HomePage fixture');

        await use(homePage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);

        Logger.info('Initialized ProductPage fixture');

        await use(productPage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);

        Logger.info('Initialized CartPage fixture');

        await use(cartPage);
    },

    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);

        Logger.info('Initialized CheckoutPage fixture');

        await use(checkoutPage);
    },

    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);

        Logger.info('Initialized ContactPage fixture');

        await use(contactPage);
    }
});

const expect = base.expect;

module.exports = {
    test,
    expect
};