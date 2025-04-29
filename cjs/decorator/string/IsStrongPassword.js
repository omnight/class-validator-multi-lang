"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_STRONG_PASSWORD = void 0;
exports.isStrongPassword = isStrongPassword;
exports.IsStrongPassword = IsStrongPassword;
const validator_1 = __importDefault(require("validator"));
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_STRONG_PASSWORD = 'isStrongPassword';
/**
 * Checks if the string is a strong password.
 * If given value is not a string, then it returns false.
 */
function isStrongPassword(value, options) {
    return typeof value === 'string' && validator_1.default.isStrongPassword(value, options);
}
/**
 * Checks if the string is a strong password.
 * If given value is not a string, then it returns false.
 */
function IsStrongPassword(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_STRONG_PASSWORD,
        constraints: [options],
        validator: {
            validate: (value, args) => isStrongPassword(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property is not strong enough'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsStrongPassword.js.map