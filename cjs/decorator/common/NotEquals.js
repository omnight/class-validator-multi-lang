"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOT_EQUALS = void 0;
exports.notEquals = notEquals;
exports.NotEquals = NotEquals;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.NOT_EQUALS = 'notEquals';
/**
 * Checks if value does not match ("!==") the comparison.
 */
function notEquals(value, comparison) {
    return value !== comparison;
}
/**
 * Checks if value does not match ("!==") the comparison.
 */
function NotEquals(comparison, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.NOT_EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => notEquals(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property should not be equal to $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=NotEquals.js.map