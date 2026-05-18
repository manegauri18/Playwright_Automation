// ============================================================
// Screenshot Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Captures screenshots on failure or on-demand
// Saves to screenshots/ folder with timestamps
//
// ============================================================

const path = require('path');
const fs = require('fs');
const Logger = require('./Logger');

const screenshotsDir = path.resolve(__dirname, '../screenshots');

if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

class ScreenshotUtil {

    static async captureScreenshot(page, name = 'screenshot') {
        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, '-');

        const fileName = `${name}_${timestamp}.png`;

        const filePath = path.join(screenshotsDir, fileName);

        await page.screenshot({
            path: filePath,
            fullPage: true
        });

        Logger.info(`Screenshot captured: ${filePath}`);

        return filePath;
    }

    static async captureOnFailure(page, testName) {
        const sanitizedName = testName.replace(/[^a-zA-Z0-9]/g, '_');

        return await this.captureScreenshot(page, `FAIL_${sanitizedName}`);
    }

    static async captureElementScreenshot(element, name = 'element') {
        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, '-');

        const fileName = `${name}_${timestamp}.png`;

        const filePath = path.join(screenshotsDir, fileName);

        await element.screenshot({
            path: filePath
        });

        Logger.info(`Element screenshot captured: ${filePath}`);

        return filePath;
    }

    static cleanOldScreenshots(days = 7) {
        const cutoffTime = Date.now() - (days * 24 * 60 * 60 * 1000);

        const files = fs.readdirSync(screenshotsDir);

        files.forEach(file => {
            const filePath = path.join(screenshotsDir, file);

            const stats = fs.statSync(filePath);

            if (stats.mtimeMs < cutoffTime) {
                fs.unlinkSync(filePath);

                Logger.info(`Deleted old screenshot: ${file}`);
            }
        });
    }
}

module.exports = ScreenshotUtil;