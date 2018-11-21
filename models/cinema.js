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

module.exports = Cinema;
