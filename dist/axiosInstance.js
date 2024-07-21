"use strict";
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
var axios_1 = __importDefault(require("axios"));
var jwt_decode_1 = require("jwt-decode"); // Correctly import the named export
var axiosInstance = axios_1.default.create({
    baseURL: 'https://thsdashboard-uue5tgbgyq-uc.a.run.app/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});
axiosInstance.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = "Bearer ".concat(token);
        }
        return [2 /*return*/, config];
    });
}); }, function (error) {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var originalRequest, refreshToken, tokenParts, now, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originalRequest = error.config;
                if (!(error.response.status === 401 && !originalRequest._retry)) return [3 /*break*/, 8];
                originalRequest._retry = true;
                refreshToken = localStorage.getItem('refresh_token');
                if (!refreshToken) return [3 /*break*/, 7];
                tokenParts = (0, jwt_decode_1.jwtDecode)(refreshToken);
                now = Math.ceil(Date.now() / 1000);
                if (!(tokenParts.exp > now)) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axiosInstance.post('/token/refresh/', { refresh: refreshToken })];
            case 2:
                response = _a.sent();
                localStorage.setItem('token', response.data.access);
                axiosInstance.defaults.headers['Authorization'] = "Bearer ".concat(response.data.access);
                originalRequest.headers['Authorization'] = "Bearer ".concat(response.data.access);
                return [2 /*return*/, axiosInstance(originalRequest)];
            case 3:
                err_1 = _a.sent();
                console.error('Refresh token failed', err_1);
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login'; // Redirect to login
                return [2 /*return*/, Promise.reject(err_1)];
            case 4: return [3 /*break*/, 6];
            case 5:
                console.log('Refresh token is expired');
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login'; // Redirect to login
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                console.log('Refresh token not available.');
                window.location.href = '/login'; // Redirect to login
                _a.label = 8;
            case 8: return [2 /*return*/, Promise.reject(error)];
        }
    });
}); });
exports.default = axiosInstance;
