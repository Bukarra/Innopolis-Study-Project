const blockFilmsWrapper = document.getElementById('block05-films-wrapper');

// const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

function renderFilmBlock (posterUrl, filmName, id) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('block05__movie');

    const link = document.createElement('a');
    link.href = `/single/?id=${id}`;

    const img = document.createElement('img');
    img.classList.add('block05__pic');
    img.src = posterUrl;
    img.alt = 'Изображение постера';

    const shadow = document.createElement('div');
    shadow.classList.add('block05__shadow');
        
    const descWrapper = document.createElement('div');
    descWrapper.classList.add('block05__description');

    const title = document.createElement('p');
    title.classList.add('block05__text1');
    title.textContent = filmName;
        
    const desc = document.createElement('p');
    desc.classList.add('block05__text2', 'paragraph-font');

    descWrapper.append(title, desc);
    link.append(img, shadow, descWrapper);
    wrapper.append(link);

    return [wrapper, desc];
}

const fetchBlockFilms = async() => {
    const result = await topfilmsRequest();
    const { films } = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();

    let limit = 6;

    films.forEach((film) => {
        if (limit < 1) {
            return;
        };
        limit --;

        const [filmLayout, desc] = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId);
        filmBlocksMap.set(film.filmId, filmLayout);

        requests.push(new Promise(async (resolve) => {
            const detailResult = await filmDetailsRequest(film.filmId);
            const detailsData = await detailResult.json();
            
            const description = detailsData.description;

            if(!description) {
            filmBlocksMap.delete(film.filmId)
            } else {
                desc.textContent = description;
            }

            resolve();
        }));
    })

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

}

fetchBlockFilms();