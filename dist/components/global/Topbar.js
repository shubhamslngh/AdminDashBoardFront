"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../../features/auth/authSlice");
require("./TopBar.scss"); // Import the SCSS file
var Header_1 = __importDefault(require("../../components/Header"));
var Topbar = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var token = (0, react_redux_1.useSelector)(function (state) { return state.auth.token; });
    var handleLogout = function () {
        dispatch((0, authSlice_1.logout)());
        navigate("/login"); // Redirect to login page
        window.location.reload();
    };
    return (react_1.default.createElement("div", { className: "topbar place-items-end" },
        react_1.default.createElement("div", { className: "searh-bar " }),
        react_1.default.createElement("div", { className: "icons" },
            react_1.default.createElement("button", { className: "icon-button" },
                react_1.default.createElement("i", { className: "fas fa-sun" })),
            react_1.default.createElement("button", { className: "icon-button" },
                react_1.default.createElement("i", { className: "fas fa-bell" })),
            react_1.default.createElement("div", { className: "search-bar p-3 flex" },
                react_1.default.createElement("input", { type: "text", placeholder: "Search", className: "search-input" }),
                react_1.default.createElement("button", { className: "icon-button" },
                    react_1.default.createElement("i", { className: "fas fa-search" }))),
            react_1.default.createElement("button", { className: "icon-button" },
                react_1.default.createElement("i", { className: "fas fa-cog" })),
            react_1.default.createElement("button", { className: "icon-button" },
                react_1.default.createElement("img", { className: "avatar", src: "https://www.bootstrap.gallery/demos/arise-admin-dashboard/assets/images/user.png", alt: "User Avatar" })),
            token ? (react_1.default.createElement("button", { className: "btn btn-logout", onClick: handleLogout }, "Logout")) : (react_1.default.createElement("button", { className: "btn btn-login", onClick: function () { return navigate("/login"); } }, "Login")))));
};
exports.default = Topbar;
