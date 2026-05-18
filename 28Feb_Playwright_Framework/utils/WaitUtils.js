// ============================================================
// Wait Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Provides reusable explicit wait methods
// Handles visibility, navigation,
// network idle, alerts, etc.
//
// ============================================================

const Logger = require('./Logger');

class WaitUtils {

    static async waitForElementVisible(page, selector, timeout = 15000) {
        Logger.info(`Waiting for element visible: ${selector}`);

        await page.locator(selector).waitFor({
            state: 'visible',
            timeout
        });
    }

    static async waitForElementHidden(page, selector, timeout = 15000) {
        Logger.info(`Waiting for element hidden: ${selector}`);

        await page.locator(selector).waitFor({
            state: 'hidden',
            timeout
        });
    }

    static async waitForPageLoad(page, timeout = 30000) {
        Logger.info('Waiting for page load...');

        await page.waitForLoadState('load', { timeout });
    }

    static async waitForNetworkIdle(page, timeout = 30000) {
        Logger.info('Waiting for network idle...');

        await page.waitForLoadState('networkidle', { timeout });
    }

    static async waitForDOMContentLoaded(page, timeout = 30000) {
        Logger.info('Waiting for DOM content loaded...');

        await page.waitForLoadState('domcontentloaded', { timeout });
    }

    static async waitForNavigation(page, timeout = 30000) {
        Logger.info('Waiting for navigation...');

        await page.waitForURL('**/*', { timeout });
    }

    static async waitForURL(page, urlPattern, timeout = 30000) {
        Logger.info(`Waiting for URL: ${urlPattern}`);

        await page.waitForURL(urlPattern, { timeout });
    }

    static async hardWait(ms = 1000) {
        Logger.info(`Hard wait: ${ms}ms`);

        await new Promise(resolve => setTimeout(resolve, ms));
    }

    static async waitForElementEnabled(page, selector, timeout = 15000) {
        Logger.info(`Waiting for element enabled: ${selector}`);

        await page.locator(selector).waitFor({
            state: 'visible',
            timeout
        });

        await page.locator(selector).isEnabled({ timeout });
    }

    static async waitForAlert(page, timeout = 10000) {
        Logger.info('Waiting for alert dialog...');

        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('Alert timeout')), timeout);

            page.once('dialog', async dialog => {
                clearTimeout(timer);

                const msg = dialog.message();

                await dialog.accept();

                resolve(msg);
            });
        });
    }

    static async waitForResponse(page, urlPattern, timeout = 30000) {
        Logger.info(`Waiting for API response: ${urlPattern}`);

        await page.waitForResponse(
            response => response.url().includes(urlPattern),
            { timeout }
        );
    }
}

module.exports = WaitUtils;