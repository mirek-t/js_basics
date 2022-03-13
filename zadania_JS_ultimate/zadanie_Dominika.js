// 1. Wyświetl nazwy kawiarni znajdujących się przy ul. Długiej w Krakowie.
// 2. Wyświetl liczbę kawiarni, które w menu mają ‘iceLatte’.
// 3. Znajdź kawiarnie, w których espresso kosztuje więcej niż 10.

const coffeeShop = [
  {
    name: "Fornir",
    street: "Długa",
    city: "Kraków",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
    ],
    coffeePrice: [
      {
        espresso: 9,
        americano: 10,
        flatWhite: 13,
        capuccino: 13,
        latte: 14,
        mocha: 15,
      },
    ],
  },
  {
    name: "Jordan Cafe",
    street: "Długa",
    city: "Kraków",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
      "iceLatte",
    ],
    coffeePrice: [
      {
        espresso: 10,
        americano: 11,
        flatWhite: 14,
        capuccino: 13,
        latte: 15,
        mocha: 15,
        iceLatte: 14,
      },
    ],
  },
  {
    name: "Iluzjon Art Cafe",
    street: "Rynek",
    city: "Sandomierz",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
    ],
    coffeePrice: [
      {
        espresso: 8,
        americano: 10,
        flatWhite: 15,
        capuccino: 12,
        latte: 14,
        mocha: 15,
      },
    ],
  },
  {
    name: "Ministerstwo Kawy",
    street: "Marszałkowska",
    city: "Warszawa",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
      "iceLatte",
    ],
    coffeePrice: [
      {
        espresso: 11,
        americano: 13,
        flatWhite: 14,
        capuccino: 15,
        latte: 16,
        mocha: 18,
        iceLatte: 18,
      },
    ],
  },
  {
    name: "Magia Cafe Bar",
    street: "Długa",
    city: "Kraków",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
    ],
    coffeePrice: [
      {
        espresso: 9,
        americano: 9,
        flatWhite: 13,
        capuccino: 13,
        latte: 14,
        mocha: 15,
      },
    ],
  },
  {
    name: "Kawiarnia Kafka",
    street: "Oboźna",
    city: "Warszawa",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
    ],
    coffeePrice: [
      {
        espresso: 9,
        americano: 11,
        flatWhite: 14,
        capuccino: 13,
        latte: 15,
        mocha: 15,
      },
    ],
  },
  {
    name: "Kawa",
    street: "Długa",
    city: "Gdańsk",
    coffee: [
      "espresso",
      "americano",
      "flatWhite",
      "capuccino",
      "latte",
      "mocca",
    ],
    coffeePrice: [
      {
        espresso: 9,
        americano: 10,
        flatWhite: 13,
        capuccino: 13,
        latte: 14,
        mocha: 15,
      },
    ],
  },
];

const krkDlugaCoffeehouses = coffeeShop
  .filter((obj) => obj.city === "Kraków" && obj.street === "Długa")
  .map((obj) => obj.name);

const iceLatteMenu = coffeeShop.filter((obj) =>
  obj.coffee.includes("iceLatte")
).length;

const expEspresso = coffeeShop
  .filter((obj) => obj.coffeePrice[0].espresso > 10)
  .map((obj) => obj.name);

// console.log(krkDlugaCoffeehouses);
// console.log(iceLatteMenu);
// console.log(expEspresso);

const filterCoffeeShop = (data) =>
  data.reduce(
    (acc, cur) => (cur.street === "Długa" ? [...acc, cur.name] : acc),
    []
  );

const countIceLatte = (data) =>
  data.reduce(
    (acc, cur) => (cur.coffee.includes("iceLatte") ? acc + 1 : acc),
    0
  );

const findExpensiveEspresso = (data) =>
  data.reduce(
    (acc, cur) => (cur.coffeePrice[0].espresso > 10 ? [...acc, cur.name] : acc),
    []
  );

console.log(findExpensiveEspresso(coffeeShop));
