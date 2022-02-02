function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1
}

function toHour(num) {
    return `${num}`.padStart(2, '0');
}

function toMinutes(num) {
    return `${num}`.padEnd(2, '0');
}

const kinopoiskapiunofficialRequest = (url) => {
    return fetch (url, {
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
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
}