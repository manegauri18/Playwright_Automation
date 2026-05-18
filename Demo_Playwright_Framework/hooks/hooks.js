// hooks.js

// ============================================================
// Hooks - Enterprise E2E Automation Framework
// ============================================================
//
// Global test hooks: beforeAll, beforeEach, afterEach, afterAll
// Handles: test setup, teardown, screenshot on failure, logging
//
// ============================================================

const Logger = require('../utils/Logger');
const ScreenshotUtil = require('../utils/ScreenshotUtil');

/**
 * Setup global hooks for test lifecycle management
 * @param {import('@playwright/test').TestType} test - Playwright test instance
 */
function setupHooks(test) {

    // Runs once before all tests in a file
    test.beforeAll(async () => {
        Logger.info('========================================');
        Logger.info('TEST SUITE STARTED');
        Logger.info(`Environment: ${process.env.ENV || 'qa'}`);
        Logger.info(`Timestamp: ${new Date().toISOString()}`);
        Logger.info('========================================');
    });

    // Runs before each test
    test.beforeEach(async ({ page }, testInfo) => {

        Logger.testStart(testInfo.title);

        Logger.info(`Browser: ${testInfo.project.name}`);

        // Navigate to application
        await page.goto('https://demoblaze.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        // Small static wait for UI stabilization
        await page.waitForTimeout(2000);
    });

    // Runs after each test
    test.afterEach(async ({ page }, testInfo) => {

        // Capture screenshot on test failure
        if (testInfo.status !== testInfo.expectedStatus) {

            Logger.testFail(
                testInfo.title,
                testInfo.error?.message || 'Unknown error'
            );

            await ScreenshotUtil.captureOnFailure(
                page,
                testInfo.title
            );

        } else {

            Logger.testPass(testInfo.title);
        }

        Logger.testEnd(testInfo.title);
    });

    // Runs once after all tests in a file
    test.afterAll(async () => {

        Logger.info('========================================');
        Logger.info('TEST SUITE COMPLETED');
        Logger.info(`Timestamp: ${new Date().toISOString()}`);
        Logger.info('========================================');
    });
}

module.exports = { setupHooks };