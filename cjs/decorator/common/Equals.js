"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EQUALS = void 0;
exports.equals = equals;
exports.Equals = Equals;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.EQUALS = 'equals';
/**
 * Checks if value matches ("===") the comparison.
 */
function equals(value, comparison) {
    return value === comparison;
}
/**
 * Checks if value matches ("===") the comparison.
 */
function Equals(comparison, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => equals(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be equal to $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Equals.js.map