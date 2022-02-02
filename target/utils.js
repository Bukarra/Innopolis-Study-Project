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

var kinopoiskapiunofficialRequest = function kinopoiskapiunofficialRequest(url) {
  return fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': '5ba46513-d50f-4e8e-860e-e354b5ebbaa6'
    },
    cors: 'no-cors'
  });
};

var topfilmsRequest = function topfilmsRequest() {
  return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
};

var filmDetailsRequest = function filmDetailsRequest(id) {
  return kinopoiskapiunofficialRequest("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(id));
};
//# sourceMappingURL=utils.js.map