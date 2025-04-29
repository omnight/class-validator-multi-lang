"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY_MAX_SIZE = void 0;
exports.arrayMaxSize = arrayMaxSize;
exports.ArrayMaxSize = ArrayMaxSize;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.ARRAY_MAX_SIZE = 'arrayMaxSize';
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function arrayMaxSize(array, max) {
    return Array.isArray(array) && array.length <= max;
}
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function ArrayMaxSize(max, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_MAX_SIZE,
        constraints: [max],
        validator: {
            validate: (value, args) => arrayMaxSize(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must contain no more than $constraint1 elements'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayMaxSize.js.map