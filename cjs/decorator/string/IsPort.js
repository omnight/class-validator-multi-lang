"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PORT = void 0;
exports.isPort = isPort;
exports.IsPort = IsPort;
const ValidateBy_1 = require("../common/ValidateBy");
const isPort_1 = __importDefault(require("validator/lib/isPort"));
const multi_lang_1 = require("../../multi-lang");
exports.IS_PORT = 'isPort';
/**
 * Check if the string is a valid port number.
 */
function isPort(value) {
    return typeof value === 'string' && (0, isPort_1.default)(value);
}
/**
 * Check if the string is a valid port number.
 */
function IsPort(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_PORT,
        validator: {
            validate: (value, args) => isPort(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a port'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsPort.js.map