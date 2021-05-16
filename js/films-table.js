const films = [
    {
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

const tableBody = document.getElementById('block03-table-body');
tableBody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    tableBody.innerHTML += `
<tr>
    <td>
        <a href="#">
            <svg class="block03__check" width=".6rem" height=".4rem">
                <use xlink:href="#check_icon"></use>
            </svg>
        </a>
    </td>
    <td>${films[index].start}</td>
    <td>${films[index].title}</td>
    <td>${films[index].genre.map(g => g.name)}</td>
</tr>
`;
}