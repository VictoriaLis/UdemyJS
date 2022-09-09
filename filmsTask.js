let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const latestFilm = prompt('Один из последних просмотренных фильмов?', "");
        const filmRate = prompt('На сколько оцените его?', "");

        if ((latestFilm == "" || filmRate == "") || (latestFilm == null || filmRate == null) || latestFilm.length > 50) {
            i--;
            continue;
        }

        personalMovieDB.movies[latestFilm] = filmRate;
    }
    console.log(personalMovieDB);
}
rememberMyFilms();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}
