const searchParams = new URLSearchParams(location.search);

const filmId = searchParams.get('id');

const fetchKinopoiskFilmData = async () => {
    const answer = await filmDetailsRequest(filmId);
    const filmInfo = await answer.json();

    const header = document.getElementById('sf-header');
    const description = document.querySelector('#sf-description');
    const posterImage = document.querySelector('#sf-poster');
    const premiereYear = document.getElementById('sf-premiere');

    header.textContent = filmInfo.nameRu;
    description.textContent = filmInfo.description;
    posterImage.src = filmInfo.posterUrl;
    premiereYear.textContent = filmInfo.year;
}

fetchKinopoiskFilmData();

// filmDetailsRequest(filmId)
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