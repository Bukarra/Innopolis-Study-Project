"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';
var apiHeaders = {
  'accept': 'application/json',
  'X-API-KEY': '5ba46513-d50f-4e8e-860e-e354b5ebbaa6'
};
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
  headers: _objectSpread({}, apiHeaders),
  cors: 'no-cors'
}).then(function (data) {
  return data.json();
}).then(function (data) {
  data.films.forEach(function (film) {
    var id = "block-films-desc-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n            <div class=\"block05__movie\">\n                <img class=\"block05__pic\" src=\"".concat(film.posterUrlPreview, "\" alt=\"\u0424\u0438\u043B\u044C\u043C\">\n                <div class=\"block05__shadow\"></div>\n                <div class=\"block05__description\">\n                    <p class=\"block05__text1\">\n                        ").concat(film.nameRu, "\n                    </p>\n                    <p id=\"").concat(id, "\" class=\"block05__text2 paragraph-font\">\n                        ...loading\n                    </p>\n                </div>\n            </div>\n        ");
    fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}', {
      headers: _objectSpread({}, apiHeaders),
      cors: 'no-cors'
    }).then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var description = _ref.data.description;
      var desc = document.getElementById(id);
      desc.innerText = description;

      if (!description) {
        var root = desc.parentNode.parentNode;
        blockFilmsWrapper.removeChild(root);
      }
    });
  });
});