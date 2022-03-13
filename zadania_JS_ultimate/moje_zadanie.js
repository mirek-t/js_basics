// 1. Wyświetl nazwy filmów produkcji Warner Bros.
// 2. Wyświetl thrillery reżyserów urodzonych po 1960, które były wydane po 2005
// 3. Wyświetl dzieci reżyserów, których imiona zaczynają się na "F"

const directors = [
  {
    name: "Christopher",
    surname: "Nolan",
    birth: 1970,
    children: ["Flora Nolan", "Oliver Nolan", "Rory Nolan", "Magnus Nolan"],
    movies: [
      {
        title: "Memento",
        year: 2000,
        genre: "Thriller",
        distributor: "Newmarket Films",
      },
      {
        title: "Inception",
        year: 2010,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
      {
        title: "Dunkirk",
        year: 2017,
        genre: "War",
        distributor: "Warner Bros.",
      },
      {
        title: "Tenet",
        year: 2020,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
    ],
  },
  {
    name: "Quentin",
    surname: "Tarantino",
    birth: 1963,
    children: ["Leo Tarantino"],
    movies: [
      {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        distributor: "Miramax",
      },
      {
        title: "Kill Bill",
        year: 2003,
        genre: "Action",
        distributor: "Miramax",
      },
      {
        title: "Django",
        year: 2012,
        genre: "Western",
        distributor: "Columbia Pictures",
      },
      {
        title: "The Hateful Eight",
        year: 2015,
        genre: "Western",
        distributor: "The Weinstein Company",
      },
    ],
  },
  {
    name: "Martin",
    surname: "Scorsese",
    birth: 1942,
    children: [
      "Francesca Scorsese",
      "Domenica Cameron-Scorsese",
      "Cathy Scorsese",
    ],
    movies: [
      {
        title: "After Hours",
        year: 1985,
        genre: "Black comedy",
        distributor: "Warner Bros.",
      },
      {
        title: "Casino",
        year: 1995,
        genre: "Crime",
        distributor: "Universal Pictures",
      },
      {
        title: "The Departed",
        year: 2006,
        genre: "Crime",
        distributor: "Warner Bros.",
      },
      {
        title: "The Irishman",
        year: 2019,
        genre: "Crime",
        distributor: "Netflix",
      },
    ],
  },
];

const getWBMovies = (directors) =>
  directors
    .flatMap((director) => director.movies)
    .filter((movie) => movie.distributor === "Warner Bros.")
    .map((movie) => movie.title);

const getThrillers = (directors) =>
  directors
    .filter((director) => director.birth > 1960)
    .flatMap((director) => director.movies)
    .filter((movie) => movie.genre === "Thriller" && movie.year > 2005);

const getNames = (directors) =>
  directors
    .flatMap((director) => director.children)
    .filter((e) => e.split("")[0] === "F");

// console.log(getWBMovies(directors));
// console.log(getThrillers(directors));
// console.log(getNames(directors));
