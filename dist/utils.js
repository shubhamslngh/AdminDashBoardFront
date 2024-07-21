"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPrice = void 0;
exports.cn = cn;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
var getRandomPrice = function () {
    var min = 1000;
    var max = 50000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomPrice = getRandomPrice;
