"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute = function (_a) {
    var isLoggedIn = _a.isLoggedIn, children = _a.children;
    if (!isLoggedIn) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login" });
    }
    return children;
};
exports.default = ProtectedRoute;
