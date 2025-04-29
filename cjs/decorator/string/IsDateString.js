"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_DATE_STRING = void 0;
exports.isDateString = isDateString;
exports.IsDateString = IsDateString;
const ValidateBy_1 = require("../common/ValidateBy");
const IsISO8601_1 = require("./IsISO8601");
const multi_lang_1 = require("../../multi-lang");
exports.IS_DATE_STRING = 'isDateString';
/**
 * Alias for IsISO8601 validator
 */
function isDateString(value, options) {
    return (0, IsISO8601_1.isISO8601)(value, options);
}
/**
 * Alias for IsISO8601 validator
 */
function IsDateString(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_DATE_STRING,
        constraints: [options],
        validator: {
            validate: (value) => isDateString(value, options),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a valid ISO 8601 date string'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDateString.js.map