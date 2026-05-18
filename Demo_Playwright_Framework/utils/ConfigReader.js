// ============================================================
// Config Reader - Enterprise E2E Automation Framework
// ============================================================
//
// Reads environment-specific configuration from .env files
// Provides centralized access to all config values
//
// ============================================================

const dotenv = require('dotenv');
const path = require('path');

const ENV = process.env.ENV || 'qa';

dotenv.config({
    path: path.resolve(__dirname, `../config/${ENV}.env`)
});

class ConfigReader {

    static get baseURL() {
        return process.env.BASE_URL || 'https://demoblaze.com/';
    }

    static get username() {
        return process.env.USERNAME || 'pavanol';
    }

    static get password() {
        return process.env.PASSWORD || 'test@123';
    }

    static get browser() {
        return process.env.BROWSER || 'chromium';
    }

    static get headless() {
        return process.env.HEADLESS === 'true';
    }

    static get timeout() {
        return parseInt(process.env.TIMEOUT) || 30000;
    }

    static get retries() {
        return parseInt(process.env.RETRIES) || 1;
    }

    static get workers() {
        return parseInt(process.env.WORKERS) || 5;
    }

    static get screenshot() {
        return process.env.SCREENSHOT || 'on';
    }

    static get video() {
        return process.env.VIDEO || 'off';
    }

    static get trace() {
        return process.env.TRACE || 'off';
    }

    static get environment() {
        return ENV;
    }

    static getEnvVariable(key, defaultValue = '') {
        return process.env[key] || defaultValue;
    }
}

module.exports = ConfigReader;