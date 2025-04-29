"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_STRING = void 0;
exports.isString = isString;
exports.IsString = IsString;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_STRING = 'isString';
/**
 * Checks if a given value is a real string.
 */
function isString(value) {
    return value instanceof String || typeof value === 'string';
}
/**
 * Checks if a given value is a real string.
 */
function IsString(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_STRING,
        validator: {
            validate: (value, args) => isString(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a string'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsString.js.map