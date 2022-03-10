"use strict";

var _kinopoiskapiunofficial = require("../__data__/api/kinopoiskapiunofficial.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var blockFilmsWrapper = document.getElementById('block05-films-wrapper'); // const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

function renderFilmBlock(posterUrl, filmName, id) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('block05__movie');
  var link = document.createElement('a');
  link.href = "/single/?id=".concat(id);
  var img = document.createElement('img');
  img.classList.add('block05__pic');
  img.src = posterUrl;
  img.alt = 'Изображение постера';
  var shadow = document.createElement('div');
  shadow.classList.add('block05__shadow');
  var descWrapper = document.createElement('div');
  descWrapper.classList.add('block05__description');
  var title = document.createElement('p');
  title.classList.add('block05__text1');
  title.textContent = filmName;
  var desc = document.createElement('p');
  desc.classList.add('block05__text2', 'paragraph-font');
  descWrapper.append(title, desc);
  link.append(img, shadow, descWrapper);
  wrapper.append(link);
  return [wrapper, desc];
}

var fetchBlockFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result, _yield$result$json, films, requests, filmBlocksMap, limit, elements;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _kinopoiskapiunofficial.topfilmsRequest)();

          case 2:
            result = _context2.sent;
            _context2.next = 5;
            return result.json();

          case 5:
            _yield$result$json = _context2.sent;
            films = _yield$result$json.films;
            requests = [];
            filmBlocksMap = new Map();
            limit = 5;
            films.forEach(function (film) {
              if (limit < 1) {
                return;
              }

              limit--;

              var _renderFilmBlock = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId),
                  _renderFilmBlock2 = _slicedToArray(_renderFilmBlock, 2),
                  filmLayout = _renderFilmBlock2[0],
                  desc = _renderFilmBlock2[1];

              filmBlocksMap.set(film.filmId, filmLayout);
              requests.push(new Promise( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
                  var detailResult, detailsData, description;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return (0, _kinopoiskapiunofficial.filmDetailsRequest)(film.filmId);

                        case 2:
                          detailResult = _context.sent;
                          _context.next = 5;
                          return detailResult.json();

                        case 5:
                          detailsData = _context.sent;
                          description = detailsData.description;

                          if (!description) {
                            filmBlocksMap["delete"](film.filmId);
                          } else {
                            desc.textContent = description;
                          }

                          resolve();

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            });
            _context2.next = 13;
            return Promise.all(requests);

          case 13:
            // let i = 0;
            // for (const [, element] of filmBlocksMap) {
            //     blockFilmsWrapper.append(element)
            //     i++;
            //     if (i >= 9) {
            //         break;
            //     }
            // }
            blockFilmsWrapper.innerHTML = '';
            elements = _toConsumableArray(filmBlocksMap.values()).slice(0, 9);
            blockFilmsWrapper.append.apply(blockFilmsWrapper, _toConsumableArray(elements));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchBlockFilms() {
    return _ref.apply(this, arguments);
  };
}();

fetchBlockFilms();
//# sourceMappingURL=blocks-films.js.map