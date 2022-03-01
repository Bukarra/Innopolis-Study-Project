"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchParams = new URLSearchParams(location.search);
var likes = document.getElementById('sf-likes');
var stars = document.querySelectorAll('.rating-star');
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

var fetchFilmMeta = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var answer, _yield$answer$json, body, views, ratingNumber, rating, intRating, i, star;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://inno-js.ru/multystub/stc-21-03/film/".concat(filmId));

          case 2:
            answer = _context2.sent;
            _context2.next = 5;
            return answer.json();

          case 5:
            _yield$answer$json = _context2.sent;
            body = _yield$answer$json.body;
            views = document.getElementById('sf-views');
            ratingNumber = document.getElementById('sf-rating-number');
            views.textContent = "".concat(body.views, " Views");
            likes.textContent = "".concat(body.likes, " Likes");
            rating = body.ratings.reduce(function (a, b) {
              return parseInt(a) + parseInt(b);
            }, 0) / body.ratings.length;
            intRating = Math.round(rating);

            if (isNaN(intRating)) {
              ratingNumber.textContent = '0.0';
            } else {
              ratingNumber.textContent = Math.floor(rating * 10) / 10;
            }

            i = 0;

          case 15:
            if (!(i < stars.length)) {
              _context2.next = 23;
              break;
            }

            if (!(i >= intRating)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("break", 23);

          case 18:
            star = stars[i];
            star.classList.add('star_selected');

          case 20:
            i++;
            _context2.next = 15;
            break;

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchFilmMeta() {
    return _ref2.apply(this, arguments);
  };
}();

var likeIcon = document.querySelector('.like-icon');
var FILM_KEY = "film-".concat(filmId);
var liked = localStorage.getItem(FILM_KEY);

if (liked !== null) {
  likeIcon.classList.add('like-icon_liked');
}

likeIcon.addEventListener('click', function () {
  if (!likeIcon.classList.contains('like-icon_liked')) {
    localStorage.setItem(FILM_KEY, true);
    var likesCount = parseInt(likes.textContent, 10) + 1;
    likes.innerText = "".concat(likesCount, " Likes");
    likeIcon.classList.add('like-icon_liked');
    fetch("https://inno-js.ru/multystub/stc-21-03/film/".concat(filmId, "/like"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}); // for (const star of stars) {
//     star.addEventListener('click', async () => {
//         await fetch(`https://inno-js.ru/multystub/stc-21-03/film/${filmId}/rating`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ rating: +star.dataset.value })
//             });
//         fetchFilmMeta();
//     })
// }

$('.movie-page__ratestars').on('click', '.rating-star', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("https://inno-js.ru/multystub/stc-21-03/film/".concat(filmId, "/rating"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              rating: +this.dataset.value
            })
          });

        case 2:
          fetchFilmMeta();

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));
fetchKinopoiskFilmData();
fetchFilmMeta();
//# sourceMappingURL=single-film.js.map