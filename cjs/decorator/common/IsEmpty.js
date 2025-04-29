"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_EMPTY = void 0;
exports.isEmpty = isEmpty;
exports.IsEmpty = IsEmpty;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_EMPTY = 'isEmpty';
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
function isEmpty(value) {
    return value === '' || value === null || value === undefined;
}
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
function IsEmpty(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_EMPTY,
        validator: {
            validate: (value, args) => isEmpty(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be empty'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEmpty.js.map