"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassValidatorMessagesStorage = getClassValidatorMessagesStorage;
exports.setClassValidatorMessages = setClassValidatorMessages;
exports.getClassValidatorMessages = getClassValidatorMessages;
exports.getClassValidatorMessage = getClassValidatorMessage;
const get_global_util_1 = require("../utils/get-global.util");
const CLASS_VALIDATOR_MESSAGES = 'CLASS_VALIDATOR_MESSAGES';
function getClassValidatorMessagesStorage() {
    const global = (0, get_global_util_1.getGlobal)();
    if (!global[CLASS_VALIDATOR_MESSAGES]) {
        global[CLASS_VALIDATOR_MESSAGES] = {};
    }
    return global[CLASS_VALIDATOR_MESSAGES];
}
function setClassValidatorMessages(messages) {
    const storageMessages = getClassValidatorMessagesStorage();
    Object.keys(storageMessages).forEach(key => delete storageMessages[key]);
    Object.assign(storageMessages, messages);
}
function getClassValidatorMessages() {
    return getClassValidatorMessagesStorage();
}
function getClassValidatorMessage(key) {
    const messages = getClassValidatorMessagesStorage();
    return messages[key];
}
//# sourceMappingURL=messages.storage.js.map