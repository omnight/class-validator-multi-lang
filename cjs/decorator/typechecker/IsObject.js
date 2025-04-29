"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_OBJECT = void 0;
exports.isObject = isObject;
exports.IsObject = IsObject;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_OBJECT = 'isObject';
/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
function isObject(value) {
    return value != null && (typeof value === 'object' || typeof value === 'function') && !Array.isArray(value);
}
/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
function IsObject(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_OBJECT,
        validator: {
            validate: (value, args) => isObject(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be an object'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsObject.js.map