"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.app.get('/', function (req, res) { return res.json({ ok: true }); });
    }
    App.prototype.config = function () {
        var accessControl = function (_req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    };
    App.prototype.start = function (PORT) {
        this.app.listen(PORT, function () { return console.log("Running on port " + PORT); });
    };
    return App;
}());
exports.App = App;
exports.app = new App().app;
