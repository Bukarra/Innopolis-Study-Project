class Film {
    constructor(filmData) {
        this.data = filmData;
        this.start = `${toHour(getRandomToMax(14) + 9)}:${toMinutes(getRandomToMax(6))}`;
        this.id = filmData.id || filmData.title.replaceAll('', '-');
    }

    isNotForAdult() {
        return !this.data.adult;
    }

    getId() {
        return this.id;
    }

    getStart() {
        return this.start;
    }

    getTitle() {
        return this.data.title;
    }

    getGenre() {
        return this.data.genre
            .map(g => g.name)
            .join(', ');
    }
    
    renderFilmTableItem() {
        return `
        <tr>
            <td>
                <label class="block03__check">
                    <input type="checkbox" id="${this.getId()}">
                    <svg class="block03__check" width=".6rem" height=".4rem">
                        <use xlink:href="#check_icon"></use>
                    </svg>
                </label>
            </td>
            <td>${this.getStart()}</td>
            <td>${this.getTitle()}</td>
            <td>${this.getGenre()}</td>
        </tr>
        `
    }
}