"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTAINS = void 0;
exports.contains = contains;
exports.Contains = Contains;
const ValidateBy_1 = require("../common/ValidateBy");
const contains_1 = __importDefault(require("validator/lib/contains"));
const multi_lang_1 = require("../../multi-lang");
exports.CONTAINS = 'contains';
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
function contains(value, seed) {
    return typeof value === 'string' && (0, contains_1.default)(value, seed);
}
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
function Contains(seed, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.CONTAINS,
        constraints: [seed],
        validator: {
            validate: (value, args) => contains(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must contain a $constraint1 string'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Contains.js.map