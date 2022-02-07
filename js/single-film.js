const searchParams = new URLSearchParams(location.search);
const likes = document.getElementById('sf-likes');
const stars = document.querySelectorAll('.rating-star');

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
    const ratingNumber = document.getElementById('sf-rating-number');

    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} Likes`;
    const rating = body.ratings.reduce((a, b) => parseInt(a) + parseInt(b), 0) / body.ratings.length;
    const intRating = Math.round(rating);
    if (isNaN(intRating)) {
        ratingNumber.textContent = '0.0';
    } else {
        ratingNumber.textContent = Math.floor(rating * 10) / 10;
    }

    for (let i = 0; i < stars.length; i++) {      
        if(i >= intRating) break;

        const star = stars[i];
        star.classList.add('star_selected');
    }
}

const likeIcon = document.querySelector('.like-icon');
likeIcon.addEventListener('click', () => {
    if(!likeIcon.classList.contains('like-icon_liked')) {
        const likesCount = parseInt(likes.textContent, 10) + 1;

        likes.innerText = `${likesCount} Likes`;
        likeIcon.classList.add('like-icon_liked');

        fetch(
            `https://inno-js.ru/multystub/stc-21-03/film/${filmId}/like`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
    }
});

for (const star of stars) {
    star.addEventListener('click', async () => {

        await fetch(`https://inno-js.ru/multystub/stc-21-03/film/${filmId}/rating`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rating: +star.dataset.value })
            });

        fetchFilmMeta();
    })
}

fetchKinopoiskFilmData();
fetchFilmMeta();
