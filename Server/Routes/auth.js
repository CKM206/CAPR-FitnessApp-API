"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const auth_1 = require("../Controllers/auth");
router.post('/signin', auth_1.ProcessSignIn);
router.post('/signup', auth_1.ProcessSignUp);
//# sourceMappingURL=auth.js.map