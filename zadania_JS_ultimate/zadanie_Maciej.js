const data = [
  {
    name: "Max Verstappen",
    country: "Netherlands",
    wins: 20,
    teams: ["Toro Rosso", "Red Bull"],
  },
  {
    name: "Lewis Hamilton",
    country: "United Kingdom",
    wins: 103,
    teams: ["Mclaren", "Mercedes"],
  },
  {
    name: "Valtteri Bottas",
    country: "Finland",
    wins: 10,
    teams: ["Williams", "Mercedes", "Alfa Romeo"],
  },
  {
    name: "Sergio Perez",
    country: "Mexico",
    wins: 2,
    teams: ["Sauber", "Mclaren", "Force India", "Racing Point", "Red Bull"],
  },
  {
    name: "Carlos Sainz",
    country: "Spain",
    wins: 0,
    teams: ["Toro Rosso", "Renault", "Mclaren", "Ferrari"],
  },
  {
    name: "Lando Norris",
    country: "United Kingdom",
    wins: 0,
    teams: ["Mclaren"],
  },
  {
    name: "Charles Leclerc",
    country: "Monaco",
    wins: 2,
    teams: ["Sauber", "Ferrari"],
  },
  {
    name: "Daniel Ricciardo",
    country: "Australia",
    wins: 8,
    teams: ["HRT", "Toro Rosso", "Red Bull", "Renault", "Mclaren"],
  },
  {
    name: "Pierre Gasly",
    country: "France",
    wins: 1,
    teams: ["Toro Rosso", "Red Bull", "Alpha Tauri"],
  },
  {
    name: "Fernando Alonso",
    country: "Spain",
    wins: 32,
    teams: ["Minardi", "Renault", "Mclaren", "Ferrari", "Alpine"],
  },
  {
    name: "Esteban Ocon",
    country: "France",
    wins: 1,
    teams: ["Manor", "Force India", "Renault", "Alpine"],
  },
  {
    name: "Sebastian Vettel",
    country: "Germany",
    wins: 53,
    teams: ["BMW Sauber", "Toro Rosso", "Red Bull", "Ferrari", "Aston Martin"],
  },
  {
    name: "Lance Stroll",
    country: "Canada",
    wins: 0,
    teams: ["Williams", "Racing Point", "Aston Martin"],
  },
  {
    name: "Yuki Tsunoda",
    country: "Japan",
    wins: 0,
    teams: ["Aplha Tauri"],
  },
  {
    name: "George Russell",
    country: "United Kingdom",
    wins: 0,
    teams: ["Williams", "Mercedes"],
  },
  {
    name: "Guanyu Zhou",
    country: "China",
    wins: 0,
    teams: ["Alfa Romeo"],
  },
  {
    name: "Nicholas Latifi",
    country: "Canada",
    wins: 0,
    teams: ["Williams"],
  },
  {
    name: "Alexander Albon",
    country: "Thailand",
    wins: 0,
    teams: ["Toro Rosso", "Red Bull", "Williams"],
  },
  {
    name: "Mick Schumacher",
    country: "Germany",
    wins: 0,
    teams: ["Haas"],
  },
  {
    name: "Kevin Magnussen",
    country: "Denmark",
    wins: 0,
    teams: ["Mclaren", "Renault", "Haas"],
  },
];

// 1. Wy??wietl ??redni?? liczb?? zwyciestw kierowc??w kt??rzy je??d???? lub je??dzili dla McLarena.
// 2. Wy??wietl kierowc??w, kt??rzy nie wygrali wy??cigu i je??dzili tylko dla jednego zespo??u.
// 3. Wy??wietl kraje kierowc??w, kt??rzy je??dzili dla Renault i odnie??li przynajmniej 10 zwyci??stw

const mclarenWins = (data) => {
  const drivers = data.filter((e) => e.teams.includes("Mclaren"));

  const mean = Math.floor(
    drivers.reduce((acc, cu) => acc + cu.wins, 0) / drivers.length
  );
  return mean;
};

const getNoWiners = (data) =>
  data.filter((e) => e.wins === 0 && e.teams.length === 1).map((e) => e.name);

const getRenaultDrivers = (data) =>
  data.filter((e) => e.teams.includes("Renault") && e.wins >= 10);
