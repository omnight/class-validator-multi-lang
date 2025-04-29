"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_BASE58 = void 0;
exports.isBase58 = isBase58;
exports.IsBase58 = IsBase58;
const multi_lang_1 = require("../../multi-lang");
const ValidateBy_1 = require("../common/ValidateBy");
const isBase58_1 = __importDefault(require("validator/lib/isBase58"));
exports.IS_BASE58 = 'isBase58';
/**
 * Checks if a string is base58 encoded.
 * If given value is not a string, then it returns false.
 */
function isBase58(value) {
    return typeof value === 'string' && (0, isBase58_1.default)(value);
}
/**
 * Checks if a string is base58 encoded.
 * If given value is not a string, then it returns false.
 */
function IsBase58(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_BASE58,
        validator: {
            validate: (value, args) => isBase58(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be base58 encoded'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBase58.js.map