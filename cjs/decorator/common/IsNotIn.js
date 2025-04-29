"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_NOT_IN = void 0;
exports.isNotIn = isNotIn;
exports.IsNotIn = IsNotIn;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_NOT_IN = 'isNotIn';
/**
 * Checks if given value not in a array of allowed values.
 */
function isNotIn(value, possibleValues) {
    return !Array.isArray(possibleValues) || !possibleValues.some(possibleValue => possibleValue === value);
}
/**
 * Checks if given value not in a array of allowed values.
 */
function IsNotIn(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_NOT_IN,
        constraints: [values],
        validator: {
            validate: (value, args) => isNotIn(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property should not be one of the following values: $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNotIn.js.map