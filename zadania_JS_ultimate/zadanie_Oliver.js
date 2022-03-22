const data = [
  {
    brand: "bmw",
    country: "germany",
    year: 1993,
    colorway: ["black", "red", "grey"],
  },
  {
    brand: "ford",
    country: "america",
    year: 2015,
    colorway: ["blue", "black", "carbon"],
  },
  {
    brand: "honda",
    country: "japan",
    year: 1994,
    colorway: ["blue", "gold", "black"],
  },
  {
    brand: "porsche",
    country: "germany",
    year: 2018,
    colorway: ["black", "carbon", "white"],
  },
  {
    brand: "toyota",
    country: "japan",
    year: 1999,
    colorway: ["yellow", "carbon", "black"],
  },
  {
    brand: "skoda",
    country: "czech_republic",
    year: 2010,
    colorway: ["grey", "blue", "black"],
  },
  {
    brand: "peugeot",
    country: "france",
    year: 2000,
    colorway: ["green", "red", "yellow"],
  },
  {
    brand: "ferrari",
    country: "italia",
    year: 2006,
    colorway: ["red", "black", "carbon"],
  },
  {
    brand: "chevrolet",
    country: "america",
    year: 2003,
    colorway: ["white", "yellow", "black"],
  },
  {
    brand: "audi",
    country: "germany",
    year: 1999,
    colorway: ["red", "red", "black"],
  },
];

// 1. Return a list of [brand, year] of cars from japan.
// 2. Return a list of brands of cars, that have red in them.
// 3. Return al list of cars [brand, country] that prod_year is after 2001 and have something carbon in it.

const getJapanCars = (data) =>
  data
    .filter((e) => e.country === "japan")
    .map((e) => ({ brand: e.brand, year: e.year }));

const redCars = (data) =>
  data.filter((e) => e.colorway.includes("red")).map((e) => e.brand);

const getCarbon = (data) =>
  data
    .filter((e) => e.colorway.includes("carbon") && e.year > 2001)
    .map((e) => ({ brand: e.brand, country: e.country }));
