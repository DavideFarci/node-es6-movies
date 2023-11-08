class Movie {
  title;
  year;
  genre;
  rating;
  type;

  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }

  // FUNCTIONS -- -- -- -- -- --
  toString() {
    return `${this.title} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
  }
}

class SerieTv extends Movie {
  seasons;

  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);

    this.seasons = seasons;
  }

  // FUNCTIONS -- -- -- -- -- --
  toString() {
    return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
  }
}