# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart/cart.spec.js >> TC008 - Remove product from cart @regression @cart
- Location: tests/Cart/cart.spec.js:8:1

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('a[onclick=\'addToCart()\']')

```

# Test source

```ts
  1   | // ============================================================
  2   | // Base Page - Enterprise E2E Automation Framework
  3   | // ============================================================
  4   | //
  5   | // Contains all reusable generic methods used across page objects
  6   | // Every page object extends this BasePage for code reusability
  7   | // Methods: click, type, getText, wait, scroll, hover, screenshot, etc.
  8   | //
  9   | // ============================================================
  10  | 
  11  | const Logger = require('../utils/Logger');
  12  | 
  13  | class BasePage {
  14  | 
  15  |     /**
  16  |      * Constructor - Initializes page object with Playwright page instance
  17  |      * @param {import('@playwright/test').Page} page - Playwright page
  18  |      */
  19  |     constructor(page) {
  20  |         this.page = page;
  21  |     }
  22  | 
  23  |     /**
  24  |      * Navigate to specified URL
  25  |      * @param {string} url - URL to navigate to
  26  |      */
  27  |     async navigateTo(url) {
  28  |         Logger.info(`Navigating to: ${url}`);
  29  |         await this.page.goto(url, { waitUntil: 'load', timeout: 30000 });
  30  |     }
  31  | 
  32  |     /**
  33  |      * Click on element identified by selector
  34  |      * @param {string} selector - Element selector
  35  |      */
  36  |     async clickElement(selector) {
  37  |         Logger.info(`Clicking element: ${selector}`);
> 38  |         await this.page.locator(selector).click();
      |                                           ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  39  |     }
  40  | 
  41  |     /**
  42  |      * Enter text into input field
  43  |      * @param {string} selector - Input field selector
  44  |      * @param {string} text - Text to enter
  45  |      */
  46  |     async enterText(selector, text) {
  47  |         Logger.info(`Entering text in: ${selector}`);
  48  |         await this.page.locator(selector).fill(text);
  49  |     }
  50  | 
  51  |     /**
  52  |      * Get text content of element
  53  |      * @param {string} selector - Element selector
  54  |      * @returns {Promise<string>} - Text content
  55  |      */
  56  |     async getText(selector) {
  57  |         const text = await this.page.locator(selector).textContent();
  58  |         Logger.info(`Got text from ${selector}: ${text}`);
  59  |         return text;
  60  |     }
  61  | 
  62  |     /**
  63  |      * Get inner text of element
  64  |      * @param {string} selector - Element selector
  65  |      * @returns {Promise<string>} - Inner text
  66  |      */
  67  |     async getInnerText(selector) {
  68  |         const text = await this.page.locator(selector).innerText();
  69  |         Logger.info(`Got inner text from ${selector}: ${text}`);
  70  |         return text;
  71  |     }
  72  | 
  73  |     /**
  74  |      * Get attribute value of element
  75  |      * @param {string} selector - Element selector
  76  |      * @param {string} attribute - Attribute name
  77  |      * @returns {Promise<string>} - Attribute value
  78  |      */
  79  |     async getAttribute(selector, attribute) {
  80  |         return await this.page.locator(selector).getAttribute(attribute);
  81  |     }
  82  | 
  83  |     /**
  84  |      * Wait for element to be visible
  85  |      * @param {string} selector - Element selector
  86  |      * @param {number} timeout - Max wait time in ms
  87  |      */
  88  |     async waitForElement(selector, timeout = 15000) {
  89  |         Logger.info(`Waiting for element: ${selector}`);
  90  |         await this.page.locator(selector).waitFor({ state: 'visible', timeout });
  91  |     }
  92  | 
  93  |     /**
  94  |      * Wait for element to be hidden
  95  |      * @param {string} selector - Element selector
  96  |      * @param {number} timeout - Max wait time in ms
  97  |      */
  98  |     async waitForElementHidden(selector, timeout = 15000) {
  99  |         await this.page.locator(selector).waitFor({ state: 'hidden', timeout });
  100 |     }
  101 | 
  102 |     /**
  103 |      * Wait for page to fully load
  104 |      */
  105 |     async waitForPageLoad() {
  106 |         Logger.info('Waiting for page load...');
  107 |         await this.page.waitForLoadState('load');
  108 |     }
  109 | 
  110 |     /**
  111 |      * Check if element is visible on page
  112 |      * @param {string} selector - Element selector
  113 |      * @returns {Promise<boolean>} - True if visible
  114 |      */
  115 |     async isElementVisible(selector) {
  116 |         const visible = await this.page.locator(selector).isVisible();
  117 |         Logger.info(`Element ${selector} visible: ${visible}`);
  118 |         return visible;
  119 |     }
  120 | 
  121 |     /**
  122 |      * Check if element is enabled
  123 |      * @param {string} selector - Element selector
  124 |      * @returns {Promise<boolean>} - True if enabled
  125 |      */
  126 |     async isElementEnabled(selector) {
  127 |         return await this.page.locator(selector).isEnabled();
  128 |     }
  129 | 
  130 |     /**
  131 |      * Select dropdown option by value
  132 |      * @param {string} selector - Dropdown selector
  133 |      * @param {string} value - Option value
  134 |      */
  135 |     async selectDropdown(selector, value) {
  136 |         Logger.info(`Selecting dropdown value: ${value}`);
  137 |         await this.page.locator(selector).selectOption(value);
  138 |     }
```