"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LineChart_1 = __importDefault(require("./LineChart"));
var TopPlaces_1 = __importDefault(require("./TopPlaces"));
var mockData_1 = require("../components/mockData");
require("./ChartsContainer.scss"); // Import the SCSS file for ChartsContainer
var ChartsContainer = function () {
    return (react_1.default.createElement("div", { className: "charts-container" },
        react_1.default.createElement("div", { className: "chart-item" },
            react_1.default.createElement(LineChart_1.default, { data: mockData_1.mockLineData })),
        react_1.default.createElement("div", { className: "chart-item top-places-container" },
            react_1.default.createElement(TopPlaces_1.default, { places: mockData_1.mockTopPlaces }))));
};
exports.default = ChartsContainer;
