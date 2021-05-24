const films = [
    {
        start: '01:00',
        title: 'XXX',
        adult: true,
        genre: []
    },{
        start: '10:00',
        title: 'Человек-паук',
        genre: [
            {
                 name: 'фантастика',
            },
            {
                 name: 'боевик',
            },
            {
                 name: 'приключения',
            },
        ]
    },{
        start: '12:00',
        title: 'Собачья жизнь 2',
        genre: [
            {
                 name: 'фэнтэзи',
            },
            {
                 name: 'драма',
            },
            {
                 name: 'комедия',
            },
        ]
    },{
        start: '14:00',
        title: 'История игрушек 4',
        genre: [
            {
                 name: 'мультфильм',
            },
            {
                 name: 'фэнтэзи',
            },
            {
                 name: 'комедия',
            },
        ]
    },{
        start: '16:00',
        title: 'Люди в чёрном: Интэрнэшнл',
        genre: [
            {
                 name: 'фантастика',
            },
            {
                 name: 'боевик',
            },
            {
                 name: 'комедия',
            },
        ]
    }
];

const filmHelper = {
    getId() {
        return this.id || this.title.replaceAll('', '-');
    },
    getTitle() {
        return this.title;
    },
    getStart() {
        return this.start;
    },
    getGenre() {
        return this.genre
            .map(g => g.name) 
            .join(', ');
    },
}

function renderFilmTableItem(film) {
    return `
    <tr>
        <td>
            <label class="block03__check">
                <input type="checkbox" id="${filmHelper.getId.apply(film)}">
                <svg class="block03__check" width=".6rem" height=".4rem">
                    <use xlink:href="#check_icon"></use>
                </svg>
            </label>
        </td>
        <td>${filmHelper.getStart.apply(film)}</td>
        <td>${filmHelper.getTitle.apply(film)}</td>
        <td>${filmHelper.getGenre.apply(film)}</td>
    </tr>
    `
}

const tableBody = document.getElementById('block03-table-body');
tableBody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
        tableBody.innerHTML += renderFilmTableItem (films[index]);
    }
}