# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E/e2e.spec.js >> TC016 - Validate no broken links on homepage @regression @e2e
- Location: tests/E2E/e2e.spec.js:34:6

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
  41  |     const homeLink = await page
  42  |         .locator("//a[contains(text(),'Home ')]")
  43  |         .nth(1)
  44  |         .isVisible();
  45  |     const cartLink = await page.locator('#cartur').isVisible();
> 46  |     expect(homeLink).toBeTruthy();
      |                      ^ Error: expect(received).toBeTruthy()
  47  |     expect(cartLink).toBeTruthy();
  48  | });
  49  | 
  50  | test('TC017 - Search/Browse product by category @regression @e2e', async ({ homePage }) => {
  51  |     Logger.step(1, 'Select Phones category');
  52  |     await homePage.selectCategory('phones');
  53  |     const phoneProducts = await homePage.getAllProductNames();
  54  |     Logger.info(`Phone products: ${phoneProducts.join(', ')}`);
  55  |     expect(phoneProducts.length).toBeGreaterThan(0);
  56  | 
  57  |     Logger.step(2, 'Select Laptops category');
  58  |     await homePage.selectCategory('laptops');
  59  |     const laptopProducts = await homePage.getAllProductNames();
  60  |     Logger.info(`Laptop products: ${laptopProducts.join(', ')}`);
  61  |     expect(laptopProducts.length).toBeGreaterThan(0);
  62  | 
  63  |     Logger.step(3, 'Select Monitors category');
  64  |     await homePage.selectCategory('monitors');
  65  |     const monitorProducts = await homePage.getAllProductNames();
  66  |     Logger.info(`Monitor products: ${monitorProducts.join(', ')}`);
  67  |     expect(monitorProducts.length).toBeGreaterThan(0);
  68  | });
  69  | 
  70  | test('TC018 - Cross browser homepage validation @smoke @e2e', async ({ homePage, page }) => {
  71  |     Logger.step(1, 'Verify homepage loads in current browser');
  72  |     const isLoaded = await homePage.isHomePageLoaded();
  73  |     expect(isLoaded).toBeTruthy();
  74  | 
  75  |     Logger.step(2, 'Verify page title');
  76  |     const title = await page.title();
  77  |     Logger.info(`Page title: ${title}`);
  78  |     expect(title).toContain('STORE');
  79  | 
  80  |     Logger.step(3, 'Verify categories');
  81  |     const categoriesVisible = await homePage.areCategoriesVisible();
  82  |     expect(categoriesVisible).toBeTruthy();
  83  | });
  84  | 
  85  | test('TC019 - Parallel execution product browsing @smoke @e2e', async ({ homePage, productPage }) => {
  86  |     Logger.step(1, 'Select a product');
  87  |     await homePage.selectProductByName(productData.singleProduct.name);
  88  | 
  89  |     Logger.step(2, 'Verify product details');
  90  |     const title = await productPage.getProductTitle();
  91  |     expect(title).toContain(productData.singleProduct.name);
  92  | 
  93  |     Logger.step(3, 'Verify price is displayed');
  94  |     const price = await productPage.getProductPriceValue();
  95  |     expect(price).toBeGreaterThan(0);
  96  | });
  97  | 
  98  | test('TC020 - Complete E2E purchase flow - login, add product, checkout @smoke @e2e', async ({ loginPage, homePage, productPage, cartPage, page }) => {
  99  |     Logger.step(1, 'Login with valid credentials');
  100 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  101 | 
  102 |     const isLoggedIn = await loginPage.isLoggedIn();
  103 | 
  104 |     expect(isLoggedIn).toBeTruthy();
  105 | 
  106 |     Logger.step(2, 'Navigate to home and select product');
  107 | 
  108 |     await page.goto('https://demoblaze.com/', { waitUntil: 'load' });
  109 | 
  110 |     await page.waitForTimeout(1500);
  111 | 
  112 |     await homePage.selectProductByName(productData.singleProduct.name);
  113 | 
  114 |     Logger.step(3, 'Verify product page and add to cart');
  115 | 
  116 |     const productTitle = await productPage.getProductTitle();
  117 | 
  118 |     expect(productTitle).toContain(productData.singleProduct.name);
  119 | 
  120 |     await productPage.addToCart();
  121 | 
  122 |     await page.waitForTimeout(1000);
  123 | 
  124 |     Logger.step(4, 'Navigate to cart');
  125 | 
  126 |     await cartPage.goToCart();
  127 | 
  128 |     const cartCount = await cartPage.getCartItemCount();
  129 | 
  130 |     expect(cartCount).toBeGreaterThan(0);
  131 | 
  132 |     Logger.step(5, 'Complete checkout');
  133 | 
  134 |     const customerDetails = {
  135 |         name: RandomDataGenerator.generateRandomName(),
  136 |         country: RandomDataGenerator.generateRandomCountry(),
  137 |         city: RandomDataGenerator.generateRandomCity(),
  138 |         creditCard: checkoutData.validCheckout.creditCard,
  139 |         month: checkoutData.validCheckout.month,
  140 |         year: checkoutData.validCheckout.year
  141 |     };
  142 | 
  143 |     await cartPage.completeCheckout(customerDetails);
  144 | 
  145 |     Logger.step(6, 'Verify order confirmation');
  146 | 
```