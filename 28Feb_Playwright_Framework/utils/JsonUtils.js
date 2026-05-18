// ============================================================
// JSON Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Read/Write JSON files for data-driven testing
// Provides methods to access nested JSON data
//
// ============================================================

const fs = require('fs');
const path = require('path');
const Logger = require('./Logger');

class JsonUtils {

    static readJsonFile(filePath) {
        try {
            const absolutePath = path.resolve(filePath);

            Logger.info(`Reading JSON file: ${absolutePath}`);

            const rawData = fs.readFileSync(absolutePath, 'utf-8');

            return JSON.parse(rawData);

        } catch (error) {
            Logger.error(`Error reading JSON file: ${error.message}`);

            throw error;
        }
    }

    static writeJsonFile(filePath, data) {
        try {
            const absolutePath = path.resolve(filePath);

            Logger.info(`Writing JSON file: ${absolutePath}`);

            fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2));

            Logger.info('JSON file written successfully.');

        } catch (error) {
            Logger.error(`Error writing JSON file: ${error.message}`);

            throw error;
        }
    }

    static getValueByKey(filePath, key) {
        const data = this.readJsonFile(filePath);

        return data[key];
    }

    static getNestedValue(obj, dotPath) {
        return dotPath
            .split('.')
            .reduce((current, key) => current && current[key], obj);
    }

    static updateJsonValue(filePath, key, value) {
        const data = this.readJsonFile(filePath);

        data[key] = value;

        this.writeJsonFile(filePath, data);

        Logger.info(`Updated JSON key '${key}' with new value.`);
    }
}

module.exports = JsonUtils;