"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_chartjs_2_1 = require("react-chartjs-2");
require("chart.js/auto");
require("./StatsCardWithLineChart.scss");
var StatsCardWithLineChart = function (_a) {
    var title = _a.title, value = _a.value, trend = _a.trend, description = _a.description, lineChartData = _a.lineChartData;
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };
    return (react_1.default.createElement("div", { className: "stats-card-with-line-chart" },
        react_1.default.createElement("div", { className: "card-content" },
            react_1.default.createElement("h3", null, value),
            react_1.default.createElement("p", { className: "title" }, title),
            react_1.default.createElement("p", { className: "trend" }, trend),
            react_1.default.createElement("p", { className: "description" }, description)),
        react_1.default.createElement("div", { className: "line-chart-container" },
            react_1.default.createElement(react_chartjs_2_1.Line, { data: lineChartData, options: options }))));
};
exports.default = StatsCardWithLineChart;
