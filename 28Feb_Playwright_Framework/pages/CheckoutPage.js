// ============================================================
// Checkout Page - Enterprise E2E Automation Framework
// ============================================================
//
// Page Object for Checkout/Purchase flow on demoblaze.com
// Contains: place order, fill details, purchase,
// confirmation methods
//
// Note: Checkout is handled via modal on Cart page
//
// ============================================================
//Encapsulatuon 
const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class CheckoutPage extends BasePage {

    /**
     * Constructor - Initialize CheckoutPage selectors
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {

        super(page);

        // Order modal selectors (appears on Cart page)
        this.orderModal = '#orderModal';

        this.nameInput = '#name';
        this.countryInput = '#country';
        this.cityInput = '#city';
        this.creditCardInput = '#card';
        this.monthInput = '#month';
        this.yearInput = '#year';

        this.purchaseButton = 'button[onclick="purchaseOrder()"]';

        this.closeButton = '#orderModal .btn-secondary';

        this.placeOrderButton = 'button[data-target="#orderModal"]';

        // Confirmation selectors
        this.confirmationModal = '.sweet-alert';
        this.confirmationTitle = '.sweet-alert h2';
        this.confirmationBody = '.sweet-alert p.lead';

        this.confirmOkButton = '.sweet-alert .confirm';
    }

    /**
     * Click Place Order button to open checkout modal
     */
    async clickPlaceOrder() {

        Logger.info('Clicking Place Order');

        await this.clickElement(this.placeOrderButton);

        await this.wait(1000);
    }

    /**
     * Fill all customer details in order form
     * @param {Object} data
     * @param {string} data.name
     * @param {string} data.country
     * @param {string} data.city
     * @param {string} data.creditCard
     * @param {string} data.month
     * @param {string} data.year
     */
    async fillCustomerDetails(data) {

        Logger.info('Filling customer details for checkout');

        await this.waitForElement(this.nameInput);

        await this.enterText(this.nameInput, data.name || '');

        await this.enterText(this.countryInput, data.country || '');

        await this.enterText(this.cityInput, data.city || '');

        await this.enterText(this.creditCardInput, data.creditCard || '');

        await this.enterText(this.monthInput, data.month || '');

        await this.enterText(this.yearInput, data.year || '');
    }

    /**
     * Click Purchase button to finalize order
     */
    async clickPurchaseButton() {

        Logger.info('Clicking Purchase button');

        await this.clickElement(this.purchaseButton);

        await this.wait(2000);
    }

    /**
     * Complete full purchase flow
     * @param {Object} customerData
     */
    async purchaseProduct(customerData) {

        await this.clickPlaceOrder();

        await this.fillCustomerDetails(customerData);

        await this.clickPurchaseButton();
    }

    /**
     * Verify order confirmation modal appeared
     * @returns {Promise<boolean>}
     */
    async isOrderConfirmed() {

        try {

            await this.waitForElement(this.confirmationTitle, 10000);

            const text = await this.getText(this.confirmationTitle);

            return text.includes('Thank you');

        } catch {

            return false;
        }
    }

    /**
     * Get order confirmation text body
     * @returns {Promise<string>}
     */
    async getOrderConfirmationText() {

        await this.waitForElement(this.confirmationBody);

        const text = await this.getText(this.confirmationBody);

        Logger.info(`Order confirmation text: ${text}`);

        return text;
    }

    /**
     * Click OK to dismiss confirmation dialog
     */
    async clickConfirmationOk() {

        await this.clickElement(this.confirmOkButton);

        await this.wait(1000);
    }

    /**
     * Close order modal without purchasing
     */
    async closeOrderModal() {

        Logger.info('Closing order modal');

        await this.clickElement(this.closeButton);

        await this.wait(500);
    }
}

module.exports = CheckoutPage;