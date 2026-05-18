# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E/e2e.spec.js >> TC016 - Validate no broken links on homepage @regression @e2e
- Location: tests/E2E/e2e.spec.js:34:6

# Error details

```
ReferenceError: homePage is not defined
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
  31  |     expect(isLoaded).toBeTruthy();
  32  | });
  33  | 
  34  | test.only('TC016 - Validate no broken links on homepage @regression @e2e', async ({ page }) => {
  35  |     Logger.step(1, 'Get all links on the page');
  36  |     const links = await page.locator('a[href]').all();
  37  |     Logger.info(`Found ${links.length} links on homepage`);
  38  |     expect(links.length).toBeGreaterThan(0);
  39  | 
  40  |     Logger.step(2, 'Verify key navigation links exist');
  41  |     // const homeLink = await page.locator('a[href="index.html"]').isVisible();
  42  |     // const cartLink = await page.locator('#cartur').isVisible();
> 43  |     const homeLink = await homePage.isHomeLinkVisible();
      |                      ^ ReferenceError: homePage is not defined
  44  |     const cartLink = await homePage.isCartLinkVisible();
  45  |     expect(homeLink).toBeTruthy();
  46  |     expect(cartLink).toBeTruthy();
  47  | });
  48  | 
  49  | test('TC017 - Search/Browse product by category @regression @e2e', async ({ homePage }) => {
  50  |     Logger.step(1, 'Select Phones category');
  51  |     await homePage.selectCategory('phones');
  52  |     const phoneProducts = await homePage.getAllProductNames();
  53  |     Logger.info(`Phone products: ${phoneProducts.join(', ')}`);
  54  |     expect(phoneProducts.length).toBeGreaterThan(0);
  55  | 
  56  |     Logger.step(2, 'Select Laptops category');
  57  |     await homePage.selectCategory('laptops');
  58  |     const laptopProducts = await homePage.getAllProductNames();
  59  |     Logger.info(`Laptop products: ${laptopProducts.join(', ')}`);
  60  |     expect(laptopProducts.length).toBeGreaterThan(0);
  61  | 
  62  |     Logger.step(3, 'Select Monitors category');
  63  |     await homePage.selectCategory('monitors');
  64  |     const monitorProducts = await homePage.getAllProductNames();
  65  |     Logger.info(`Monitor products: ${monitorProducts.join(', ')}`);
  66  |     expect(monitorProducts.length).toBeGreaterThan(0);
  67  | });
  68  | 
  69  | test('TC018 - Cross browser homepage validation @smoke @e2e', async ({ homePage, page }) => {
  70  |     Logger.step(1, 'Verify homepage loads in current browser');
  71  |     const isLoaded = await homePage.isHomePageLoaded();
  72  |     expect(isLoaded).toBeTruthy();
  73  | 
  74  |     Logger.step(2, 'Verify page title');
  75  |     const title = await page.title();
  76  |     Logger.info(`Page title: ${title}`);
  77  |     expect(title).toContain('STORE');
  78  | 
  79  |     Logger.step(3, 'Verify categories');
  80  |     const categoriesVisible = await homePage.areCategoriesVisible();
  81  |     expect(categoriesVisible).toBeTruthy();
  82  | });
  83  | 
  84  | test('TC019 - Parallel execution product browsing @smoke @e2e', async ({ homePage, productPage }) => {
  85  |     Logger.step(1, 'Select a product');
  86  |     await homePage.selectProductByName(productData.singleProduct.name);
  87  | 
  88  |     Logger.step(2, 'Verify product details');
  89  |     const title = await productPage.getProductTitle();
  90  |     expect(title).toContain(productData.singleProduct.name);
  91  | 
  92  |     Logger.step(3, 'Verify price is displayed');
  93  |     const price = await productPage.getProductPriceValue();
  94  |     expect(price).toBeGreaterThan(0);
  95  | });
  96  | 
  97  | test('TC020 - Complete E2E purchase flow - login, add product, checkout @smoke @e2e', async ({ loginPage, homePage, productPage, cartPage, page }) => {
  98  |     Logger.step(1, 'Login with valid credentials');
  99  |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  100 | 
  101 |     const isLoggedIn = await loginPage.isLoggedIn();
  102 | 
  103 |     expect(isLoggedIn).toBeTruthy();
  104 | 
  105 |     Logger.step(2, 'Navigate to home and select product');
  106 | 
  107 |     await page.goto('https://demoblaze.com/', { waitUntil: 'load' });
  108 | 
  109 |     await page.waitForTimeout(1500);
  110 | 
  111 |     await homePage.selectProductByName(productData.singleProduct.name);
  112 | 
  113 |     Logger.step(3, 'Verify product page and add to cart');
  114 | 
  115 |     const productTitle = await productPage.getProductTitle();
  116 | 
  117 |     expect(productTitle).toContain(productData.singleProduct.name);
  118 | 
  119 |     await productPage.addToCart();
  120 | 
  121 |     await page.waitForTimeout(1000);
  122 | 
  123 |     Logger.step(4, 'Navigate to cart');
  124 | 
  125 |     await cartPage.goToCart();
  126 | 
  127 |     const cartCount = await cartPage.getCartItemCount();
  128 | 
  129 |     expect(cartCount).toBeGreaterThan(0);
  130 | 
  131 |     Logger.step(5, 'Complete checkout');
  132 | 
  133 |     const customerDetails = {
  134 |         name: RandomDataGenerator.generateRandomName(),
  135 |         country: RandomDataGenerator.generateRandomCountry(),
  136 |         city: RandomDataGenerator.generateRandomCity(),
  137 |         creditCard: checkoutData.validCheckout.creditCard,
  138 |         month: checkoutData.validCheckout.month,
  139 |         year: checkoutData.validCheckout.year
  140 |     };
  141 | 
  142 |     await cartPage.completeCheckout(customerDetails);
  143 | 
```