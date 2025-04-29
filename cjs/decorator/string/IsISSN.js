"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_ISSN = void 0;
exports.isISSN = isISSN;
exports.IsISSN = IsISSN;
const ValidateBy_1 = require("../common/ValidateBy");
const isISSN_1 = __importDefault(require("validator/lib/isISSN"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_ISSN = 'isISSN';
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function isISSN(value, options) {
    return typeof value === 'string' && (0, isISSN_1.default)(value, options);
}
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function IsISSN(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ISSN,
        constraints: [options],
        validator: {
            validate: (value, args) => isISSN(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a ISSN'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISSN.js.map