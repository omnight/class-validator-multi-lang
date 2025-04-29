"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX = void 0;
exports.max = max;
exports.Max = Max;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.MAX = 'max';
/**
 * Checks if the first number is less than or equal to the second.
 */
function max(num, max) {
    return typeof num === 'number' && typeof max === 'number' && num <= max;
}
/**
 * Checks if the value is less than or equal to the allowed maximum value.
 */
function Max(maxValue, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MAX,
        constraints: [maxValue],
        validator: {
            validate: (value, args) => max(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must not be greater than $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Max.js.map