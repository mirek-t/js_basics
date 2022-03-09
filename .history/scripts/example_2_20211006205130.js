const data = [
  {
    name: "pawel",
    age: 36,
    city: "krakow",
    hobbies: ["python", "javascript", "drugs"],
  },
  {
    name: "remik",
    age: 26,
    city: "krakow",
    hobbies: ["kodowanie", "silownia", "muzyka"],
  },
  {
    name: "szymon",
    age: 29,
    city: "czestochowa",
    hobbies: ["kebab", "computers", "more kebab"],
  },
  {
    name: "mirek",
    age: 31,
    city: "krakow",
    hobbies: ["cars", "music", "programming"],
  },
  {
    name: "anita",
    age: 30,
    city: "krakow",
    hobbies: ["grafika użytkowa", "rysunek studyjny", "skateboarding"],
  },
];

// const aveAge = (persons) => {
//   let totalAge = 0;

//   for (let i = 0; i < persons.length; i++) {
//     totalAge += persons[i]["age"];
//   }

//   return totalAge / persons.length;
// };

// console.log(aveAge(data));

// deklaratywnie

const aveAge2 = (persons) => {
  let totalAge = 0;

  persons.forEach((person) => {
    totalAge += person["age"];
  });

  return totalAge / persons.length;
};

console.log(aveAge2(data));
