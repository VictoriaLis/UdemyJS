let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}


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

// _____________________________________________
let i = 0;

while (i < 2) {
    
    const latestFilm = prompt('Один из последних просмотренных фильмов?', "");
    const filmRate = prompt('На сколько оцените его?', "");

    if ((latestFilm == "" || filmRate == "") || (latestFilm == null || filmRate == null) || latestFilm.length > 50) {
        i--;
        continue;
    }

    personalMovieDB.movies[latestFilm] = filmRate;

    i++; 

}