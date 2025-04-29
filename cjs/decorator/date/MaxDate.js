"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_DATE = void 0;
exports.maxDate = maxDate;
exports.MaxDate = MaxDate;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.MAX_DATE = 'maxDate';
/**
 * Checks if the value is a date that's before the specified date.
 */
function maxDate(date, maxDate) {
    return date instanceof Date && date.getTime() <= (maxDate instanceof Date ? maxDate : maxDate()).getTime();
}
/**
 * Checks if the value is a date that's after the specified date.
 */
function MaxDate(date, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MAX_DATE,
        constraints: [date],
        validator: {
            validate: (value, args) => maxDate(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => (0, multi_lang_1.getText)('maximal allowed date for ') + eachPrefix + (0, multi_lang_1.getText)('$property is $constraint1'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=MaxDate.js.map