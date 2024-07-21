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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var axiosServices_1 = __importDefault(require("../axiosServices")); // Ensure this is the correct path to your API service
var LoginPage_module_scss_1 = __importDefault(require("./LoginPage.module.scss"));
var LoginPage = function (_a) {
    var setIsLoggedIn = _a.setIsLoggedIn;
    var _b = (0, react_1.useState)(""), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var _d = (0, react_1.useState)(""), error = _d[0], setError = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var token = localStorage.getItem("token"); //fake Login we need to connect to cloud
        if (!token) {
            setIsLoggedIn(true);
            navigate("/"); // Redirect to homepage or another page
        }
    }, [navigate, setIsLoggedIn]);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axiosServices_1.default.login(username, password)];
                case 2:
                    data = _a.sent();
                    localStorage.setItem("token", data.access);
                    localStorage.setItem("refresh_token", data.refresh);
                    setIsLoggedIn(true);
                    window.location.reload();
                    navigate("/");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setError("Invalid credentials. Please try again.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: LoginPage_module_scss_1.default.container },
        react_1.default.createElement("div", { className: LoginPage_module_scss_1.default.card },
            react_1.default.createElement("h2", { className: LoginPage_module_scss_1.default.title }, "Please Login or Register"),
            error && react_1.default.createElement("p", { className: LoginPage_module_scss_1.default.error }, error),
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("label", { htmlFor: "username", className: LoginPage_module_scss_1.default.label }, "Username"),
                    react_1.default.createElement("input", { type: "text", id: "username", placeholder: "Username", className: LoginPage_module_scss_1.default.input, value: username, onChange: function (e) { return setUsername(e.target.value); }, required: true })),
                react_1.default.createElement("div", { className: "mb-6" },
                    react_1.default.createElement("label", { htmlFor: "password", className: LoginPage_module_scss_1.default.label }, "Password"),
                    react_1.default.createElement("input", { type: "password", id: "password", placeholder: "Password", className: LoginPage_module_scss_1.default.input, value: password, onChange: function (e) { return setPassword(e.target.value); }, required: true })),
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("button", { type: "submit", className: LoginPage_module_scss_1.default.button }, "Login")),
                react_1.default.createElement("div", { className: LoginPage_module_scss_1.default.links },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/register", className: LoginPage_module_scss_1.default.link }, "Register"),
                    react_1.default.createElement("span", { className: LoginPage_module_scss_1.default.separator }, "|"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/forgot-password", className: LoginPage_module_scss_1.default.link }, "Forgot Password?"))))));
};
exports.default = LoginPage;
