// ============================================================
// Excel Utility - Enterprise E2E Automation Framework
// ============================================================
//
// Read/Write Excel files for data-driven testing
// Uses xlsx library for Excel operations
//
// ============================================================

const XLSX = require('xlsx');
const path = require('path');
const Logger = require('./Logger');

class ExcelUtils {

    static readExcelData(filePath, sheetName = null) {
        try {
            const absolutePath = path.resolve(filePath);

            Logger.info(`Reading Excel file: ${absolutePath}`);

            const workbook = XLSX.readFile(absolutePath);

            const sheet = sheetName
                ? workbook.Sheets[sheetName]
                : workbook.Sheets[workbook.SheetNames[0]];

            const data = XLSX.utils.sheet_to_json(sheet);

            Logger.info(`Excel data read successfully. Rows: ${data.length}`);

            return data;

        } catch (error) {
            Logger.error(`Error reading Excel file: ${error.message}`);

            throw error;
        }
    }

    static readColumn(filePath, columnName, sheetName = null) {
        const data = this.readExcelData(filePath, sheetName);

        return data.map(row => row[columnName]);
    }

    static readRow(filePath, rowIndex, sheetName = null) {
        const data = this.readExcelData(filePath, sheetName);

        return data[rowIndex] || null;
    }

    static writeExcelData(filePath, data, sheetName = 'Sheet1') {
        try {
            const absolutePath = path.resolve(filePath);

            Logger.info(`Writing Excel file: ${absolutePath}`);

            const workbook = XLSX.utils.book_new();

            const worksheet = XLSX.utils.json_to_sheet(data);

            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

            XLSX.writeFile(workbook, absolutePath);

            Logger.info('Excel file written successfully.');

        } catch (error) {
            Logger.error(`Error writing Excel file: ${error.message}`);

            throw error;
        }
    }

    static convertExcelToJson(excelPath, jsonPath = null) {
        const data = this.readExcelData(excelPath);

        if (jsonPath) {
            const fs = require('fs');

            fs.writeFileSync(path.resolve(jsonPath), JSON.stringify(data, null, 2));

            Logger.info(`Excel converted to JSON: ${jsonPath}`);
        }

        return data;
    }

    static getSheetNames(filePath) {
        const workbook = XLSX.readFile(path.resolve(filePath));

        return workbook.SheetNames;
    }

    static getRowCount(filePath, sheetName = null) {
        const data = this.readExcelData(filePath, sheetName);

        return data.length;
    }
}

module.exports = ExcelUtils;