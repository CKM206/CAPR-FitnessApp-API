"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessHome = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User = mongoose_1.default.model('User');
function ProcessHome(req, res, next) {
    console.log('Got Here');
    res.send('You are at the Home Route!');
}
exports.ProcessHome = ProcessHome;
//# sourceMappingURL=index.js.map