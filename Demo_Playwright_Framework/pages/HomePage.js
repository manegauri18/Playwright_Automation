const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.homeNavLink = "a.nav-link[href='index.html']";
        this.contactNavLink = "a.nav-link[data-target='#exampleModal']";
        this.aboutUsNavLink = "a.nav-link[data-target='#videoModal']";
        this.cartNavLink = '#cartur';
        this.loginNavLink = '#login2';
        this.signUpNavLink = '#signin2';
        this.logoutNavLink = '#logout2';

        this.phonesCategory = "a[onclick=\"byCat('phone')\"]";
        this.laptopsCategory = "a[onclick=\"byCat('notebook')\"]";
        this.monitorsCategory = "a[onclick=\"byCat('monitor')\"]";
        this.categoriesLink = '#cat';

        this.productCards = '.card-block';
        this.productTitles = '.card-title a';
        this.productPrices = '.card-block h5';
        this.productImages = '.card-img-top';

        this.nextButton = '#next2';
        this.previousButton = '#prev2';

        this.logo = '#nava';

        this.carouselNext = '.carousel-control-next';
        this.carouselPrev = '.carousel-control-prev';
    }

    async goToHomePage() {
        Logger.info('Navigating to Home page');

        await this.navigateTo('https://demoblaze.com/');
        await this.waitForPageLoad();
    }

    async selectCategory(category) {
        Logger.info(`Selecting category: ${category}`);

        switch (category.toLowerCase()) {

            case 'phones':
                await this.clickElement(this.phonesCategory);
                break;

            case 'laptops':
                await this.clickElement(this.laptopsCategory);
                break;

            case 'monitors':
                await this.clickElement(this.monitorsCategory);
                break;

            default:
                Logger.warn(`Unknown category: ${category}`);
        }

        await this.wait(1500);
    }

    async selectProductByName(productName) {
        Logger.info(`Selecting product: ${productName}`);

        await this.page
            .locator(`.card-title a:has-text("${productName}")`)
            .click();

        await this.wait(1500);
    }

    async getAllProductNames() {
        await this.wait(1000);

        const products = await this.page
            .locator(this.productTitles)
            .allTextContents();

        Logger.info(`Found ${products.length} products`);

        return products;
    }

    async getProductCount() {
        await this.wait(1000);

        return await this.getElementCount(this.productCards);
    }

    async goToCart() {
        Logger.info('Navigating to Cart page');

        await this.clickElement(this.cartNavLink);

        await this.wait(1500);
    }

    async goToContact() {
        Logger.info('Opening Contact form');

        await this.clickElement(this.contactNavLink);

        await this.wait(1000);
    }

    async goToAboutUs() {
        Logger.info('Opening About Us');

        await this.clickElement(this.aboutUsNavLink);

        await this.wait(1000);
    }

    async clickNext() {
        Logger.info('Clicking Next button');

        await this.clickElement(this.nextButton);

        await this.wait(1500);
    }

    async clickPrevious() {
        Logger.info('Clicking Previous button');

        await this.clickElement(this.previousButton);

        await this.wait(1500);
    }

    async clickLogo() {
        Logger.info('Clicking site logo');

        await this.clickElement(this.logo);

        await this.waitForPageLoad();
    }

    async isHomePageLoaded() {
        try {
            await this.waitForElement(this.productCards, 10000);

            return true;

        } catch {
            return false;
        }
    }

    async areCategoriesVisible() {
        const phones = await this.isElementVisible(this.phonesCategory);
        const laptops = await this.isElementVisible(this.laptopsCategory);
        const monitors = await this.isElementVisible(this.monitorsCategory);

        return phones && laptops && monitors;
    }

    async isNavigationMenuVisible() {
        const home = await this.isElementVisible(this.homeNavLink);
        const contact = await this.isElementVisible(this.contactNavLink);
        const cart = await this.isElementVisible(this.cartNavLink);

        return home && contact && cart;
    }
}

module.exports = HomePage;