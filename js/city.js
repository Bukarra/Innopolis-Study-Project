const SYPEX_URL = 'http://api.sypexgeo.net/';

const getRequest = (url) => {
    return fetch (url);
}

const cityData = async () => {
    const asnwer = await getRequest(SYPEX_URL);
    const { city:{ name_ru } } = await asnwer.json();
    console.log(name_ru);
}

cityData();

