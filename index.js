const data = require("./data");
const arrMovies = data.movieSerie;

// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).

// Creare una classe Movie che contenga le informazioni sopra indicate.

// Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.

// Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo:
// Jaws è un film di genere Drama. E’ stato rilasciato nel 1975 ed ha un voto di 8

// Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5

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

// Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.

const newArr = arrMovies.map((el) => {
  if (el.type === "movie") {
    return new Movie(el.title, el.year, el.genre, el.rating, el.type);
  } else {
    return new SerieTv(
      el.title,
      el.year,
      el.genre,
      el.rating,
      el.type,
      el.seasons
    );
  }
});
// console.log(newArr);

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.

function averageGenreRating(array, genre) {
  let arrSameGenre = array.filter((el) => el.genre === genre);

  const sum = arrSameGenre.reduce((acc, el) => acc + el.rating, 0);
  // console.log(sum);
  const avg = sum / arrSameGenre.length;
  return avg;
}

// const avg = averageGenreRating(newArr, "drammatico");
// console.log(avg);

// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.

function genresList(array) {
  const arrGenres = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].genre;
    if (!arrGenres.includes(element)) {
      arrGenres.push(element);
    }
  }
  return arrGenres;
}

console.log(genresList(newArr));

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
