"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SYPEX_URL = 'http://api.sypexgeo.net/';

var getRequest = function getRequest(url) {
  return fetch(url);
};

var cityData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var asnwer, _yield$asnwer$json, name_ru;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getRequest(SYPEX_URL);

          case 2:
            asnwer = _context.sent;
            _context.next = 5;
            return asnwer.json();

          case 5:
            _yield$asnwer$json = _context.sent;
            name_ru = _yield$asnwer$json.city.name_ru;
            $('#city-link').html(name_ru + ',');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cityData() {
    return _ref.apply(this, arguments);
  };
}(); // $('#city-input').on('focus', function () {
//     $('#city-input').val('');
// })


$('#city-input').on('keyup change', function () {
  var inputValue = $('#city-input').val();
  $('#city-popup').on('click', function () {
    $('#city-link').html(inputValue + ',');
    $('#city-input').val('');
  });
});
cityData();
//# sourceMappingURL=city.js.map