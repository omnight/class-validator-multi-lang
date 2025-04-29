"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_FQDN = void 0;
exports.isFQDN = isFQDN;
exports.IsFQDN = IsFQDN;
const ValidateBy_1 = require("../common/ValidateBy");
const isFQDN_1 = __importDefault(require("validator/lib/isFQDN"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_FQDN = 'isFqdn';
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
function isFQDN(value, options) {
    return typeof value === 'string' && (0, isFQDN_1.default)(value, options);
}
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
function IsFQDN(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_FQDN,
        constraints: [options],
        validator: {
            validate: (value, args) => isFQDN(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a valid domain name'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsFQDN.js.map