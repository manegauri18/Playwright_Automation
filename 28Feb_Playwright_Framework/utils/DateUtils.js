// ============================================================
// Date Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Provides date/time formatting and manipulation methods
// Used for timestamps, date validations, and test data generation
//
// ============================================================

class DateUtils {

    static getCurrentDate(format = 'YYYY-MM-DD') {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;

            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;

            case 'MM-DD-YYYY':
                return `${month}-${day}-${year}`;

            case 'DD-MM-YYYY':
                return `${day}-${month}-${year}`;

            default:
                return `${year}-${month}-${day}`;
        }
    }

    static getTimestamp() {
        return new Date().toISOString();
    }

    static getFileTimestamp() {
        return new Date()
            .toISOString()
            .replace(/[:.]/g, '-')
            .replace('T', '_')
            .split('Z')[0];
    }

    static getCurrentTime() {
        const now = new Date();

        return `${String(now.getHours()).padStart(2, '0')}:` +
            `${String(now.getMinutes()).padStart(2, '0')}:` +
            `${String(now.getSeconds()).padStart(2, '0')}`;
    }

    static getFutureDate(days, format = 'YYYY-MM-DD') {
        const date = new Date();

        date.setDate(date.getDate() + days);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;

            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;

            default:
                return `${year}-${month}-${day}`;
        }
    }

    static dateDiffInDays(date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);

        return Math.ceil(
            Math.abs(d2 - d1) / (1000 * 60 * 60 * 24)
        );
    }
}

module.exports = DateUtils;