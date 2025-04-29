"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_TAX_ID = void 0;
exports.isTaxId = isTaxId;
exports.IsTaxId = IsTaxId;
const multi_lang_1 = require("../../multi-lang");
const ValidateBy_1 = require("../common/ValidateBy");
const isTaxID_1 = __importDefault(require("validator/lib/isTaxID"));
exports.IS_TAX_ID = 'isTaxId';
/**
 * Checks if the string is a valid tax ID. Default locale is `en-US`.
 * If given value is not a string, then it returns false.
 *
 * Supported locales: bg-BG, cs-CZ, de-AT, de-DE, dk-DK, el-CY, el-GR, en-CA,
 * en-IE, en-US, es-ES, et-EE, fi-FI, fr-BE, fr-FR, fr-LU, hr-HR, hu-HU, it-IT,
 * lv-LV, mt-MT, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, sk-SK, sl-SI, sv-SE.
 */
function isTaxId(value, locale) {
    return typeof value === 'string' && (0, isTaxID_1.default)(value, locale || 'en-US');
}
/**
 * Checks if the string is a valid tax ID. Default locale is `en-US`.
 * If given value is not a string, then it returns false.
 *
 * Supported locales: bg-BG, cs-CZ, de-AT, de-DE, dk-DK, el-CY, el-GR, en-CA,
 * en-IE, en-US, es-ES, et-EE, fi-FI, fr-BE, fr-FR, fr-LU, hr-HR, hu-HU, it-IT,
 * lv-LV, mt-MT, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, sk-SK, sl-SI, sv-SE.
 */
function IsTaxId(locale, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_TAX_ID,
        constraints: [locale],
        validator: {
            validate: (value, args) => isTaxId(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a Tax Identification Number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=is-tax-id.js.map