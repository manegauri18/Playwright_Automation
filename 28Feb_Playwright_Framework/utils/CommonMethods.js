// ============================================================
// Common Methods Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Reusable common methods used across all page objects
// Provides helper functions for alerts, navigation,
// scrolling, cookies, UUID generation, string utilities, etc.
//
// ============================================================

const Logger = require('./Logger');

class CommonMethods {

    static async acceptAlert(page) {
        return new Promise((resolve) => {
            page.once('dialog', async dialog => {
                const msg = dialog.message();
                await dialog.accept();
                Logger.info(`Alert accepted: ${msg}`);
                resolve(msg);
            });
        });
    }

    static async dismissAlert(page) {
        return new Promise((resolve) => {
            page.once('dialog', async dialog => {
                const msg = dialog.message();
                await dialog.dismiss();
                Logger.info(`Alert dismissed: ${msg}`);
                resolve(msg);
            });
        });
    }

    static async getPageTitle(page) {
        const title = await page.title();
        Logger.info(`Page title: ${title}`);
        return title;
    }

    static getPageURL(page) {
        const url = page.url();
        Logger.info(`Page URL: ${url}`);
        return url;
    }

    static async reloadPage(page) {
        Logger.info('Reloading page...');
        await page.reload({ waitUntil: 'load' });
    }

    static async goBack(page) {
        Logger.info('Navigating back...');
        await page.goBack({ waitUntil: 'load' });
    }

    static async goForward(page) {
        Logger.info('Navigating forward...');
        await page.goForward({ waitUntil: 'load' });
    }

    static async scrollToTop(page) {
        await page.evaluate(() => window.scrollTo(0, 0));
        Logger.info('Scrolled to top of page');
    }

    static async scrollToBottom(page) {
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        Logger.info('Scrolled to bottom of page');
    }

    static async clearCookies(context) {
        await context.clearCookies();
        Logger.info('Browser cookies cleared');
    }

    static async getCookies(context) {
        return await context.cookies();
    }

    static extractNumber(text) {
        const match = text.match(/[\d.]+/);

        return match ? parseFloat(match[0]) : 0;
    }

    static generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });
    }

    static async sleep(ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    static arrayContains(array, value) {
        return array.includes(value);
    }

    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

module.exports = CommonMethods;