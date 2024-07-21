"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Header.scss"); // Import the SCSS file for Header
var Header = function () {
    return (react_1.default.createElement("div", { className: "header" },
        react_1.default.createElement("div", { className: "welcome-message" }, "Welcome Back, Here's what happening with your dashboard today")));
};
exports.default = Header;
