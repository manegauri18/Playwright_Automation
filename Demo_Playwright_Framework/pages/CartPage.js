const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartTable = '#tbodyid';
        this.cartItems = '#tbodyid tr';
        this.cartItemTitles = '#tbodyid tr td:nth-child(2)';
        this.cartItemPrices = '#tbodyid tr td:nth-child(3)';
        this.deleteButtons = '#tbodyid tr td:nth-child(4) a';
        this.totalPrice = '#totalp';
        this.placeOrderButton = "button[data-target='#orderModal']";
        this.cartNavLink = '#cartur';

        this.orderModal = '#orderModal';
        this.nameInput = '#name';
        this.countryInput = '#country';
        this.cityInput = '#city';
        this.creditCardInput = '#card';
        this.monthInput = '#month';
        this.yearInput = '#year';
        this.purchaseButton = "button[onclick='purchaseOrder()']";
        this.closeOrderModal = '#orderModal .btn-secondary';

        this.confirmationModal = '.sweet-alert';
        this.confirmationTitle = '.sweet-alert h2';
        this.confirmationBody = '.sweet-alert p.lead';
        this.confirmOkButton = '.sweet-alert .confirm';
    }

    async goToCart() {
        Logger.info('Navigating to Cart page');
        await this.clickElement(this.cartNavLink);
        await this.wait(2000);
    }

    async getCartItemCount() {
        await this.wait(1000);
        const count = await this.getElementCount(this.cartItems);
        Logger.info(`Cart item count: ${count}`);
        return count;
    }

    async getCartProductNames() {
        await this.wait(1000);
        const names = await this.page.locator(this.cartItemTitles).allTextContents();
        Logger.info(`Cart products: ${names.join(', ')}`);
        return names;
    }

    async getCartProductPrices() {
        await this.wait(1000);
        const priceTexts = await this.page.locator(this.cartItemPrices).allTextContents();
        return priceTexts.map(p => parseInt(p));
    }

    async getTotalPrice() {
        try {
            await this.waitForElement(this.totalPrice, 5000);
            const total = await this.getText(this.totalPrice);
            Logger.info(`Cart total: ${total}`);
            return parseInt(total);
        } catch {
            Logger.warn('Total price element not found');
            return 0;
        }
    }

    async deleteProduct(productName) {
        Logger.info(`Deleting product from cart: ${productName}`);

        const rows = this.page.locator(this.cartItems);
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const name = await rows.nth(i).locator('td:nth-child(2)').textContent();

            if (name && name.trim() === productName) {
                await rows.nth(i).locator('td:nth-child(4) a').click();
                Logger.info(`Product deleted: ${productName}`);
                await this.wait(1000);
                return;
            }
        }

        Logger.warn(`Product not found in cart: ${productName}`);
    }

    async deleteFirstItem() {
        Logger.info('Deleting first item from cart');
        await this.page.locator(this.deleteButtons).first().click();
        await this.wait(1000);
    }

    async clickPlaceOrder() {
        Logger.info('Clicking Place Order button');
        await this.clickElement(this.placeOrderButton);
        await this.wait(1000);
    }

    async fillOrderForm(details) {
        Logger.info('Filling order form');

        await this.waitForElement(this.nameInput);

        if (details.name) await this.enterText(this.nameInput, details.name);
        if (details.country) await this.enterText(this.countryInput, details.country);
        if (details.city) await this.enterText(this.cityInput, details.city);
        if (details.creditCard) await this.enterText(this.creditCardInput, details.creditCard);
        if (details.month) await this.enterText(this.monthInput, details.month);
        if (details.year) await this.enterText(this.yearInput, details.year);
    }

    async clickPurchase() {
        Logger.info('Clicking Purchase button');
        await this.clickElement(this.purchaseButton);
        await this.wait(2000);
    }

    async isOrderConfirmed() {
        try {
            await this.waitForElement(this.confirmationTitle, 10000);
            const title = await this.getText(this.confirmationTitle);
            Logger.info(`Order confirmation: ${title}`);
            return title.includes('Thank you');
        } catch {
            return false;
        }
    }

    async getConfirmationDetails() {
        await this.waitForElement(this.confirmationBody);
        return await this.getText(this.confirmationBody);
    }

    async clickConfirmOk() {
        Logger.info('Clicking OK on confirmation');
        await this.clickElement(this.confirmOkButton);
        await this.wait(1000);
    }

    async completeCheckout(details) {
        await this.clickPlaceOrder();
        await this.fillOrderForm(details);
        await this.clickPurchase();
    }

    async isCartEmpty() {
        await this.wait(1000);
        const count = await this.getCartItemCount();
        return count === 0;
    }
}

module.exports = CartPage;