"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_SURROGATE_PAIR = void 0;
exports.isSurrogatePair = isSurrogatePair;
exports.IsSurrogatePair = IsSurrogatePair;
const ValidateBy_1 = require("../common/ValidateBy");
const isSurrogatePair_1 = __importDefault(require("validator/lib/isSurrogatePair"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_SURROGATE_PAIR = 'isSurrogatePair';
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
function isSurrogatePair(value) {
    return typeof value === 'string' && (0, isSurrogatePair_1.default)(value);
}
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
function IsSurrogatePair(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_SURROGATE_PAIR,
        validator: {
            validate: (value, args) => isSurrogatePair(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must contain any surrogate pairs chars'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsSurrogatePair.js.map