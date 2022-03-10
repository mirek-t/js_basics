const km_to_m = (km) => km * 1000;
// console.log(km_to_m(5.4));

const celsius_to_kelvin = (celsius) => `${celsius + 273.15} K`;
// console.log(celsius_to_kelvin(0));

const name = "Ola";
const puppyName = "Romana";
let sentence = (n) => "Zdanie: " + n + " ma kota";
let sentence2 = (n) => `Zdanie: ${n.toUpperCase()} ma kota ${puppyName}`; // template literal string (backtick)
// console.log(sentence(name));
// console.log(sentence2(name));

const celsius_to_fahrenheit = (celsius) => `${32 + celsius * (9 / 5)} °F`;
// console.log(celsius_to_fahrenheit(1));

const arr_intersection = (arr1, arr2) => {
  const temp = [];

  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      temp.push(item);
    }
  });

  return temp;
};

// console.log(arr_intersection([1, 2, 3], [2, 3, 5]));

const arr_intersection_2 = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));
// console.log(arr_intersection_2([1, 2, 3], [2, 3, 4, 5]));

const symmetrical_difference = (arr1, arr2) =>
  arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));

// console.log(symmetrical_difference([1, 2, 3], [2, 4, 5]));

const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// console.log(union([1, 2, 3], [2, 3, 4]));

// console.log(new Set([1, 2, 3, 4, 3]));

const get_curent_date = () => new Date().toLocaleTimeString();
// console.log(get_curent_date);

// const create_html_hdl = (name, hdlLevel) = `<h${hdlLevel}>Hello ${name}</h${hdlLevel}>`;
// console.log(create_html_hdl("Roman", 1);

const rectangleArea = (a, b) => a * b;
// console.log(rectangleArea(2, 5));

const speedUp = (speed, amount) => `Speed is ${speed + amount} km/h`;
// console.log(speedUp(20, 123));

const helloLord = () => {
  const greeting = ["Witaj", "Wspaniale, że jesteś", "Cześć Milordzie"];
  return greeting[Math.round(Math.random() * 2)];
};
// console.log(helloLord());

const getMaxValue = (...digits) => digits.sort().reverse()[0];
// console.log(getMaxValue(1, 2, 3, 4, 5, -4));

const getMinValue = (...digits) => digits.sort()[0];
// console.log(getMinValue(1, 2, 3, 4, 5, -4));

const sumArr = (arr) => arr.reduce((acc, cu) => acc + cu);
// console.log(sumArr([1, 2, 3, 4]));

const concatArrays = (...arrays) => arrays.flat(2);
// console.log(concatArrays([1, 2, 3], [2, 3, 4], [3, 4, 5]));

const longestName = (names) => {
  let temp = names[0];

  names.forEach((name) => {
    if (temp.length < name.length) {
      temp = name;
    }
  });
  return temp;
};
// console.log(longestName(["ola", "ala", "zbigniew", "janusz"]));

const getDayAbbr = (name) => {
  const lower_name = name.toLowerCase();
  // if (name.toLowerCase() === "poniedziałek") {
  //   return "pon";
  // } else if (lower_name === "wtorek") {
  //   return "wt";
  // } else if (lower_name === "środa") {
  //   return "śr";
  // } else if (lower_name === "czwartek") {
  //   return "czw";
  // } else if (lower_name === "piątek") {
  //   return "pt";
  // } else if (lower_name === "sobota") {
  //   return "sob";
  // } else if (lower_name === "niedziela") {
  //   return "ndz";
  // }

  let abbr = "";

  switch (name.toLowerCase()) {
    case "poniedziałek":
      abbr = "pon";
      break;
    case "wtorek":
      abbr = "wt";
      break;
    case "środa":
      abbr = "śr";
      break;
    case "czwartek":
      abbr = "czw";
      break;
    case "piątek":
      abbr = "pt";
      break;
    case "sobota":
      abbr = "sb";
      break;
    case "niedziela":
      abbr = "ndz";
      break;
    default:
      abbr = "Incorrect day name";
  }

  return abbr;
};

// console.log(getDayAbbr("wtorek"));

// -----------------API FETCH-----------------------

const getExchangeRate = (currencyCode) => {
  const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/?format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((response) => console.log(response.rates[0].mid));
};

// getExchangeRate("EUR");

const substractText = (text) => text.substr(0, 3);
// console.log(substractText("Styczeń"));

const substractTill = (text) => text.substring(text.length - 3, text.length);
// console.log(substractTill("Styczeń"));

const sequenceBetween = (a, b) => {
  const result = [];
  if (a === b) {
    console.log(a);
  } else if (a < b) {
    for (let i = a + 1; i < b; i++) {
      result.push(i);
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      result.push(i);
    }
  }
  return console.log(result);
};
// sequenceBetween(30, 20);

const loopFor = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 10);
  }
  let x = 23;
  return x + 5;
};

// console.log(loopFor([1, 2, 3, 4]));

const mapToTriplet = (array) => {
  const result = [];

  array.map((item) => result.push([item, item * 2, item * 3]));

  return result;
};

const mapToTriplet_2 = (array) =>
  array.map((item) => [item, item * 2, item * 3]);

// console.log(mapToTriplet_2([1, 3, 5, 67]));

// ----------------BEZ IMPLICIT RETURN-------------------
const filterEven = (tbl) => {
  return tbl.filter((row) => row % 2 !== 1);
};

// console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const students = [
  { name: "Jan", grade: 96, city: "Krakow" },
  { name: "Juan", grade: 84, city: "Valencia" },
  { name: "John", grade: 100, city: "London" },
  { name: "Johannes", grade: 65, city: "Berlin" },
  { name: "Jean", grade: 90, city: "Lyon" },
];

const studentGrades = students.filter((student) => student.grade >= 90);
// console.log(studentGrades);

const studentGrades_2 = (students) =>
  students.filter((student) => student["grade"] >= 90);

// console.log(studentGrades_2(students));

const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

const petCounts = (pets) =>
  pets.reduce(function (obj, pet) {
    if (!obj[pet]) {
      obj[pet] = 1;
    } else {
      obj[pet]++;
    }
    return obj;
  }, {});

// console.log(petCounts(pets));

const arrayArrays = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];

const flated = (arr) => arr.flat(3);

// console.log(flated(arrayArrays));

const w = [1, 2, "k", 3, 4];
const x = [3, "v", 8, { kye: "empty" }, "d", 34, "baby"];
const y = ["a", [{ key: 31, name: "Mirek" }, ["e"]]];
const z = [
  {
    name: "Asia",
    gender: "W",
    years: 28,
  },
  "koniec",
];

const concatenate = (a, b, c) => a.concat(b).concat(c).flat(2);

// console.log(concatenate(x, y, z));

//---------------SPREAD OPERATOR-------------------------
const addArrays = (a, b) => {
  return a.concat(...b).flat();
};

// console.log(addArrays(z, y));
// console.log(...w);

const addArrays_2 = (a, b, c, d) => {
  return (p = [...b, ...a, ...d, ...c]);
};

// console.log(addArrays_2(w, x, y, z));

const addFiveArrayValue = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
// console.log(addFiveArrayValue(...w));

const copyArray = (a, b, c) => {
  p = [...a, ...b];
  p.push(c);
  return p;
};

// console.log(copyArray(w, x, y));

//------------------REST OPERATOR----------------------

const multiply = (multiplier, ...args) => {
  return args.map((element) => {
    return element * multiplier;
  });
};

// console.log(multiply(2, 1, 2, 3));

const powitanie = (object) => {
  return `Cześć ${object.name}. Twój wynik to ${object["grade"]}. Zapraszamy po odbiór nagrody do ${object.city}.`;
};

// console.log(powitanie(students[2])); // students -> 203 linijka
const judgment = (statement) =>
  statement ? "You're 100% damn right!" : "There is no statement you damn!";
// console.log(judgment(""));

const checkPrice = (price) =>
  price < 45
    ? "Holy crap, it is extremely damn cheap"
    : "Holy crap, it is fucking damn expensive!";

// console.log(checkPrice(13));

const staff = [3, "v", 8, { kye: "bass" }, "d", 34, , "baby"];

const moveToFrstPosition = (arr) => {
  return arr.copyWithin(0, 4, 6); //copyWithin to funkcja wbudowana
};
// console.log(moveToFrstPosition(staff));

const doubleArrMix = (arr) => {
  return arr.concat(staff).copyWithin(7, 3);
};
// console.log(doubleArrMix(staff));

array1 = [1, 2, 30, 39, 29, 10, 13, 2];
const isBelowThreshold = (array1) => {
  return array1.every(
    (currentValue) => currentValue < 40 || currentValue !== "empty"
  ); //pętla every srawdza każdy warunek i gdy wszystkie spełniają zależność oddaje true, jeśli choć jeden nie to false
};

// console.log(isBelowThreshold(staff));

const hasNegativeNumbers = (...args) => {
  console.log(args);
  return args.some((item) => item < 0);
}; // podobnie jak powyżej ale tu sprawdza czy chociaż jeden warunek nie został spełniony wtedy zwraca false

// console.log(hasNegativeNumbers(...array1));

const addAll = (...args) => args.reduce((a, b) => a + b);
// console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

const numberDefactoring = (number) => {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr;
};
// console.log(numberDefactoring(9));

const factorialByArgs = (...args) => args.reduce((a, b) => a * b); // silnia
// console.log(factorialByArgs(1, 2, 3, 4));

const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return factorialByArgs(...numberDefactoring(Math.abs(number)));
  }
};
// console.log(factorial(-5));

const people = [
  { name: "Jan", grade: 96, id: 1, city: "Krakow" },
  { name: "Juan", grade: 84, id: 2, city: "Valencia" },
  { name: "John", grade: 100, id: 3, city: "London" },
  { name: "Johannes", grade: 65, id: 4, city: "Berlin" },
  { name: "Jean", grade: 90, id: 5, city: "Lyon" },
];

const find = (arr) => {
  return arr.find((item) => item["grade"] > 95); //znajduje tylko pierwszą pozycję jaką znajdzie w tabeli, jeśli nie znajdzie zwraca undefined
};

// console.log(find(people));
array2 = [1, 2, 30, 39, 29, 10, 13, 2];
const find2 = (arr) => {
  return arr.includes(2); //zwraca true bądź false
};

// console.log(find2(array2));

const obj = [{ id: "a" }, { id: "b" }, { id: "c" }];

const foundIndex = (arr) => arr.findIndex((item) => item.id === "c");
// console.log(foundIndex(obj));

function concatenateString(...args) {
  const obj = { name: "" };
  obj.name = args.reduce((acc, cu) => acc + cu);
  return obj;
}
// console.log(concatenateString("m", "i", "r", "e", "k"));

const g = new Array("l", 1); // kiedy używać takiego zapisu? -> konstruktor opakowuje to w obiekt
// console.log(g);

// const getWeather = (location) => {
//   const host = "https://www.metaweather.com/api/";

//   const weather = fetch(`${host}location/523920/`, {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => response.text())
//     .then((response) => console.log(response));
// };

// getWeather("warsow");

// search/?query=${location}

const config = {
  tagName: "h1",
  idName: "one", //unikalny musi być
  className: "item",
  text: "Hello JS",
};

const createTag = ({
  tag: tagName = "div",
  klasa: className = "klasa",
  id: idName = "uniq",
  tekst: text = "Witaj JS",
}) => {
  h1 = document.createElement(tagName);
  h1.className = className;
  h1.id = idName;
  h1.innerText = text; //tu lepiej używać tej drugiej funkcjonalności
  return h1;
};

// console.log(createTag(config));
const tab = [1, 2, 30, 39, 29, 10, 13, 2];

const index = (arr) => {
  return arr.indexOf(10);
};

// console.log(index(tab));

const connectElements = (arr) => {
  return arr.join("-");
};

// console.log(connectElements(tab));

const removeAndAdd = (arr) => {
  arr.pop();
  const length = arr.length;
  arr.push(length);
  return arr;
};

// console.log(removeAndAdd(tab));

const reverseArr = (arr) => {
  const reversed = arr.reverse(); //funkcja destruktywna!!! odwraca tablicę oryginalną
  return reversed;
};

// console.log(reverseArr(tab));
// console.log(tab);

const removeFirst = (arr) => {
  arr.shift();
  return arr;
};

// console.log(removeFirst(tab));

const toString = (arr) => {
  let d = arr.toString();
  return d;
};
// d = tab.toString();
// console.log(toString(tab));
// console.log(...tab);
// console.log(typeof d);
// console.log(typeof tab);

const addFirst = (arr) => {
  arr.unshift("pole");
  return arr;
};

// console.log(addFirst(tab));

const returnValues = (arr) => {
  const iterator = arr.values();
  const result = [];
  for (const value of iterator) {
    result.push(value);
  }
  return result;
};

// console.log(returnValues(["a", "b", "c"]));

const array5 = [1, 2, 3, 4, 5, 8, 7, 9, 34];
array5.foo = "dupa";
array5.attr = "zbita";
array5.function = () => console.log(array.foo);

const a = (arr) => {
  for (let element in arr) {
    if (element % 2 === 0) {
      console.log(element + " " + array5.foo);
    } else {
      console.log(element + " " + array5.attr);
    }
  }
  return "end";
};

// console.log(a(array5));

//-----------------TERNARY OPERATOR-----------------------------------

const b = (arr) => {
  for (let element of arr) {
    console.log(element % 2 === 0 ? array5.foo : array5.attr);
  }
  return "end";
};

// console.log(b(array5));

const returnEvenNo = (arr) => {
  arr.forEach((e) => (e % 2 === 0 ? console.log(e) : "nic"));
};

// console.log(returnEvenNo(array5));

const vege = [
  {
    name: "totato",
    color: "red",
    price: 2.4,
    currency: "PLN",
    origin: "Poland",
    sale: `${15}%`,
  },
  {
    name: "lettuce",
    color: "green",
    price: 1.4,
    currency: "PLN",
    origin: "Italy",
    sale: undefined,
  },
  {
    name: "cucumber",
    color: "green",
    price: 0.4,
    currency: "EUR",
    origin: "Italy",
    sale: `${50}%`,
  },
  {
    name: "papprika",
    color: "yellow",
    price: 5.4,
    currency: "PLN",
    origin: "Ukraine",
    sale: undefined,
  },
  {
    name: "celery",
    color: "brawn",
    price: 2.1,
    currency: "EUR",
    origin: "Poland",
    sale: `${20}%`,
  },
];

function getVege() {
  return vege;
}

// console.log(getVege());

vege.cheapy = () => {
  return getVege().filter(
    ({ price, sale, currency }) => price < 2 && currency === "PLN" && !sale
  );
};

// console.log(vege.cheapy(vege));

vege.sale = () => {
  table = getVege().filter(({ sale }) => sale);
  return table.map((e) => e.name + ": " + `${e.sale}`);
};

// console.log(vege.sale());

const todaysSale = () => {
  vege.sale().forEach((item) => console.log(`Today's ${item} sale!`));
};

// todaysSale();

vege.county = () =>
  getVege().reduce(function (end, obj) {
    if (!end[obj.origin]) {
      end[obj.origin] = 1;
    } else {
      end[obj.origin]++;
    }
    return end;
  }, {});

// console.log(vege.county());

const compoundInterest = (capital, years, percent) => {
  return (fianlCapital = capital * Math.pow(1 + percent / 100, years));
};

// console.log(compoundInterest(10000, 5, 2));

const showPopup = () => {
  alert("Wonderfull job Master"); //jak stylizować, i zmienić wyświetlanie żeby nie było host w alercie
};

// console.log(showPopup());

function bateryStatus(a) {
  return `Your battery is ${a}% low`;
}

// console.log(bateryStatus(50));

function createElement(tagName) {
  return document.createElement(tagName);
}

let h = createElement("footer");

// console.log(h);

function addClass(cls) {
  h.classList.add(cls);
  return h;
}

let dg = addClass("s");
// console.log(dg); //dlaczego w tym miejscu zmienna dg ma już id i atrybuty?

dg.id = "gganbu";

dg.setAttribute("atrybut", "wartość");

dg.addEventListener("click", () => {
  console.log("Works");
});

const toLocalStorage = () => {
  localStorage.setItem("surname", "Smith");
};

toLocalStorage();

const fromLocalStorage = () => {
  const s = localStorage.getItem("surname");
  console.log(s);
};

// fromLocalStorage();

const pokeApi = (pokeID) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;

  if (pokeID < 10) {
    pokeID = `00${pokeID}`;
  }
  if (pokeID > 9 && pokeID < 100) {
    pokeID = `0${pokeID}`;
  }

  const body = document.querySelector("body");
  const pokeImage = document.createElement("img");
  const text = document.createTextNode(pokeID);
  pokeImage.srcset = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeID}.png`;
  body.appendChild(pokeImage);
  body.appendChild(text);
};

async function fetchData() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data.name;
}

function writePokemon() {
  const abc = fetchData(); // here the data will be return.
  console.log(
    abc.then((res) => {
      return res;
    })
  );
}

// writePokemon();

function showPokemon(no) {
  for (let i = 1; i < no + 1; i++) {
    pokeApi(i);
  }
}

// showPokemon(9);

function getWeather(url) {
  return fetch(url).then((response) => response.json());
}

function getWeatherData(pr, weatherParams) {
  pr.then((data) => {
    const newData = data.map(
      (item) => `${item.stacja}: ${item[weatherParams]}`
    );
    console.log(newData);
  });
}

const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/");
// getWeatherData(result, "temperatura")

const sumArrayItems = (arr1, arr2) => {
  const t = [];

  for (
    let i = 0;
    i < (arr1.length > arr2.length ? arr1.length : arr2.length);
    i++
  ) {
    t.push((arr1[i] || 0) + (arr2[i] || 0));
  }
};

// console.log(sumArrayItems([1, 2, 3], [4, 5])); // [5, 7, 3]

const getMax = (digit) => `${digit}`.split("").sort((a, b) => b - a)[0];

console.log(getMax(123456)); //6
