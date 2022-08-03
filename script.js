"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const latestFilmViewed = prompt("Один из последних просмотренных фильмов?", "");
const filmRating = prompt("На сколько оцените его?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [latestFilmViewed]: filmRating
    },
    actors: {

    },
    genres: [],
    privat: false
}
console.log(personalMovieDB);

