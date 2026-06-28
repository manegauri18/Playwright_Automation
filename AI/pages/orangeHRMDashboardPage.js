class OrangeHRMDashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.locator('h6:has-text("Dashboard")');
    this.userMenu = page.locator('.oxd-userdropdown-name');
  }

  async waitForDashboard() {
    await this.dashboardHeading.waitFor({ state: 'visible' });
  }

  async isDashboardVisible() {
    return this.dashboardHeading.isVisible();
  }
}

module.exports = { OrangeHRMDashboardPage };