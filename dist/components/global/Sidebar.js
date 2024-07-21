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
var react_pro_sidebar_1 = require("react-pro-sidebar");
var react_router_dom_1 = require("react-router-dom");
require("react-pro-sidebar/dist/css/styles.css");
require("./Sidebar.scss"); // Import the SCSS file
var HomeOutlined_1 = __importDefault(require("@mui/icons-material/HomeOutlined"));
var MenuOutlined_1 = __importDefault(require("@mui/icons-material/MenuOutlined"));
var CancelPresentationOutlined_1 = __importDefault(require("@mui/icons-material/CancelPresentationOutlined"));
var MovieOutlined_1 = __importDefault(require("@mui/icons-material/MovieOutlined"));
var BusinessOutlined_1 = __importDefault(require("@mui/icons-material/BusinessOutlined"));
var LocalOfferOutlined_1 = __importDefault(require("@mui/icons-material/LocalOfferOutlined"));
var Celebration_1 = __importDefault(require("@mui/icons-material/Celebration"));
var Item = function (_a) {
    var title = _a.title, to = _a.to, icon = _a.icon, selected = _a.selected, setSelected = _a.setSelected, isCollapsed = _a.isCollapsed;
    return (react_1.default.createElement(react_pro_sidebar_1.MenuItem, { active: selected === title, className: "menu-item", onClick: function () { return setSelected(title); }, icon: icon },
        !isCollapsed && react_1.default.createElement("span", null, title),
        react_1.default.createElement(react_router_dom_1.Link, { to: to })));
};
var Sidebar = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(true), isCollapsed = _b[0], setIsCollapsed = _b[1];
    var _c = (0, react_1.useState)("Dashboard"), selected = _c[0], setSelected = _c[1];
    var profileImage = process.env.PUBLIC_URL + "/black.png";
    // const profileImage = "/black.png"; 
    return (react_1.default.createElement("div", { className: "sidebar-container" },
        react_1.default.createElement(react_pro_sidebar_1.ProSidebar, { collapsed: isCollapsed, className: "pro-sidebar" },
            react_1.default.createElement(react_pro_sidebar_1.Menu, { iconShape: "square" },
                react_1.default.createElement(react_pro_sidebar_1.MenuItem, { onClick: function () { return setIsCollapsed(!isCollapsed); }, icon: react_1.default.createElement(MenuOutlined_1.default, null), className: "menu-toggle" }, !isCollapsed && (react_1.default.createElement("div", { className: "logo-container" },
                    react_1.default.createElement("span", { className: "logo-title" }, "THE HIMALYAN SQUAD"),
                    react_1.default.createElement("button", { onClick: function () { return setIsCollapsed(!isCollapsed); } },
                        react_1.default.createElement(MenuOutlined_1.default, null))))),
                !isCollapsed && (react_1.default.createElement("div", { className: "profile-section" },
                    react_1.default.createElement("div", { className: "profile-image-container" },
                        react_1.default.createElement("img", { alt: "profile-user", width: "100px", height: "100px", src: profileImage, className: "profile-image" })),
                    react_1.default.createElement("div", { className: "profile-info" },
                        react_1.default.createElement("span", { className: "profile-name" }, "Manager"),
                        react_1.default.createElement("span", { className: "profile-role" }, "Admin")))),
                react_1.default.createElement("div", { className: "menu-items" },
                    react_1.default.createElement(Item, { title: "Dashboard", to: "/", icon: react_1.default.createElement(HomeOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement("span", { className: "menu-section-title ".concat(isCollapsed ? "hidden" : "") }, "Master"),
                    react_1.default.createElement(Item, { title: "Packages", to: "/packages", icon: react_1.default.createElement(BusinessOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement(Item, { title: "Bookings", to: "/booking", icon: react_1.default.createElement(Celebration_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement(Item, { title: "Cancel Reasons", to: "/ListCancelReasons", icon: react_1.default.createElement(CancelPresentationOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement(Item, { title: "Media Type", to: "/ListMediaType", icon: react_1.default.createElement(MovieOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement(Item, { title: "Address Type", to: "/ListAddressType", icon: react_1.default.createElement(BusinessOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed }),
                    react_1.default.createElement(Item, { title: "Trips", to: "/listfoodtypes", icon: react_1.default.createElement(LocalOfferOutlined_1.default, null), selected: selected, setSelected: setSelected, isCollapsed: isCollapsed })))),
        react_1.default.createElement("div", { className: "content-area ".concat(isCollapsed ? "collapsed" : "") }, children)));
};
exports.default = Sidebar;
