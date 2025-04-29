"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToArray = convertToArray;
/**
 * Convert Map, Set to Array
 */
function convertToArray(val) {
    if (val instanceof Map) {
        return Array.from(val.values());
    }
    return Array.isArray(val) ? val : Array.from(val);
}
//# sourceMappingURL=convert-to-array.util.js.map