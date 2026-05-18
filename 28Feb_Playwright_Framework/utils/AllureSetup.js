// ============================================================
// Allure Setup Utility - Enterprise E2E Automation Framework
// ============================================================
// Generates Allure metadata files before report generation
// - environment.properties (Environment details in report)
// - executor.json (Executor/CI info in report header)
// - categories.json (Defect classification in report)
// Run this AFTER tests and BEFORE allure generate
// ============================================================

const fs = require('fs');
const path = require('path');
const os = require('os');

const ALLURE_RESULTS_DIR = path.resolve(__dirname, '../allure-results');

/**
 * Ensure allure-results directory exists
 */
function ensureAllureResultsDir() {
    if (!fs.existsSync(ALLURE_RESULTS_DIR)) {
        fs.mkdirSync(ALLURE_RESULTS_DIR, { recursive: true });
    }
}

/**
 * Generate environment.properties
 * Shows environment details in the Allure report overview
 */
function generateEnvironmentProperties() {
    ensureAllureResultsDir();

    const env = process.env.ENV || 'qa';
    const envFilePath = path.resolve(__dirname, `../config/${env}.env`);
    let baseURL = 'https://demoblaze.com/';
    let browser = 'chromium';

    // Read from .env file if exists
    if (fs.existsSync(envFilePath)) {
        const envContent = fs.readFileSync(envFilePath, 'utf-8');
        const urlMatch = envContent.match(/BASE_URL=(.+)/);
        const browserMatch = envContent.match(/BROWSER=(.+)/);

        if (urlMatch) baseURL = urlMatch[1].trim();
        if (browserMatch) browser = browserMatch[1].trim();
    }

    const properties = [
        `Environment=${env.toUpperCase()}`,
        `Base.URL=${baseURL}`,
        `Browser=${browser}`,
        `OS=${os.platform()} ${os.release()}`,
        `Node.Version=${process.version}`,
        `OS.Architecture=${os.arch()}`,
        `Hostname=${os.hostname()}`,
        `User=${os.userInfo().username}`,
        `Timestamp=${new Date().toISOString()}`,
        `Framework=Playwright + JavaScript + POM`,
        `Parallel.Workers=${process.env.WORKERS || '3'}`,
        `Retries=${process.env.RETRIES || '1'}`,
        `Headless=${process.env.HEADLESS || 'true'}`
    ].join('\n');

    const filePath = path.join(ALLURE_RESULTS_DIR, 'environment.properties');

    fs.writeFileSync(filePath, properties, 'utf-8');

    console.log(`✅ Allure: environment.properties generated at ${filePath}`);
}

/**
 * Generate executor.json
 * Shows executor/CI information in the Allure report header
 */
function generateExecutorJson() {
    ensureAllureResultsDir();

    const executor = {
        name: process.env.CI ? 'CI/CD Pipeline' : 'Local Execution',
        type: process.env.CI ? 'github' : 'local',
        buildName: `Build ${process.env.BUILD_NUMBER || Date.now()}`,
        buildOrder: parseInt(process.env.BUILD_NUMBER || Date.now()),
        buildUrl: process.env.BUILD_URL || '',
        reportName: 'Allure Report - Demoblaze E2E Tests',
        reportUrl: process.env.REPORT_URL || ''
    };

    const filePath = path.join(ALLURE_RESULTS_DIR, 'executor.json');

    fs.writeFileSync(filePath, JSON.stringify(executor, null, 2), 'utf-8');

    console.log(`✅ Allure: executor.json generated at ${filePath}`);
}

/**
 * Generate categories.json
 * Classifies test failures into categories in the Allure report
 * Shows in the "Categories" tab with defect breakdown
 */
function generateCategoriesJson() {
    ensureAllureResultsDir();

    const categories = [
        {
            name: 'Product Defects',
            description: 'Test failures caused by actual product bugs',
            matchedStatuses: ['failed'],
            messageRegex: '.*Expected.*toBe.*|.*expect.*toContain.*|.*AssertionError.*'
        },
        {
            name: 'Element Not Found',
            description: 'Test failures due to missing or changed UI elements',
            matchedStatuses: ['failed'],
            messageRegex: '.*locator.*|.*selector.*|.*not found.*|.*no element.*|.*waitForSelector.*'
        },
        {
            name: 'Timeout Issues',
            description: 'Tests that exceeded timeout thresholds',
            matchedStatuses: ['failed', 'broken'],
            messageRegex: '.*Timeout.*exceeded.*|.*Timeout.*|.*waiting for.*'
        },
        {
            name: 'Network / API Errors',
            description: 'Failures related to network requests or API calls',
            matchedStatuses: ['broken'],
            messageRegex: '.*net::ERR.*|.*ECONNREFUSED.*|.*fetch.*|.*networkerror.*|.*ERR_CONNECTION.*'
        },
        {
            name: 'Infrastructure Issues',
            description: 'Browser crashes, environment issues, or flaky infrastructure',
            matchedStatuses: ['broken'],
            messageRegex: '.*browser.*closed.*|.*Target closed.*|.*crash.*|.*EPERM.*|.*ENOENT.*'
        },
        {
            name: 'Skipped Tests',
            description: 'Tests that were intentionally skipped',
            matchedStatuses: ['skipped']
        },
        {
            name: 'Flaky Tests',
            description: 'Tests that passed on retry (flaky behavior)',
            matchedStatuses: ['passed'],
            flaky: true
        }
    ];

    const filePath = path.join(ALLURE_RESULTS_DIR, 'categories.json');

    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2), 'utf-8');

    console.log(`✅ Allure: categories.json generated at ${filePath}`);
}

/**
 * Run all Allure setup tasks
 * Call this after test execution and before report generation
 */
function setupAllureMetadata() {

    console.log('\n🚀 Setting up Allure report metadata...\n');

    generateEnvironmentProperties();
    generateExecutorJson();
    generateCategoriesJson();

    console.log('\n✅ Allure metadata setup complete!\n');
}

// If run directly via node (your script), execute setup
if (require.main === module) {
    setupAllureMetadata();
}

module.exports = {
    setupAllureMetadata,
    generateEnvironmentProperties,
    generateExecutorJson,
    generateCategoriesJson
};