"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMessage = buildMessage;
exports.ValidateBy = ValidateBy;
const register_decorator_1 = require("../../register-decorator");
function buildMessage(impl, validationOptions) {
    return (validationArguments) => {
        const eachPrefix = validationOptions && validationOptions.each ? 'each value in ' : '';
        return impl(eachPrefix, validationArguments);
    };
}
function ValidateBy(options, validationOptions) {
    return function (object, propertyName) {
        (0, register_decorator_1.registerDecorator)({
            name: options.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: options.constraints,
            validator: options.validator,
        });
    };
}
//# sourceMappingURL=ValidateBy.js.map