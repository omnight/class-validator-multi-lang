"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_BOOLEAN = void 0;
exports.isBoolean = isBoolean;
exports.IsBoolean = IsBoolean;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_BOOLEAN = 'isBoolean';
/**
 * Checks if a given value is a boolean.
 */
function isBoolean(value) {
    return value instanceof Boolean || typeof value === 'boolean';
}
/**
 * Checks if a value is a boolean.
 */
function IsBoolean(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_BOOLEAN,
        validator: {
            validate: (value, args) => isBoolean(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a boolean value'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBoolean.js.map