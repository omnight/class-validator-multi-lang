"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_POSITIVE = void 0;
exports.isPositive = isPositive;
exports.IsPositive = IsPositive;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_POSITIVE = 'isPositive';
/**
 * Checks if the value is a positive number greater than zero.
 */
function isPositive(value) {
    return typeof value === 'number' && value > 0;
}
/**
 * Checks if the value is a positive number greater than zero.
 */
function IsPositive(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_POSITIVE,
        validator: {
            validate: (value, args) => isPositive(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a positive number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsPositive.js.map