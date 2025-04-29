"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_ENUM = void 0;
exports.isEnum = isEnum;
exports.IsEnum = IsEnum;
const ValidateBy_1 = require("../common/ValidateBy");
const multi_lang_1 = require("../../multi-lang");
exports.IS_ENUM = 'isEnum';
/**
 * Checks if a given value is the member of the provided enum.
 */
function isEnum(value, entity) {
    const enumValues = Object.keys(entity).map(k => entity[k]);
    return enumValues.includes(value);
}
/**
 * Returns the possible values from an enum (both simple number indexed and string indexed enums).
 */
function validEnumValues(entity) {
    return Object.entries(entity)
        .filter(([key, value]) => isNaN(parseInt(key)))
        .map(([key, value]) => value);
}
/**
 * Checks if a given value is the member of the provided enum.
 */
function IsEnum(entity, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ENUM,
        constraints: [entity, validEnumValues(entity)],
        validator: {
            validate: (value, args) => isEnum(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + (0, multi_lang_1.getText)('$property must be one of the following values: $constraint2'), validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEnum.js.map