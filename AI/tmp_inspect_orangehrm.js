const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');
  const usernameExists = await page.locator('input[name="username"]').count();
  const passwordExists = await page.locator('input[name="password"]').count();
  const loginCount = await page.locator('button[type="submit"]').count();
  const forgotLinkCount = await page.getByRole('link', { name: /Forgot your password\?/i }).count();
  const forgotTextCount = await page.getByText(/Forgot/i).count();
  console.log({ usernameExists, passwordExists, loginCount, forgotLinkCount, forgotTextCount });
  for (let i = 0; i < forgotTextCount; i++) {
    const element = page.getByText(/Forgot/i).nth(i);
    console.log('element', i, await element.evaluate(el => ({ tag: el.tagName, text: el.textContent.trim(), role: el.getAttribute('role'), href: el.getAttribute('href'), outerHTML: el.outerHTML })));
  }
  await browser.close();
})();
