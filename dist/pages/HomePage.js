"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LineChart_1 = __importDefault(require("../components/LineChart"));
var WorldChart_1 = __importDefault(require("../components/WorldChart"));
var WorldChartData_1 = require("../components/WorldChartData");
var mockData_1 = require("../components/mockData");
var TopPlaces_1 = __importDefault(require("../components/TopPlaces"));
var Header_1 = __importDefault(require("../components/Header"));
var StatCards_1 = __importDefault(require("../components/StatCards"));
var StatsCardBar_1 = __importDefault(require("../components/StatsCardBar"));
require("./HomePage.scss"); // Import the SCSS file
var StatsCardWithLineChart_1 = __importDefault(require("../components/StatsCardWithLineChart"));
var HomePage = function () {
    return (react_1.default.createElement("div", { className: "homepage-container" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { className: "stats-container" },
            react_1.default.createElement(StatsCardWithLineChart_1.default, { title: "Total Customer", value: "307.48K", trend: "+30", description: "This month", lineChartData: mockData_1.mockLine1Data }),
            react_1.default.createElement(StatsCardWithLineChart_1.default, { title: "Total Customer", value: "490.48$", trend: "+40", description: "This month", lineChartData: mockData_1.mockLine1Data }),
            react_1.default.createElement("div", null,
                react_1.default.createElement(StatsCardBar_1.default, { chartData: WorldChartData_1.WorldChartData }))),
        react_1.default.createElement("div", { className: "charts-container" },
            react_1.default.createElement("div", { className: "chart-item" },
                react_1.default.createElement(LineChart_1.default, { data: mockData_1.mockLineData })),
            react_1.default.createElement("div", { className: "chart-item top-places-container" },
                react_1.default.createElement(TopPlaces_1.default, { places: mockData_1.mockTopPlaces })))));
};
exports.default = HomePage;
