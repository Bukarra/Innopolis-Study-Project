import { KINOPOISKAPI_UNOFFICIAL_URL } from '../constants.js';

export const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            accept: 'application/json',
            'X-API-KEY': '5ba46513-d50f-4e8e-860e-e354b5ebbaa6',
        },
        cors: 'no-cors',
    });
};

export const topfilmsRequest = () => {
    return kinopoiskapiunofficialRequest(`${KINOPOISKAPI_UNOFFICIAL_URL}/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`);
};

export const filmDetailsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`${KINOPOISKAPI_UNOFFICIAL_URL}/v2.2/films/${id}`);
};
