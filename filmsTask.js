let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let latestFilm = prompt('Один из последних просмотренных фильмов?');
let filmRate = prompt('На сколько оцените его?');
let latestFilm1 = prompt('Один из последних просмотренных фильмов?');
let filmRate1 = prompt('На сколько оцените его?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [latestFilm]: filmRate,
        [latestFilm1]: filmRate1
    },
    actors: {

    },
    genres: [],
    privat: false
};

