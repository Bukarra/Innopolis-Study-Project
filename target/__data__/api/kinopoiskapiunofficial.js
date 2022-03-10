"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topfilmsRequest = exports.kinopoiskapiunofficialRequest = exports.filmDetailsRequest = void 0;

var _constants = require("../constants.js");

var kinopoiskapiunofficialRequest = function kinopoiskapiunofficialRequest(url) {
  return fetch(url, {
    headers: {
      accept: 'application/json',
      'X-API-KEY': '5ba46513-d50f-4e8e-860e-e354b5ebbaa6'
    },
    cors: 'no-cors'
  });
};

exports.kinopoiskapiunofficialRequest = kinopoiskapiunofficialRequest;

var topfilmsRequest = function topfilmsRequest() {
  return kinopoiskapiunofficialRequest("".concat(_constants.KINOPOISKAPI_UNOFFICIAL_URL, "/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1"));
};

exports.topfilmsRequest = topfilmsRequest;

var filmDetailsRequest = function filmDetailsRequest(id) {
  return kinopoiskapiunofficialRequest("".concat(_constants.KINOPOISKAPI_UNOFFICIAL_URL, "/v2.2/films/").concat(id));
};

exports.filmDetailsRequest = filmDetailsRequest;
//# sourceMappingURL=kinopoiskapiunofficial.js.map