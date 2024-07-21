"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client"); // Import createRoot from react-dom/client
require("./index.scss");
var App_1 = __importDefault(require("./App"));
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store");
// Create a root and render the App component
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
    react_1.default.createElement(App_1.default, null)));
