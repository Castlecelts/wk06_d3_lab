const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const films = this.films
  const titles = films.map((film) => {
    const title = film.title;
    return title;
  })
  return titles;
}

Cinema.prototype.findByTitle = function (title) {
  const films = this.films
  let result = films.find((film) => {
    return film.title === title
  })
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const films = this.films;
  const results = films.filter((film) => {
    return film.genre === genre;
  })
  return results;
};

Cinema.prototype.filmsFromYearExists = function (year) {
  const films = this.films;
  const result = films.some((film) => {
    return film.year === year;
  })
  return result;
};

Cinema.prototype.allFilmsOverLength = function (duration) {
  const films = this.films;
  const result = films.every((film) => {
    return film.length >= duration;
  })
  return result;
};

Cinema.prototype.allFilmRunTime = function () {
  const films = this.films;
  let result = films.reduce((accum, film) => {
    return accum + film.length;
  }, 0)
  return result;
};




module.exports = Cinema;
