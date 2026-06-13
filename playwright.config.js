import { defineConfig, devices } from '@playwright/test';

/*
  Environment Handling
  Run command examples:

  QA:
  set ENV=qa && npx playwright test

  DEV:
  set ENV=dev && npx playwright test

  STAGING:
  set ENV=staging && npx playwright test
*/

// Read ENV from terminal
const env = process.env.ENV || 'QA';

// Store all environment URLs
const baseURLs = {
  DEV: 'https://the-internet.herokuapp.com/',
  QA: 'https://www.facebook.com/login.php',
  PROD: 'https://prod.example.com'
};

export default defineConfig({

 
  testDir: './tests',
  // Global Timeout
  timeout: 30000,

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: 0,

  // Workers for CI
  workers: process.env.CI ? 3 : undefined,

  // Reporters
  reporter:'html',

  // Shared Settings
  use: {

    // Base URL based on ENV
       baseURL: baseURLs[env] || baseURLs.QA,


    headless: false,
    screenshot: 'only-on-failure',
     video: 'off',
    trace: 'retain-on-failure',
    // Ignore HTTPS errors if needed
    ignoreHTTPSErrors: true,
  },

  // Browser Projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Firefox
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // Webkit
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    // Mobile Testing
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },

  ],

});