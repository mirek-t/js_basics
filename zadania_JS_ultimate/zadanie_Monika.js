//1. Wypisz nazwy planet, które są większe niż ziemia i mają księżyc z nazwą zaczynającą się na "G".
//2. Wypisz nazwy planet, które mają więcej księżyców niż wyliczona średnia ilość księżyców przypadającą na  pojedynczą planete.
//3. Wypisz nazwy planet, kończących się na "s" i nie posiadających pierścieni planetarnych.

const planets = [
  {
    name: "Mercury",
    moons: 0,
    mostFamousMoons: null,
    hasPlanetaryRings: false,
    relativeMass: 0.06,
  },
  {
    name: "Venus",
    moons: 0,
    mostFamousMoons: null,
    hasPlanetaryRings: false,
    relativeMass: 0.82,
  },
  {
    name: "Earth",
    moons: 1,
    mostFamousMoons: ["Moon"],
    hasPlanetaryRings: false,
    relativeMass: 1,
  },
  {
    name: "Mars",
    moons: 2,
    mostFamousMoons: ["Phobos", "Deimos"],
    hasPlanetaryRings: false,
    relativeMass: 0.11,
  },
  {
    name: "Jupiter",
    moons: 79,
    mostFamousMoons: ["Io", "Europa", "Ganymede", "Callisto"],
    hasPlanetaryRings: true,
    relativeMass: 317.8,
  },
  {
    name: "Saturn",
    moons: 62,
    mostFamousMoons: ["Enceladus", "Titan", "Atlas", "Calypso"],
    hasPlanetaryRings: true,
    relativeMass: 95.2,
  },
  {
    name: "Uranus",
    moons: 27,
    mostFamousMoons: ["Oberon", "Rosalind", "Umbriel"],
    hasPlanetaryRings: true,
    relativeMass: 14.6,
  },
  {
    name: "Neptune",
    moons: 14,
    mostFamousMoons: ["Galatea", "Triton"],
    hasPlanetaryRings: true,
    relativeMass: 17.2,
  },
];

function isBigerThanEarth(planets) {
  return planets
    .filter(
      (e) =>
        e.relativeMass >
          planets.filter((e) => e.name === "Earth")[0].relativeMass &&
        e.moons !== 0 &&
        e.mostFamousMoons.some((e) => e.startsWith("G"))
    )
    .map((e) => e.name);
}

function moonMean(planets) {
  const moonMean =
    planets.filter((e) => e.moons !== 0).flatMap((e) => e.mostFamousMoons)
      .length / planets.length;

  return planets.filter((e) => e.moons > moonMean).map((e) => e.name);
}

function hasNoRings(planets) {
  return planets
    .filter((e) => e.hasPlanetaryRings === false && e.name.endsWith("s"))
    .map((e) => e.name);
}
