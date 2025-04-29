"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_POSTAL_CODE = void 0;
exports.isPostalCode = isPostalCode;
exports.IsPostalCode = IsPostalCode;
const ValidateBy_1 = require("../common/ValidateBy");
const isPostalCode_1 = __importDefault(require("validator/lib/isPostalCode"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_POSTAL_CODE = 'isPostalCode';
/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
function isPostalCode(value, locale) {
    return typeof value === 'string' && (0, isPostalCode_1.default)(value, locale);
}
/**
 * Check if the string is a postal code, in the specified locale.
 * If given value is not a string, then it returns false.
 */
function IsPostalCode(locale, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_POSTAL_CODE,
        constraints: [locale],
        validator: {
            validate: (value, args) => isPostalCode(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a postal code'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsPostalCode.js.map