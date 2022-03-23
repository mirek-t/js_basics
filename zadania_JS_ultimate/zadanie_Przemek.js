const quarterfinalists = [
  {
    name: "Chelsea",
    country: "England",
    city: "London",
    titles: 6,
    coach: [
      {
        name: "Thomas Tuchel",
        nationality: "Germany",
        age: 48,
      },
    ],
  },
  {
    name: "Manchester City",
    country: "England",
    city: "Manchester",
    titles: 7,
    coach: [
      {
        name: "Pep Guardiola",
        nationality: "Spain",
        age: 51,
      },
    ],
  },
  {
    name: "Liverpool",
    country: "England",
    city: "Liverpool",
    titles: 19,
    coach: [
      {
        name: "Jurgen Klopp",
        nationality: "Germany",
        age: 54,
      },
    ],
  },
  {
    name: "Real Madrid",
    country: "Spain",
    city: "Madrid",
    titles: 34,
    coach: [
      {
        name: "Carlo Ancelotti",
        nationality: "Italy",
        age: 62,
      },
    ],
  },
  {
    name: "Villarreal",
    country: "Spain",
    city: "Vila-real",
    titles: 0,
    coach: [
      {
        name: "Unai Emery",
        nationality: "Spain",
        age: 50,
      },
    ],
  },
  {
    name: "Atletico Madrid",
    country: "Spain",
    city: "Madrid",
    titles: 11,
    coach: [
      {
        name: "Diego Simeone",
        nationality: "Argentina",
        age: 51,
      },
    ],
  },
  {
    name: "Bayern",
    country: "Germany",
    city: "Munich",
    titles: 31,
    coach: [
      {
        name: "Julian Nagelsmann",
        nationality: "Germany",
        age: 34,
      },
    ],
  },
  {
    name: "Benfica",
    country: "Portugal",
    city: "Lisbon",
    titles: 37,
    coach: [
      {
        name: "Jorge Jesus",
        nationality: "Portugal",
        age: 67,
      },
    ],
  },
];

// 1. Podaj średnią wieku trenerów ćwierćfinalistów ligi mistrzów
// 2. Który z angielskich klubów jest najbardziej utytułowany?
// 3. Wymień narodowości wszystkich trenerów, bez powtórzeń

const coachesMeanAge = (quarterfinalists) =>
  quarterfinalists.reduce((acc, cu) => acc + cu.coach[0].age, 0) /
  quarterfinalists.length;

const mostTitledTeams = (quarterfinalists) =>
  quarterfinalists
    .filter((e) => e.country === "England")
    .sort((a, b) => b.titles - a.titles)
    .map((e) => e.name)[0];

const getCoachNationality = (quarterfinalists) =>
  new Set(quarterfinalists.map((e) => e.coach[0].nationality));
