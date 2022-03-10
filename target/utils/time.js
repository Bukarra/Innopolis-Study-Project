"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomToMax = getRandomToMax;
exports.toHour = toHour;
exports.toMinutes = toMinutes;

function getRandomToMax(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

function toHour(num) {
  return "".concat(num).padStart(2, '0');
}

function toMinutes(num) {
  return "".concat(num).padEnd(2, '0');
}
//# sourceMappingURL=time.js.map