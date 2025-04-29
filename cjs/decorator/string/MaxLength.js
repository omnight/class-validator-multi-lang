"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_LENGTH = void 0;
exports.maxLength = maxLength;
exports.MaxLength = MaxLength;
const ValidateBy_1 = require("../common/ValidateBy");
const isLength_1 = __importDefault(require("validator/lib/isLength"));
const multi_lang_1 = require("../../multi-lang");
exports.MAX_LENGTH = 'maxLength';
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function maxLength(value, max) {
    return typeof value === 'string' && (0, isLength_1.default)(value, { min: 0, max });
}
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function MaxLength(max, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MAX_LENGTH,
        constraints: [max],
        validator: {
            validate: (value, args) => maxLength(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be shorter than or equal to $constraint1 characters'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=MaxLength.js.map