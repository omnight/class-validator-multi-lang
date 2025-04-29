"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY_MIN_SIZE = void 0;
exports.arrayMinSize = arrayMinSize;
exports.ArrayMinSize = ArrayMinSize;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.ARRAY_MIN_SIZE = 'arrayMinSize';
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function arrayMinSize(array, min) {
    return Array.isArray(array) && array.length >= min;
}
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function ArrayMinSize(min, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_MIN_SIZE,
        constraints: [min],
        validator: {
            validate: (value, args) => arrayMinSize(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must contain at least $constraint1 elements'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayMinSize.js.map