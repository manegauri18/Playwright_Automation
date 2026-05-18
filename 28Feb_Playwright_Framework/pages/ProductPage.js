// ============================================================
// Product Page - Enterprise E2E Automation Framework
// ============================================================
//
// Page Object for Product detail page on demoblaze.com
// Contains: add to cart, product details, validation methods
//
// ============================================================

const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class ProductPage extends BasePage {

    /**
     * Constructor - Initialize ProductPage selectors
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {

        super(page);

        // Product detail page selectors
        this.productTitle = '.name';
        this.productPrice = '.price-container';
        this.productDescription = '#more-information p';
        this.addToCartButton = "//a[contains(text(),'Add to cart')]";
        this.productImage = '.product-image img';
        this.homeLink = "a[href='index.html']";
    }

    /**
     * Get product title text
     * @returns {Promise<string>} - Product title
     */
    async getProductTitle() {

        await this.waitForElement(this.productTitle);

        const title =
            await this.getText(this.productTitle);

        Logger.info(`Product title: ${title}`);

        return title;
    }

    /**
     * Get product price text
     * @returns {Promise<string>} - Product price string
     */
    async getProductPrice() {

        await this.waitForElement(this.productPrice);

        const price =
            await this.getText(this.productPrice);

        Logger.info(`Product price: ${price}`);

        return price;
    }

    /**
     * Get numeric price value from product
     * @returns {Promise<number>} - Numeric price
     */
    async getProductPriceValue() {

        const priceText =
            await this.getProductPrice();

        const match =
            priceText.match(/\$(\d+)/);

        return match
            ? parseInt(match[1])
            : 0;
    }

    /**
     * Get product description text
     * @returns {Promise<string>} - Product description
     */
    async getProductDescription() {

        try {

            const desc =
                await this.getText(
                    this.productDescription
                );

            Logger.info(
                `Product description: ${desc}`
            );

            return desc;

        } catch {

            Logger.warn(
                'Product description not found'
            );

            return '';
        }
    }

    /**
     * Click Add to Cart button and handle alert
     */
    async addToCart() {

        Logger.info('Adding product to cart');

        // Wait for product page to load properly
        await this.page.waitForLoadState('domcontentloaded');

        // Explicit wait for Add To Cart button
        await this.page.locator(this.addToCartButton)
            .waitFor({
                state: 'visible',
                timeout: 30000
            });

        // Set up alert handler before clicking
        const alertPromise = this.acceptAlert();

        // Click Add To Cart
        await this.page.locator(this.addToCartButton).click();

        // Wait for alert message
        const alertMsg = await alertPromise;

        Logger.info(`Alert message: ${alertMsg}`);

        return alertMsg;
    }

    /**
     * Verify product page is loaded
     * @returns {Promise<boolean>}
     */
    async isProductPageLoaded() {

        try {

            await this.waitForElement(
                this.productTitle,
                10000
            );

            return true;

        } catch {

            return false;
        }
    }

    /**
     * Verify Add to Cart button is visible
     * @returns {Promise<boolean>}
     */
    async isAddToCartVisible() {

        return await this.isElementVisible(
            this.addToCartButton
        );
    }

    /**
     * Navigate back to home page
     */
    async goBackToHome() {

        Logger.info(
            'Navigating back to home page'
        );

        await this.clickElement(this.homeLink);
        await this.wait(1500);
    }
}

module.exports = ProductPage;