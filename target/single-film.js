"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchParams = new URLSearchParams(location.search);
var filmId = searchParams.get('id');

var fetchKinopoiskFilmData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var answer, filmInfo, header, description, posterImage, premiereYear;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return filmDetailsRequest(filmId);

          case 2:
            answer = _context.sent;
            _context.next = 5;
            return answer.json();

          case 5:
            filmInfo = _context.sent;
            header = document.getElementById('sf-header');
            description = document.querySelector('#sf-description');
            posterImage = document.querySelector('#sf-poster');
            premiereYear = document.getElementById('sf-premiere');
            header.textContent = filmInfo.nameRu;
            description.textContent = filmInfo.description;
            posterImage.src = filmInfo.posterUrl;
            premiereYear.textContent = filmInfo.year;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchKinopoiskFilmData() {
    return _ref.apply(this, arguments);
  };
}();

fetchKinopoiskFilmData(); // filmDetailsRequest(filmId)
//     .then(answer => answer.json())
//     .then((filmInfo) => {
//         const header = document.getElementById('sf-header');
//         const description = document.querySelector('#sf-description');
//         const posterImage = document.querySelector('#sf-poster');
//         const premiereYear = document.getElementById('sf-premiere');
//         header.textContent = filmInfo.nameRu;
//         description.textContent = filmInfo.description;
//         posterImage.src = filmInfo.posterUrl;
//         premiereYear.textContent = filmInfo.year;
//     })
//# sourceMappingURL=single-film.js.map