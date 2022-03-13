import Film from '../model/film.js';

export function createTable(filmsData, tableBody) {
    tableBody.innerHTML = '';

    for (let index = 0; index < filmsData.length; index++) {
        const film = new Film(filmsData[index]);
        if (film.isNotForAdult()) {
            tableBody.innerHTML += film.renderFilmTableItem();
        }
    }
}
