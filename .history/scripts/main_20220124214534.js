function alphabetOrder(word) {
  const wordArray = word.split("").sort().join("");
  return wordArray;
}

// console.log(alphabetOrder("brzeczyszczykiewicz"));

const isEven = (number) => (number % 2 === 0 ? "parzysta" : "nieparzysta");

// console.log(isEven(3));

const isHigher = (frst, scnd) => (frst > scnd ? frst : scnd);

// console.log(isHigher(8, 3));

const multiplicationSign = (n1, n2, n3) =>
  n1 * n2 * n3 >= 0 ? "dodatni" : "ujemny";

// console.log(multiplicationSign(2, 0, -5));

const printStars = (x) => {
  for (let i = 0; i < x; i++) {
    let counter = "";

    for (let j = 0; j <= i; j++) {
      counter = counter + "*";
    }
    console.log(counter);
  }
};

// printStars(4);

const printStars2 = (x) => {
  let str = "";

  for (let i = 0; i < x; i++) {
    str = str + "*";
    console.log(str);
  }
};

// printStars2(6);

const isNumberCorrect = (x, min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  let counter = 1;

  while (randomNumber !== x) {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    counter++;
  }
  return `udało się po ${counter} razach`;
};

// console.log(isNumberCorrect(3, 1, 20));

const mostFreqNumber = (arr) => {
  let numberCounter = {};

  arr.forEach((e) => {
    if (numberCounter[e] !== undefined) {
      numberCounter[e] += 1;
    } else numberCounter[e] = 1;
  });

// console.log(numberCounter);

  console.log(
    Object.keys(numberCounter).reduce(function (a, b) {
      return numberCounter[a] > numberCounter[b] ? a : b;
    })
  );
};

// mostFreqNumber([2, 3, 4, 4, 4, 5, 2, 32]);


const przod = "dom -";
const tyl = " zły";
const razem = przod.concat(tyl);
// console.log(razem);
// console.log(przod+tyl);
// console.log("dom -"+" zły");


function elo(){
  console.log(arguments);// tu musi być to słowo 'arguments'
}
// elo(1, 2, 3, "ala")

//clouser
function x(wartosc1){
  return function y(wartosc2){
    return wartosc1 + wartosc2;
  }
};

// console.log(x(8)(2));
//wynikiem będzie 10;

let podstawa = x(10);
// console.log(podstawa(5));
//wynikiem będzie 15;

//destrukturyzacja
const config = {
  a: 1,
  b: 2
};

const uration = {
  b : 3,
  d : 4
}

// console.log(uration);

const {a, b} = config;
const {c, d} = uration;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Spread operator of object
const configuration = {...config, ...uration}

// console.log(configuration);


//obiekt jako zdestrukturyzowany argument funcji
const destructuring = ({zmienna = 24, wartosc:asdf=23}) => {
  console.log(zmienna+asdf);
}
//=przypisuje wartość domyślną jeśli nie zostanie podana przy wywołaniu
//:zastepuje nazwe (alias)

// destructuring({wartosc: 22});


//opakowywanie (wrapping) typu prostego w obiekt
let h = 23;
// console.log(typeof(h));//wynik: number
let j = new Number(23);
// console.log(typeof(j));//wynik: object
// console.log(h==j);//true
// console.log(h===j);//false
// console.log(h+j);//wynik: 46

//dot notation vs. kwadratowe nawiasy
//notacja wyciągania zmiennych obiektu po kluczu

const f = {
  name: "x-men",
  age: 18
}

const secret = 'name';

// console.log(f["name"]);//x-men
// console.log(f.name);//x-men
// console.log(f[secret]);//x-men

// const names = 1;


const getPokemon = () =>{

  fetch(`https://pokeapi.co/api/v2/pokemon/`).then(result =>console.log(result));
};