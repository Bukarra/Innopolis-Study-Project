"use strict";

var filmsData = [{
  title: 'XXX',
  adult: true,
  genre: []
}, {
  title: 'Человек-паук',
  genre: [{
    name: 'фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'приключения'
  }]
}, {
  title: 'Собачья жизнь 2',
  genre: [{
    name: 'фэнтэзи'
  }, {
    name: 'драма'
  }, {
    name: 'комедия'
  }]
}, {
  title: 'История игрушек 4',
  genre: [{
    name: 'мультфильм'
  }, {
    name: 'фэнтэзи'
  }, {
    name: 'комедия'
  }]
}, {
  title: 'Люди в чёрном: Интэрнэшнл',
  genre: [{
    name: 'фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'комедия'
  }]
}];
var tableBody = document.getElementById('block03-table-body');
tableBody.innerHTML = '';

for (var index = 0; index < filmsData.length; index++) {
  var film = new Film(filmsData[index]);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItem();
  }
}