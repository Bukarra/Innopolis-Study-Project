"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _getId = /*#__PURE__*/new WeakSet();

var _getStart = /*#__PURE__*/new WeakSet();

var _getTitle = /*#__PURE__*/new WeakSet();

var _getGenre = /*#__PURE__*/new WeakSet();

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    _getGenre.add(this);

    _getTitle.add(this);

    _getStart.add(this);

    _getId.add(this);

    this.data = filmData;
    this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(toMinutes(getRandomToMax(6)));
    this.id = filmData.id || filmData.title.replaceAll('', '-');
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr>\n            <td>\n                <label class=\"block03__check\">\n                    <input type=\"checkbox\" id=\"".concat(_classPrivateMethodGet(this, _getId, _getId2).call(this), "\">\n                    <svg class=\"block03__check\" width=\".6rem\" height=\".4rem\">\n                        <use xlink:href=\"#check_icon\"></use>\n                    </svg>\n                </label>\n            </td>\n            <td>").concat(_classPrivateMethodGet(this, _getStart, _getStart2).call(this), "</td>\n            <td>").concat(_classPrivateMethodGet(this, _getTitle, _getTitle2).call(this), "</td>\n            <td>").concat(_classPrivateMethodGet(this, _getGenre, _getGenre2).call(this), "</td>\n        </tr>\n        ");
    }
  }]);

  return Film;
}();

function _getId2() {
  return this.id;
}

function _getStart2() {
  return this.start;
}

function _getTitle2() {
  return this.data.title;
}

function _getGenre2() {
  return this.data.genre.map(function (g) {
    return g.name;
  }).join(', ');
}
//# sourceMappingURL=film.js.map