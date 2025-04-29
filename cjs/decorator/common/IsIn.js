"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_IN = void 0;
exports.isIn = isIn;
exports.IsIn = IsIn;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_IN = 'isIn';
/**
 * Checks if given value is in a array of allowed values.
 */
function isIn(value, possibleValues) {
    return !Array.isArray(possibleValues) || possibleValues.some(possibleValue => possibleValue === value);
}
/**
 * Checks if given value is in a array of allowed values.
 */
function IsIn(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_IN,
        constraints: [values],
        validator: {
            validate: (value, args) => isIn(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be one of the following values: $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsIn.js.map