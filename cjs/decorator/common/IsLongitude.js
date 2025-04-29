"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_LONGITUDE = void 0;
exports.isLongitude = isLongitude;
exports.IsLongitude = IsLongitude;
const ValidateBy_1 = require("./ValidateBy");
const IsLatLong_1 = require("./IsLatLong");
const multi_lang_1 = require("../../multi-lang");
exports.IS_LONGITUDE = 'isLongitude';
/**
 * Checks if a given value is a longitude.
 */
function isLongitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && (0, IsLatLong_1.isLatLong)(`0,${value}`);
}
/**
 * Checks if a given value is a longitude.
 */
function IsLongitude(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_LONGITUDE,
        validator: {
            validate: (value, args) => isLongitude(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be a longitude string or number'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLongitude.js.map