"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidationOptions = isValidationOptions;
function isValidationOptions(val) {
    if (!val) {
        return false;
    }
    return 'each' in val || 'message' in val || 'groups' in val || 'always' in val || 'context' in val;
}
//# sourceMappingURL=ValidationOptions.js.map