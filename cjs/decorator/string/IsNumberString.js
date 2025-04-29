"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_NUMBER_STRING = void 0;
exports.isNumberString = isNumberString;
exports.IsNumberString = IsNumberString;
const ValidateBy_1 = require("../common/ValidateBy");
const isNumeric_1 = __importDefault(require("validator/lib/isNumeric"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_NUMBER_STRING = 'isNumberString';
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
function isNumberString(value, options) {
    return typeof value === 'string' && (0, isNumeric_1.default)(value, options);
}
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
function IsNumberString(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_NUMBER_STRING,
        constraints: [options],
        validator: {
            validate: (value, args) => isNumberString(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a number string'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNumberString.js.map