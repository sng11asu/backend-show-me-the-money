"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.baseUrl = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("cors"));
exports.baseUrl = 'http://127.0.0.1:3000/';
exports.app = (0, express_1.default)();
const port = 3100;
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use('/api', routes_1.default);
exports.app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
