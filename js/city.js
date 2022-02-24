const SYPEX_URL = 'http://api.sypexgeo.net/';

const getRequest = (url) => {
    return fetch (url);
}

const cityData = async () => {
    const asnwer = await getRequest(SYPEX_URL);
    const { city:{ name_ru } } = await asnwer.json();

    $('#city-link').html(name_ru+',');

}

$('#city-input').on('keyup change', function () {
    
    const inputValue = $('#city-input').val(); 

    $('#city-popup').on('click', function () {
       $('#city-input').val('');
       $('#city-link').html(inputValue+',');
    })
    
})

cityData();