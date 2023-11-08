const data = require("./data");
const arrMovies = data.movieSerie;

// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99

class Cart {
  products = [];
  price = 3.99;
  total;

  // FUNCTIONS -- -- -- -- -- --

  addProduct(product) {
    this.products.push(product);

    return this.products;
  }

  removeProduct(title) {
    this.products = this.products.filter((el) => el.title !== title);
  }

  getTotalPrice() {
    let totalPrice = this.products.length * this.price;
    return totalPrice;
  }
}

const cart = new Cart();
cart.addProduct(arrMovies[0]);
cart.addProduct(arrMovies[1]);
cart.removeProduct(arrMovies[1].title);

console.log(cart.getTotalPrice());
