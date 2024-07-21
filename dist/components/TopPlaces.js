"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = __importDefault(require("../utils"));
require("./TopPlaces.scss"); // Import the SASS file for styling
var TopPlaces = function (_a) {
    var places = _a.places;
    return (react_1.default.createElement("div", { className: "top-places-containe h-full w-full" },
        react_1.default.createElement("h2", null, "Top Places"),
        react_1.default.createElement("ul", null, places.map(function (place, index) { return (react_1.default.createElement("li", { key: index, className: "top-place-item" },
            react_1.default.createElement("span", { className: "place-name" }, place),
            react_1.default.createElement("span", { className: "place-price" },
                "\u20B9",
                (0, utils_1.default)()))); }))));
};
exports.default = TopPlaces;
