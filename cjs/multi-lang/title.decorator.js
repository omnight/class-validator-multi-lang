"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassPropertyTitle = ClassPropertyTitle;
exports.ClassTitle = ClassTitle;
const titles_storage_1 = require("./titles.storage");
function ClassPropertyTitle(title) {
    return function (object, propertyName) {
        (0, titles_storage_1.setClassValidatorPropertyTitle)(object, propertyName, title);
    };
}
function ClassTitle(title, key) {
    return function (object) {
        (0, titles_storage_1.setClassValidatorTitle)(object, key, title);
    };
}
//# sourceMappingURL=title.decorator.js.map