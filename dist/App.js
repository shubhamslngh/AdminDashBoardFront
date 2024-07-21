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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var packageSlice_1 = require("../src/features/packages/packageSlice");
var HomePage_1 = __importDefault(require("../src/pages/HomePage"));
var PackagesPage_1 = __importDefault(require("../src/pages/PackagesPage"));
var BookingPage_1 = __importDefault(require("../src/pages/BookingPage")); // Import BookingPage
var LoginPage_1 = __importDefault(require("../src/pages/LoginPage")); // Ensure correct import
var RegisterPage_1 = __importDefault(require("../src/pages/RegisterPage"));
var ForgotPasswordPage_1 = __importDefault(require("../src/pages/ForgotPasswordPage"));
var Topbar_1 = __importDefault(require("../src/components/global/Topbar"));
var Sidebar_1 = __importDefault(require("../src/components/global/Sidebar"));
var ProtectedRoute_1 = __importDefault(require("./components/ProtectedRoute"));
var react_redux_2 = require("react-redux");
var store_1 = __importDefault(require("./store"));
var theme_1 = require("./theme");
var material_1 = require("@mui/material");
require("./index.scss");
var theme = (0, material_1.createTheme)();
function App() {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(false), isSidebarCollapsed = _a[0], setIsSidebarCollapsed = _a[1];
    var _b = (0, theme_1.useMode)(), theme = _b[0], colorMode = _b[1];
    var _c = (0, react_1.useState)(!!localStorage.getItem('token')), isLoggedIn = _c[0], setIsLoggedIn = _c[1];
    (0, react_1.useEffect)(function () {
        dispatch((0, packageSlice_1.fetchPackages)());
    }, [dispatch]);
    var toggleSidebar = function () {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    return (react_1.default.createElement(theme_1.ColorModeContext.Provider, { value: colorMode },
        react_1.default.createElement(material_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(material_1.CssBaseline, null),
            react_1.default.createElement(react_redux_2.Provider, { store: store_1.default },
                react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                    react_1.default.createElement("div", { className: "app" },
                        react_1.default.createElement(Sidebar_1.default, { isCollapsed: isSidebarCollapsed, toggleSidebar: toggleSidebar }),
                        react_1.default.createElement("main", { className: "content" },
                            react_1.default.createElement(Topbar_1.default, { toggleSidebar: toggleSidebar, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }),
                            react_1.default.createElement(react_router_dom_1.Routes, null,
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(LoginPage_1.default, { setIsLoggedIn: setIsLoggedIn }) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/register", element: react_1.default.createElement(RegisterPage_1.default, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/forgot-password", element: react_1.default.createElement(ForgotPasswordPage_1.default, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(ProtectedRoute_1.default, { isLoggedIn: isLoggedIn },
                                        react_1.default.createElement(HomePage_1.default, null)) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/packages", element: react_1.default.createElement(ProtectedRoute_1.default, { isLoggedIn: isLoggedIn },
                                        react_1.default.createElement(PackagesPage_1.default, null)) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/booking", element: react_1.default.createElement(ProtectedRoute_1.default, { isLoggedIn: isLoggedIn },
                                        react_1.default.createElement(BookingPage_1.default, null)) })))))))));
}
exports.default = App;
