"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';

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
  return kinopoiskapiunofficialRequest("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(id));
};

var fetchBlockFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return topfilmsRequest();

          case 2:
            result = _context2.sent;
            _context2.next = 5;
            return result.json();

          case 5:
            data = _context2.sent;
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(film) {
                var id, wrapper, img;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        id = "block-films-desc-".concat(film.filmId);
                        wrapper = document.createElement('div');
                        wrapper.classList.add('block05__movie');
                        img = document.createElement('img');
                        img.classList.add('block05__pic');
                        img.src = film.posterUrlPreview;
                        img.alt = 'Изображение постера';
                        wrapper.append(img);
                        blockFilmsWrapper.append(wrapper);

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
            }());

          case 7:
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
/*fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
    headers: {
        ...apiHeaders
    },
    cors: 'no-cors'
})
.then(data => data.json())
.then(data => {
    data.films.forEach((film) => {
        const id = `block-films-desc-${film.filmId}`;
        blockFilmsWrapper.innerHTML += `
            <div class="block05__movie">
                <img class="block05__pic" src="${film.posterUrlPreview}" alt="Фильм">
                <div class="block05__shadow"></div>
                <div class="block05__description">
                    <p class="block05__text1">
                        ${film.nameRu}
                    </p>
                    <p id="${id}" class="block05__text2 paragraph-font">
                        ...loading
                    </p>
                </div>
            </div>
        `

        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
            headers: {
                ...apiHeaders
            },
            cors: 'no-cors'
        })
        .then(data => data.json())
        .then(({ data: { description } }) => {
            const desc = document.getElementById(id);
            desc.innerText = description;

            if (!description) {
                const root = desc.parentNode.parentNode;

                blockFilmsWrapper.removeChild(root);
            }
        })
    })
})
*/