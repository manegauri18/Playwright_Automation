# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E/e2e.spec.js >> TC014 - Verify navigation menu links @regression @e2e
- Location: tests/E2E/e2e.spec.js:24:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | // ============================================================
  2   | // E2E Tests - Enterprise E2E Automation Framework
  3   | // ============================================================
  4   | //
  5   | // Full End-to-End test scenarios covering complete user flows
  6   | //
  7   | // Test Scenarios:
  8   | // Complete purchase, navigation, cross-browser
  9   | //
  10  | // Tags: @smoke, @e2e, @regression
  11  | //
  12  | // ============================================================
  13  | 
  14  | const { test, expect } = require('../../fixtures/testFixture');
  15  | const { setupHooks } = require('../../hooks/hooks');
  16  | const loginData = require('../../testData/loginData.json');
  17  | const productData = require('../../testData/productData.json');
  18  | const checkoutData = require('../../testData/checkoutData.json');
  19  | const Logger = require('../../utils/Logger');
  20  | const RandomDataGenerator = require('../../utils/RandomDataGenerator');
  21  | 
  22  | setupHooks(test);
  23  | 
  24  | test('TC014 - Verify navigation menu links @regression @e2e', async ({ homePage }) => {
  25  |     Logger.step(1, 'Verify navigation menu is visible');
  26  |     const isNavVisible = await homePage.isNavigationMenuVisible();
  27  |     expect(isNavVisible).toBeTruthy();
  28  | 
  29  |     Logger.step(2, 'Verify home page is loaded');
  30  |     const isLoaded = await homePage.isHomePageLoaded();
> 31  |     expect(isLoaded).toBeTruthy();
      |                      ^ Error: expect(received).toBeTruthy()
  32  | });
  33  | 
  34  | test('TC016 - Validate no broken links on homepage @regression @e2e', async ({ page }) => {
  35  |     Logger.step(1, 'Get all links on the page');
  36  |     const links = await page.locator('a[href]').all();
  37  |     Logger.info(`Found ${links.length} links on homepage`);
  38  |     expect(links.length).toBeGreaterThan(0);
  39  | 
  40  |     Logger.step(2, 'Verify key navigation links exist');
  41  |     const homeLink = await page.locator('a[href="index.html"]').isVisible();
  42  |     const cartLink = await page.locator('#cartur').isVisible();
  43  |     expect(homeLink).toBeTruthy();
  44  |     expect(cartLink).toBeTruthy();
  45  | });
  46  | 
  47  | test('TC017 - Search/Browse product by category @regression @e2e', async ({ homePage }) => {
  48  |     Logger.step(1, 'Select Phones category');
  49  |     await homePage.selectCategory('phones');
  50  |     const phoneProducts = await homePage.getAllProductNames();
  51  |     Logger.info(`Phone products: ${phoneProducts.join(', ')}`);
  52  |     expect(phoneProducts.length).toBeGreaterThan(0);
  53  | 
  54  |     Logger.step(2, 'Select Laptops category');
  55  |     await homePage.selectCategory('laptops');
  56  |     const laptopProducts = await homePage.getAllProductNames();
  57  |     Logger.info(`Laptop products: ${laptopProducts.join(', ')}`);
  58  |     expect(laptopProducts.length).toBeGreaterThan(0);
  59  | 
  60  |     Logger.step(3, 'Select Monitors category');
  61  |     await homePage.selectCategory('monitors');
  62  |     const monitorProducts = await homePage.getAllProductNames();
  63  |     Logger.info(`Monitor products: ${monitorProducts.join(', ')}`);
  64  |     expect(monitorProducts.length).toBeGreaterThan(0);
  65  | });
  66  | 
  67  | test('TC018 - Cross browser homepage validation @smoke @e2e', async ({ homePage, page }) => {
  68  |     Logger.step(1, 'Verify homepage loads in current browser');
  69  |     const isLoaded = await homePage.isHomePageLoaded();
  70  |     expect(isLoaded).toBeTruthy();
  71  | 
  72  |     Logger.step(2, 'Verify page title');
  73  |     const title = await page.title();
  74  |     Logger.info(`Page title: ${title}`);
  75  |     expect(title).toContain('STORE');
  76  | 
  77  |     Logger.step(3, 'Verify categories');
  78  |     const categoriesVisible = await homePage.areCategoriesVisible();
  79  |     expect(categoriesVisible).toBeTruthy();
  80  | });
  81  | 
  82  | test('TC019 - Parallel execution product browsing @smoke @e2e', async ({ homePage, productPage }) => {
  83  |     Logger.step(1, 'Select a product');
  84  |     await homePage.selectProductByName(productData.singleProduct.name);
  85  | 
  86  |     Logger.step(2, 'Verify product details');
  87  |     const title = await productPage.getProductTitle();
  88  |     expect(title).toContain(productData.singleProduct.name);
  89  | 
  90  |     Logger.step(3, 'Verify price is displayed');
  91  |     const price = await productPage.getProductPriceValue();
  92  |     expect(price).toBeGreaterThan(0);
  93  | });
  94  | 
  95  | test('TC020 - Complete E2E purchase flow - login, add product, checkout @smoke @e2e', async ({ loginPage, homePage, productPage, cartPage, page }) => {
  96  |     Logger.step(1, 'Login with valid credentials');
  97  |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  98  | 
  99  |     const isLoggedIn = await loginPage.isLoggedIn();
  100 | 
  101 |     expect(isLoggedIn).toBeTruthy();
  102 | 
  103 |     Logger.step(2, 'Navigate to home and select product');
  104 | 
  105 |     await page.goto('https://demoblaze.com/', { waitUntil: 'load' });
  106 | 
  107 |     await page.waitForTimeout(1500);
  108 | 
  109 |     await homePage.selectProductByName(productData.singleProduct.name);
  110 | 
  111 |     Logger.step(3, 'Verify product page and add to cart');
  112 | 
  113 |     const productTitle = await productPage.getProductTitle();
  114 | 
  115 |     expect(productTitle).toContain(productData.singleProduct.name);
  116 | 
  117 |     await productPage.addToCart();
  118 | 
  119 |     await page.waitForTimeout(1000);
  120 | 
  121 |     Logger.step(4, 'Navigate to cart');
  122 | 
  123 |     await cartPage.goToCart();
  124 | 
  125 |     const cartCount = await cartPage.getCartItemCount();
  126 | 
  127 |     expect(cartCount).toBeGreaterThan(0);
  128 | 
  129 |     Logger.step(5, 'Complete checkout');
  130 | 
  131 |     const customerDetails = {
```