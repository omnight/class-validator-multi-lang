"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = getText;
const messages_storage_1 = require("./messages.storage");
const CLASS_VALIDATOR_MESSAGE_MARKER = '__I18N__';
function getText(s) {
    return (0, messages_storage_1.getClassValidatorMessage)(s) ? [CLASS_VALIDATOR_MESSAGE_MARKER, s, CLASS_VALIDATOR_MESSAGE_MARKER].join('') : s;
}
//# sourceMappingURL=get-text.util.js.map