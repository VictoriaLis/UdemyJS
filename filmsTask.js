let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,

    showFilmActivity: function () {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    setFilmRates: function () {
        for (let i = 0; i < 2; i++) {
            const latestFilm = prompt('Один из последних просмотренных фильмов?', "");
            const filmRate = prompt('На сколько оцените его?', "");

            if ((latestFilm === "" || filmRate === "") || (latestFilm === null || filmRate === null) || latestFilm.length > 50) {
                i--;
                continue;
            }

            this.movies[latestFilm] = filmRate;
        }
    },

    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },

    writeYourGenres: function () {
        const genres = [];
        for (let i = 0; i < 3; i++) {
            const genre = prompt("Любимый жанр?");
            if (genre === "" || genre === null) {
                i--;
                continue;
            }
            genres.push(genre);
        }

        genres.forEach((element, index) => console.log(`Любимый жанр #${index+1} это ${element}`));
    }
};