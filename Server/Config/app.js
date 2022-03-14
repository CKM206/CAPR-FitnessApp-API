"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('../Models/User');
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const requireAuth = require('../middlewares/requireAuth');
const index_1 = __importDefault(require("../Routes/index"));
const auth_1 = __importDefault(require("../Routes/auth"));
const app = (0, express_1.default)();
app.set('views', path_1.default.join(__dirname, '../Views/'));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
exports.default = app;
app.use(express_1.default.static(path_1.default.join(__dirname, '../../Client/')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../node_modules/')));
const DBConfig = __importStar(require("./db"));
mongoose_1.default.connect(DBConfig.RemoteURI);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Connect Error:'));
db.once('open', function () {
    console.log(`Connected to MongoDB at: ${DBConfig.Host}`);
});
app.use(auth_1.default);
app.use('/', requireAuth, index_1.default);
//# sourceMappingURL=app.js.map