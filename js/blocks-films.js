const blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';

const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '5ba46513-d50f-4e8e-860e-e354b5ebbaa6',
        },
        cors: 'no-cors'
    });
}

const topfilmsRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1')
}
const filmDetailsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
}

/*const fetchBlockFilms = async() => {
    const result = await topfilmsRequest();
    const data = await result.json();

    data.films.forEach(async (film) => {
        const id = `block-films-desc-${film.filmId}`;
        const wrapper = document.createElement('div');
        wrapper.classList.add('block05__movie');
        const img = document.createElement('img');
        img.classList.add('block05__pic');
        img.src = film.posterUrlPreview;
        img.alt = 'Изображение постера';
        
        wrapper.append(img);
        blockFilmsWrapper.append(wrapper);
    })
}

fetchBlockFilms();
*/

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
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
                .then(({
                    data: {
                        description
                    }
                }) => {
                    const desc = document.getElementById(id);
                    desc.innerText = description;

                    if (!description) {
                        const root = desc.parentNode.parentNode;

                        blockFilmsWrapper.removeChild(root);
                    }
                })
        })
    })