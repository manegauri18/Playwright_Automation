// =====================================================
// Hooks - Enterprise E2E Automation Framework
// =====================================================
// Global test hooks: beforeAll, beforeEach, afterEach, afterAll
// Handles: test setup, teardown, screenshot on failure, logging
// Allure Integration: attachments, labels, links, steps
// =====================================================

const Logger = require('../utils/Logger');
const ScreenshotUtil = require('../utils/ScreenshotUtil');
const fs = require('fs');
const path = require('path');

/**
 * Setup global hooks for test lifecycle management
 * Includes full Allure reporting integration:
 * - Screenshot attachment on failure
 * - Page source (HTML) attachment on failure
 * - Console log attachment
 * - Video attachment (if enabled)
 * - Trace attachment (if enabled)
 * - Allure labels, severity, owner, and tags
 * @param {import('@playwright/test').TestType} test - Playwright test instance
 */

function setupHooks(test) {

    // Runs once before all tests in a file
    test.beforeAll(async () => {

        Logger.info('====================================');
        Logger.info('TEST SUITE STARTED');
        Logger.info(`Environment: ${process.env.ENV || 'qa'}`);
        Logger.info(`Timestamp: ${new Date().toISOString()}`);
        Logger.info('====================================');

    });

    // Runs before each test
    test.beforeEach(async ({ page }, testInfo) => {

        Logger.testStart(testInfo.title);
        Logger.info(`Browser: ${testInfo.project.name}`);

        // --- Allure metadata: labels & tags ---
        // Extract tags from test title (e.g., @smoke, @regression)

        const tagMatches = testInfo.title.match(/@\w+/g) || [];

        for (const tag of tagMatches) {

            testInfo.annotations.push({
                type: 'tag',
                description: tag
            });
        }

        // Navigate to base URL before each test
        await page.goto('https://demoblaze.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

    });

    // Runs after each test
    test.afterEach(async ({ page }, testInfo) => {

        const testFailed = testInfo.status !== testInfo.expectedStatus;

        if (testFailed) {

            Logger.testFail(
                testInfo.title,
                testInfo.error?.message || 'Unknown error'
            );

            // --- 1. Attach Screenshot on Failure ---

            try {

                const screenshotPath =
                    await ScreenshotUtil.captureOnFailure(
                        page,
                        testInfo.title
                    );

                const screenshotBuffer =
                    fs.readFileSync(screenshotPath);

                await testInfo.attach('Screenshot on Failure', {
                    body: screenshotBuffer,
                    contentType: 'image/png'
                });

                Logger.info(
                    'Allure: Screenshot attached to report'
                );

            } catch (err) {

                Logger.warn(
                    `Allure: Failed to attach screenshot - ${err.message}`
                );
            }

            // --- 2. Attach Page Source (HTML) on Failure ---

            try {

                const pageContent = await page.content();

                await testInfo.attach('Page Source (HTML)', {
                    body: Buffer.from(pageContent, 'utf-8'),
                    contentType: 'text/html'
                });

                Logger.info(
                    'Allure: Page source attached to report'
                );

            } catch (err) {

                Logger.warn(
                    `Allure: Failed to attach page source - ${err.message}`
                );
            }

            // --- 3. Attach Console Logs ---

            try {

                const logsDir =
                    path.resolve(__dirname, '../logs');

                const logFile =
                    path.join(logsDir, 'execution.log');

                if (fs.existsSync(logFile)) {

                    const logContent =
                        fs.readFileSync(logFile, 'utf-8');

                    // Attach last 200 lines of log
                    const logLines = logContent.split('\n');

                    const recentLogs =
                        logLines
                            .slice(Math.max(0, logLines.length - 200))
                            .join('\n');

                    await testInfo.attach('Execution Logs', {
                        body: Buffer.from(recentLogs, 'utf-8'),
                        contentType: 'text/plain'
                    });

                    Logger.info(
                        'Allure: Execution logs attached to report'
                    );
                }

            } catch (err) {

                Logger.warn(
                    `Allure: Failed to attach logs - ${err.message}`
                );
            }

        } else {

            Logger.testPass(testInfo.title);

            // --- Attach Screenshot on Pass (Optional) ---

            try {

                const screenshotBuffer =
                    await page.screenshot({
                        fullPage: true
                    });

                await testInfo.attach('Screenshot on Pass', {
                    body: screenshotBuffer,
                    contentType: 'image/png'
                });

            } catch (err) {

                Logger.debug(
                    `Allure: Skipped pass screenshot - ${err.message}`
                );
            }
        }

        // --- 4. Attach Video (if recording enabled) ---

        try {

            const video = page.video();

            if (video) {

                // Wait briefly for video save
                await page.close();

                const videoPath = await video.path();

                if (
                    videoPath &&
                    fs.existsSync(videoPath)
                ) {

                    await testInfo.attach(
                        'Test Video Recording',
                        {
                            path: videoPath,
                            contentType: 'video/webm'
                        }
                    );

                    Logger.info(
                        'Allure: Video attached to report'
                    );
                }
            }

        } catch (err) {

            Logger.debug(
                `Allure: Video not available - ${err.message}`
            );
        }

        // --- 5. Attach Trace (if trace enabled) ---

        try {

            const traceDir =
                path.resolve(__dirname, '../test-results');

            // Playwright saves traces as .zip

            const sanitizedTitle =
                testInfo.title
                    .replace(/[^a-zA-Z0-9]/g, '-')
                    .substring(0, 60);

            const tracePattern =
                path.join(traceDir, '**', 'trace.zip');

            // Trace auto attached by Playwright built-in mechanism

        } catch (err) {

            Logger.debug(
                `Allure: Trace not available - ${err.message}`
            );
        }

        Logger.testEnd(testInfo.title);

    });

    // Runs once after all tests in file
    test.afterAll(async () => {

        Logger.info('====================================');
        Logger.info('TEST SUITE COMPLETED');
        Logger.info(`Timestamp: ${new Date().toISOString()}`);
        Logger.info('====================================');

    });
}

module.exports = { setupHooks };