// ============================================================
// Logger Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Provides structured logging with info, warn, error, debug levels
// Uses winston library for file + console logging with timestamps
//
// ============================================================

const winston = require('winston');
const path = require('path');
const fs = require('fs');

const logsDir = path.resolve(__dirname, '../logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const logFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
});

const logger = winston.createLogger({
    level: 'info',

    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        logFormat
    ),

    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                logFormat
            )
        }),

        new winston.transports.File({
            filename: path.join(logsDir, 'execution.log'),
            maxsize: 5242880,
            maxFiles: 5
        }),

        new winston.transports.File({
            filename: path.join(logsDir, 'error.log'),
            level: 'error',
            maxsize: 5242880,
            maxFiles: 5
        })
    ]
});

class Logger {

    static info(message) {
        logger.info(message);
    }

    static warn(message) {
        logger.warn(message);
    }

    static error(message) {
        logger.error(message);
    }

    static debug(message) {
        logger.debug(message);
    }

    static step(stepNumber, message) {
        logger.info(`STEP ${stepNumber}: ${message}`);
    }

    static testStart(testName) {
        logger.info(`========== TEST START: ${testName} ==========`);
    }

    static testEnd(testName) {
        logger.info(`========== TEST END: ${testName} ==========`);
    }

    static testPass(testName) {
        logger.info(`✅ TEST PASSED: ${testName}`);
    }

    static testFail(testName, error) {
        logger.error(`❌ TEST FAILED: ${testName} | Error: ${error}`);
    }
}

module.exports = Logger;