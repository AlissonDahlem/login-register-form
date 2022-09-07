"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
require("express-async-errors");
const ErrorMiddleware_1 = require("./middleware/ErrorMiddleware");
const userRoutes_1 = require("./routes/userRoutes");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.app.get('/serverStatus', (req, res) => res.json({ ok: true }));
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
        this.app.use('/user', userRoutes_1.default);
        this.app.use(ErrorMiddleware_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map