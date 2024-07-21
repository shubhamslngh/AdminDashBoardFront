"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var packageSlice_1 = __importDefault(require("../src/features/packages/packageSlice"));
var bookingsSlice_1 = __importDefault(require("../src/features/booking/bookingsSlice"));
var authSlice_1 = __importDefault(require("../src/features/auth/authSlice"));
var store = (0, toolkit_1.configureStore)({
    reducer: {
        packages: packageSlice_1.default,
        bookings: bookingsSlice_1.default,
        auth: authSlice_1.default,
    },
});
exports.default = store;
