"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./StatCard.scss"); // Import the SCSS file for StatsCard
var StatsCard = function (_a) {
    var title = _a.title, value = _a.value, change = _a.change, changeType = _a.changeType;
    return (react_1.default.createElement("div", { className: "stats-card1" },
        react_1.default.createElement("h3", null, value),
        react_1.default.createElement("p", null, title),
        react_1.default.createElement("p", { className: "change ".concat(changeType) }, change)));
};
exports.default = StatsCard;
