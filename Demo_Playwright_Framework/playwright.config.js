// playwright.config.js

// ============================================================
// Playwright Configuration - Enterprise E2E Automation Framework
// ============================================================
//
// Configures: browsers, retries, timeouts, reporters,
// screenshots, videos, traces
// Supports: cross-browser, parallel execution,
// environment-based config
//
// ============================================================

const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Load environment config based on ENV variable (default: qa)
const ENV = process.env.ENV || 'qa';

dotenv.config({
  path: path.resolve(__dirname, `config/${ENV}.env`)
});

module.exports = defineConfig({

  // Test directory
  testDir: './tests',

  // Global timeout for each test (30 seconds default)
  timeout: parseInt(process.env.TIMEOUT) || 30000,

  // Expect timeout
  expect: {
    timeout: 60000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Fail build if test.only left in code on CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: parseInt(process.env.RETRIES) || 1,

  // Number of parallel workers
  workers: parseInt(process.env.WORKERS) || 1,

  // Reporter configuration - HTML + List + JSON + Allure
  reporters: [
    ['list'],

    ['html', {
      outputFolder: 'reports/html-report',
      open: 'never'
    }],

    ['json', {
      outputFile: 'reports/test-results.json'
    }],

    ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: true
    }]
  ],

  // Shared settings for all projects
  use: {

    // Base URL from environment config
    baseURL: process.env.BASE_URL || 'https://demoblaze.com/',

    // Browser options
    headless: process.env.HEADLESS === 'true',

    // Screenshot on failure
    screenshot: process.env.SCREENSHOT || 'only-on-failure',

    // Video recording
    video: process.env.VIDEO || 'off',

    // Trace collection
    trace: process.env.TRACE || 'retain-on-failure',

    // Viewport size
    viewport: {
      width: 1920,
      height: 1080
    },

    // Action timeout
    actionTimeout: 15000,

    // Navigation timeout
    navigationTimeout: 30000,

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Color scheme
    colorScheme: 'light'
  },

  // Output directory for test artifacts
  outputDir: 'test-results/',

  // Configure projects for cross-browser testing
  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome'
      }
    },

    // {
    //   name: 'firefox',

    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // },

    // {
    //   name: 'webkit',

    //   use: {
    //     ...devices['Desktop Safari']
    //   }
    // },

    // {
    //   name: 'mobile-chrome',

    //   use: {
    //     ...devices['Pixel 5']
    //   }
    // },

    // {
    //   name: 'mobile-safari',

    //   use: {
    //     ...devices['iPhone 12']
    //   }
    // }
  ]
});