// ============================================================
// Contact Page - Enterprise E2E Automation Framework
// ============================================================
//
// Page Object for Contact Us form on demoblaze.com
// Contains: send message, form validation methods
//
// ============================================================

const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class ContactPage extends BasePage {

    /**
     * Constructor - Initialize ContactPage selectors
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {

        super(page);

        // Contact modal selectors
        this.contactModal = '#exampleModal';

        this.contactNavLink = 'a.nav-link[data-target="#exampleModal"]';

        this.contactEmailInput = '#recipient-email';

        this.contactNameInput = '#recipient-name';

        this.contactMessageInput = '#message-text';

        this.sendMessageButton = '#exampleModal .btn-primary';

        this.closeContactModal = '#exampleModal .btn-secondary';

        this.contactModalTitle = '#exampleModalLabel';
    }

    /**
     * Open Contact modal from navigation
     */
    async openContactForm() {

        Logger.info('Opening Contact form');

        await this.clickElement(this.contactNavLink);

        await this.wait(1000);

        await this.waitForElement(this.contactEmailInput);
    }

    /**
     * Enter email in contact form
     * @param {string} email - Contact email
     */
    async enterContactEmail(email) {

        Logger.info(`Entering contact email: ${email}`);

        await this.enterText(this.contactEmailInput, email);
    }

    /**
     * Enter name in contact form
     * @param {string} name - Contact name
     */
    async enterContactName(name) {

        Logger.info(`Entering contact name: ${name}`);

        await this.enterText(this.contactNameInput, name);
    }

    /**
     * Enter message in contact form
     * @param {string} message - Contact message
     */
    async enterContactMessage(message) {

        Logger.info('Entering contact message');

        await this.enterText(this.contactMessageInput, message);
    }

    /**
     * Click Send Message button
     */
    async clickSendMessage() {

        Logger.info('Clicking Send Message');

        await this.clickElement(this.sendMessageButton);

        await this.wait(1000);
    }

    /**
     * Complete contact form submission
     * @param {string} email - Contact email
     * @param {string} name - Contact name
     * @param {string} message - Contact message
     * @returns {Promise<string>}
     */
    async sendMessage(email, name, message) {

        Logger.info('Sending contact message');

        await this.openContactForm();

        await this.enterContactEmail(email);

        await this.enterContactName(name);

        await this.enterContactMessage(message);

        // Set up alert handler
        const alertPromise = this.acceptAlert();

        await this.clickSendMessage();

        try {

            const alertMsg = await alertPromise;

            Logger.info(`Contact alert: ${alertMsg}`);

            return alertMsg;

        } catch {

            Logger.warn('No alert appeared after contact form submission');

            return '';
        }
    }

    /**
     * Close contact modal without sending
     */
    async closeContactForm() {

        Logger.info('Closing contact form');

        await this.clickElement(this.closeContactModal);

        await this.wait(500);
    }

    /**
     * Verify contact modal is open
     * @returns {Promise<boolean>}
     */
    async isContactFormOpen() {

        return await this.isElementVisible(this.contactEmailInput);
    }

    /**
     * Get contact modal title text
     * @returns {Promise<string>}
     */
    async getContactModalTitle() {

        return await this.getText(this.contactModalTitle);
    }
}

module.exports = ContactPage;