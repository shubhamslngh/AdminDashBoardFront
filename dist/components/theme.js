"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModeProvider = exports.ColorModeContext = void 0;
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var themeSlice_1 = require("../../features/theme/themeSlice");
exports.ColorModeContext = (0, react_1.createContext)();
var ColorModeProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)('light'), mode = _b[0], setMode = _b[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (mode === 'dark') {
            dispatch((0, themeSlice_1.setDarkMode)());
        }
        else {
            dispatch((0, themeSlice_1.setLightMode)());
        }
    }, [mode, dispatch]);
    var toggleColorMode = function () {
        setMode(function (prevMode) { return (prevMode === 'light' ? 'dark' : 'light'); });
    };
    return (react_1.default.createElement(exports.ColorModeContext.Provider, { value: { toggleColorMode: toggleColorMode } }, children));
};
exports.ColorModeProvider = ColorModeProvider;
