"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY_NOT_EMPTY = void 0;
exports.arrayNotEmpty = arrayNotEmpty;
exports.ArrayNotEmpty = ArrayNotEmpty;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.ARRAY_NOT_EMPTY = 'arrayNotEmpty';
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function arrayNotEmpty(array) {
    return Array.isArray(array) && array.length > 0;
}
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function ArrayNotEmpty(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_NOT_EMPTY,
        validator: {
            validate: (value, args) => arrayNotEmpty(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property should not be empty'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayNotEmpty.js.map