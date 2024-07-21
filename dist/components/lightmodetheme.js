"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.tokens = void 0;
var react_1 = require("react");
var tokens = function (mode) { return ({
    primary: {
        100: mode === 'dark' ? '#d1c4e9' : '#673ab7',
        200: mode === 'dark' ? '#b39ddb' : '#512da8',
        300: mode === 'dark' ? '#9575cd' : '#4527a0',
        400: mode === 'dark' ? '#7e57c2' : '#311b92',
        500: mode === 'dark' ? '#673ab7' : '#b39ddb',
    },
    grey: {
        100: mode === 'dark' ? '#f5f5f5' : '#212121',
        200: mode === 'dark' ? '#eeeeee' : '#424242',
        300: mode === 'dark' ? '#e0e0e0' : '#616161',
        400: mode === 'dark' ? '#bdbdbd' : '#9e9e9e',
    },
}); };
exports.tokens = tokens;
var useTheme = function () {
    var _a = (0, react_1.useState)({
        palette: {
            mode: 'light', // change this to 'dark' if you want dark mode
        },
    }), theme = _a[0], setTheme = _a[1];
    // Optional: Add logic to toggle between light and dark mode
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return ({
            palette: {
                mode: prevTheme.palette.mode === 'light' ? 'dark' : 'light',
            },
        }); });
    };
    return [theme, toggleTheme];
};
exports.useTheme = useTheme;
