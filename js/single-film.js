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

const fetchFilmMeta = async () => {
    const answer = await fetch (`https://inno-js.ru/multystub/stc-21-03/film/${filmId}`);
    const { body } = await answer.json();

    const views = document.getElementById('sf-views');
    const likes = document.getElementById('sf-likes');

    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} Likes`;

    console.log(body);
}

fetchKinopoiskFilmData();
fetchFilmMeta();
