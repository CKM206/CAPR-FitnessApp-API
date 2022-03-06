#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./Server/Config/app"));
const debug_1 = __importDefault(require("debug"));
const dotenv_1 = __importDefault(require("dotenv"));
(0, debug_1.default)('fitness-app-server');
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
let port = normalizePort(process.env.PORT || process.env.LOCAL_PORT);
app_1.default.set('port', port);
app_1.default.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
//# sourceMappingURL=index.js.map