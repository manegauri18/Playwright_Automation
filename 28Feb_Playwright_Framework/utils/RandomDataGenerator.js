// ============================================================
// Random Data Generator - Enterprise E2E Automation Framework
// ============================================================
//
// Generates unique random data for test execution
// Supports: usernames, emails, phone numbers,
// addresses, credit cards, etc.
//
// ============================================================

const Logger = require('./Logger');

class RandomDataGenerator {

    static getRandomNumber(min = 1000, max = 9999) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static generateUniqueUsername(prefix = 'user') {
        const unique = `${prefix}_${Date.now()}`;

        Logger.info(`Generated unique username: ${unique}`);

        return unique;
    }

    static generateRandomEmail(domain = 'testmail.com') {
        const email = `user_${Date.now()}@${domain}`;

        Logger.info(`Generated random email: ${email}`);

        return email;
    }

    static generateRandomPhone() {
        const phone = `9${this.getRandomNumber(100000000, 999999999)}`;

        Logger.info(`Generated random phone: ${phone}`);

        return phone;
    }

    static generateRandomString(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let result = '';

        for (let i = 0; i < length; i++) {
            result += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }

        Logger.info(`Generated random string: ${result}`);

        return result;
    }

    static generateUniqueOrderName(prefix = 'ORD') {
        const orderName = `${prefix}_${Date.now()}`;

        Logger.info(`Generated unique order name: ${orderName}`);

        return orderName;
    }

    static generateRandomName() {
        const firstNames = [
            'John',
            'Jane',
            'Robert',
            'Emily',
            'Michael',
            'Sarah',
            'David',
            'Lisa',
            'James',
            'Mary'
        ];

        const lastNames = [
            'Smith',
            'Johnson',
            'Williams',
            'Brown',
            'Jones',
            'Garcia',
            'Miller',
            'Davis',
            'Wilson',
            'Moore'
        ];

        const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

        Logger.info(`Generated random name: ${name}`);

        return name;
    }

    static generateRandomCity() {
        const cities = [
            'New York',
            'Los Angeles',
            'Chicago',
            'Houston',
            'Phoenix',
            'San Francisco',
            'Seattle',
            'Denver',
            'Austin',
            'Boston'
        ];

        return cities[Math.floor(Math.random() * cities.length)];
    }

    static generateRandomCountry() {
        const countries = [
            'USA',
            'Canada',
            'UK',
            'Germany',
            'France',
            'Australia',
            'Japan',
            'India',
            'Brazil',
            'Italy'
        ];

        return countries[Math.floor(Math.random() * countries.length)];
    }

    static generateRandomCreditCard() {
        const card = `4${this.getRandomNumber(100000000000000, 999999999999999)}`;

        return card.substring(0, 16);
    }

    static generateRandomMonth() {
        return String(this.getRandomNumber(1, 12)).padStart(2, '0');
    }

    static generateRandomYear() {
        const currentYear = new Date().getFullYear();

        return String(
            this.getRandomNumber(currentYear, currentYear + 5)
        );
    }
}

module.exports = RandomDataGenerator;