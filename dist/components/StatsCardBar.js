"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./StatCard.scss"); // Import the SCSS file for StatsCard
var WorldChart_1 = __importDefault(require("./WorldChart")); // Import the WorldChart component
var StatsCardBar = function (_a) {
    var chartData = _a.chartData;
    return (react_1.default.createElement("div", { className: "stats-card" },
        react_1.default.createElement("h1", null, "Official Data"),
        react_1.default.createElement("div", { className: "chart-container h-[100px] w-[100px]" },
            react_1.default.createElement(WorldChart_1.default, { data: chartData }))));
};
exports.default = StatsCardBar;
