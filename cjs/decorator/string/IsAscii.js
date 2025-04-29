"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_ASCII = void 0;
exports.isAscii = isAscii;
exports.IsAscii = IsAscii;
const ValidateBy_1 = require("../common/ValidateBy");
const isAscii_1 = __importDefault(require("validator/lib/isAscii"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_ASCII = 'isAscii';
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
function isAscii(value) {
    return typeof value === 'string' && (0, isAscii_1.default)(value);
}
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
function IsAscii(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ASCII,
        validator: {
            validate: (value, args) => isAscii(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must contain only ASCII characters'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsAscii.js.map