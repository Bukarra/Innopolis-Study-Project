import style from './style.scss';

import { filmDetailsRequest, topfilmsRequest } from '../../__data__/api/kinopoiskapiunofficial';

const blockFilmsWrapper = document.getElementById('block05-films-wrapper');

// const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

function renderFilmBlock(posterUrl, filmName, id) {
    const wrapper = document.createElement('div');
    wrapper.classList.add(style.movie);

    const link = document.createElement('a');
    link.href = `/single/?id=${id}`;

    const img = document.createElement('img');
    img.classList.add(style.pic);
    img.src = posterUrl;
    img.alt = 'Изображение постера';

    const shadow = document.createElement('div');
    shadow.classList.add(style.shadow);

    const descWrapper = document.createElement('div');
    descWrapper.classList.add(style.description);

    const title = document.createElement('p');
    title.classList.add(style.header);
    title.textContent = filmName;

    const desc = document.createElement('p');
    desc.classList.add(style.innerTextContent);

    descWrapper.append(title, desc);
    link.append(img, shadow, descWrapper);
    wrapper.append(link);

    return [wrapper, desc];
}

const fetchBlockFilms = async () => {
    const result = await topfilmsRequest();
    const { films } = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();

    films.forEach((film) => {
        const [filmLayout, desc] = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId);
        filmBlocksMap.set(film.filmId, filmLayout);

        requests.push(
            new Promise(async (resolve) => {
                const detailResult = await filmDetailsRequest(film.filmId);
                const detailsData = await detailResult.json();

                const description = detailsData.description;

                if (!description) {
                    filmBlocksMap.delete(film.filmId);
                } else {
                    desc.textContent = description;
                }

                resolve();
            })
        );
    });

    await Promise.all(requests);

    // let i = 0;
    // for (const [, element] of filmBlocksMap) {
    //     blockFilmsWrapper.append(element)
    //     i++;

    //     if (i >= 9) {
    //         break;
    //     }
    // }

    blockFilmsWrapper.innerHTML = '';

    const elements = [...filmBlocksMap.values()].slice(0, 9);

    blockFilmsWrapper.append(...elements);
};

fetchBlockFilms();
