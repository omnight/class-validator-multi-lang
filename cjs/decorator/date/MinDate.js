"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_DATE = void 0;
exports.minDate = minDate;
exports.MinDate = MinDate;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.MIN_DATE = 'minDate';
/**
 * Checks if the value is a date that's after the specified date.
 */
function minDate(date, minDate) {
    return date instanceof Date && date.getTime() >= (minDate instanceof Date ? minDate : minDate()).getTime();
}
/**
 * Checks if the value is a date that's after the specified date.
 */
function MinDate(date, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MIN_DATE,
        constraints: [date],
        validator: {
            validate: (value, args) => minDate(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => (0, multi_lang_1.getText)('minimal allowed date for ') + eachPrefix + (0, multi_lang_1.getText)('$property is $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=MinDate.js.map