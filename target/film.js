"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

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
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre.map(function (g) {
        return g.name;
      }).join(', ');
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr>\n            <td>\n                <label class=\"block03__check\">\n                    <input type=\"checkbox\" id=\"".concat(this.getId(), "\">\n                    <svg class=\"block03__check\" width=\".6rem\" height=\".4rem\">\n                        <use xlink:href=\"#check_icon\"></use>\n                    </svg>\n                </label>\n            </td>\n            <td>").concat(this.getStart(), "</td>\n            <td>").concat(this.getTitle(), "</td>\n            <td>").concat(this.getGenre(), "</td>\n        </tr>\n        ");
    }
  }]);

  return Film;
}();