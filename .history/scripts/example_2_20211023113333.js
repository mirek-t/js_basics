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

// imperatywnie
const aveAge = (persons) => {
  let totalAge = 0;

  for (let i = 0; i < persons.length; i++) {
    totalAge += persons[i]["age"];
  }

  return totalAge / persons.length;
};

// console.log(aveAge(data));

// deklaratywnie

const aveAge2 = (persons) => {
  let totalAge = 0;

  persons.forEach((person) => {
    totalAge += person["age"];
  });

  return totalAge / persons.length;
};

// console.log(aveAge2(data));

const aveAgePeopleFromKrakow = (people) => {
  let totalAge = 0;

  let counter = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i]["city"] === "krakow") {
      totalAge += people[i]["age"];
      counter++;
    }
  }
  return totalAge / counter;
};

// console.log(aveAgePeopleFromKrakow(data));

const aveAgePeopleFromKrakow2 = (people) => {
  let totalAge = 0;

  let counter = 0;

  people.forEach((p) => {
    if (p["city"] === "krakow") {
      totalAge += p["age"];
      counter++;
    }
  });

  return totalAge / counter;
};

// console.log(aveAgePeopleFromKrakow2(data));

const aveAgePeopleFromKrakow3 = (people) => {
  const peopleKrakow = people.filter((p) => p["city"] === "krakow");
  let totalAge = 0;

  console.log(peopleKrakow);

  peopleKrakow.forEach((item) => {
    totalAge += item["age"];
  });

  return totalAge / peopleKrakow.length;
};

console.log(aveAgePeopleFromKrakow3(data));

const transformToDigits = (items) => {
  const temp = [];

  for (let j = 0; j < items.length; j++) {
    temp.push(items[j]["name"].length);
  }

  return temp;
};

const transformToDigits2 = (elements) => {
  const temp = [];
  elements.forEach((element) => {
    temp.push(element["name"].length);
  });
  return temp;
};

const transformToDigits3 = (elements) => elements.map((e) => e["name"].length);

const getAllHobbies = (persons) => {
  const temp = [];

  for (let i = 0; i < persons.length; i++) {
    for (let j = 0; j < persons[i]["hobbies"].length; j++) {
      temp.push(persons[i]["hobbies"][j]);
    }
  }
  return temp;
};

console.log(transformToDigits3(data));

const getAllHobbies2 = (items) => items.map((item) => item["hobbies"]).flat();

console.log(getAllHobbies2(data));
