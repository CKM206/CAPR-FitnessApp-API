"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = exports.Secret = exports.RemoteURI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
exports.RemoteURI = process.env.DB_URI;
exports.Secret = process.env.SECRET;
exports.Host = "MongoDB Atlas";
//# sourceMappingURL=db.js.map