"use strict";

function getRandomToMax(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

function toHour(num) {
  return "".concat(num).padStart(2, '0');
}

function toMinutes(num) {
  return "".concat(num).padEnd(2, '0');
}