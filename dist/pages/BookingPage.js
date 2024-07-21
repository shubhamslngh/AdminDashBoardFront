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
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var bookingsSlice_1 = require("../features/booking/bookingsSlice");
var DataTable_1 = __importDefault(require("../components/DataTable")); // Import your DataTable component
var BookingPage = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var bookings = (0, react_redux_1.useSelector)(function (state) { return state.bookings.bookings; });
    var bookingsStatus = (0, react_redux_1.useSelector)(function (state) { return state.bookings.status; });
    var error = (0, react_redux_1.useSelector)(function (state) { return state.bookings.error; });
    (0, react_1.useEffect)(function () {
        if (bookingsStatus === "idle") {
            dispatch((0, bookingsSlice_1.fetchBookings)());
        }
    }, [bookingsStatus, dispatch]);
    var columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "booking_date", headerName: "DATE of BOOKING", width: 150 },
        { field: "travel_date", headerName: "Travel date", width: 150 },
        { field: "status", headerName: "Status", width: 150 },
    ];
    var handleNewBooking = function () {
        navigate('/new-booking');
    };
    return (react_1.default.createElement("div", { style: { height: 400, width: "100%" } },
        react_1.default.createElement("div", { className: "flex justify-between items-center p-10 mb-4" },
            react_1.default.createElement("h1", { className: "text-2xl place-items-start font-bold" }, "Bookings"),
            react_1.default.createElement("button", { onClick: handleNewBooking, className: "bg-blue-500 text-white px-4 py-2 rounded" }, "New Booking")),
        bookingsStatus === "loading" && react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Please login to Access!!!")),
        bookingsStatus === "succeeded" && (react_1.default.createElement(DataTable_1.default, { rows: bookings, columns: columns, initialHiddenColumns: [] })),
        bookingsStatus === "failed" && react_1.default.createElement("div", null, error)));
};
exports.default = BookingPage;
