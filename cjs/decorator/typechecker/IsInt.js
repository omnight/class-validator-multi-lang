"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_INT = void 0;
exports.isInt = isInt;
exports.IsInt = IsInt;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_INT = 'isInt';
/**
 * Checks if value is an integer.
 */
function isInt(val) {
    return typeof val === 'number' && Number.isInteger(val);
}
/**
 * Checks if value is an integer.
 */
function IsInt(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_INT,
        validator: {
            validate: (value, args) => isInt(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be an integer number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsInt.js.map