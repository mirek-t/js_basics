// console.log("Hello World!");

// ZMIENNE
var zmienna_1 = 42;
let zmianna_2 = 42;
const zmienna_3 = 42;

// REDEKLARACJA - nie jest najlepsze
var x1 = 42;
// var x1 = 43; //ma redeklaracje

// console.log(x1);

let x2 = 42;
// let x2 = 43; // nie ma redeklaracji
// console.log(x2);

const x3 = 42;
// const x3 = 43; // nie ma redeklaracji

//REINICJALIZACJA
var y1 = 42;
y1 = 43;

// console.log(y1);

let y2 = 42;
y2 = 43;

// console.log(y2);

const y3 = 42;
// y3 = 43; nie ma reinicjalizacji

//conosole.log(y3);

// SCOPE (zasięg)
// - funkcyjny
// - blokowy

function doSmth() {
  var z1 = 42;
}

// doSmth();
// console.log(z1);

{
  var z1 = 42;
  let z2 = 42;
  const z3 = 42;
}

// console.log(z1);
// console.log(z2);
// console.log(z3);

// hoisting

// console.log(w1);
var w1 = 42;

//interpreter widzi to tak
// var w2;
// console.log(w2);
// w2 = 42;

// TDZ - temporary dead zone
// console.log(w3);
let w3 = 42;

// FUNKCJA
function add(a, b) {
  return a + b;
}

// const q1 = add(1, 2);
// console.log(q1);

// WYRAŻENIE FUNKCYJNE (function expresion)
const q2 = function (a, b) {
  return a + b;
};

// console.log(q2(2, 3));

const q3 = (a, b) => {
  return a + b;
};

// console.log(q3(5, 6));

// Arrow function variations
const r = () => {
  return 42;
};

const r1 = (a) => {
  return 42 + a;
};

const r2 = (a, b) => {
  return 42 + a + b;
};

// IMPLICIT RETURN
const r3 = (a, b) => a + b;
// console.log(r3(4, 5));

//palindrome
function isPalindrome(text) {
  return (
    text.toLowerCase() === text.toLowerCase().split("").reverse("").join("")
  );
}

const isPalindrome2 = function (text) {
  return (
    text.toLowerCase() === text.toLowerCase().split("").reverse("").join("")
  );
};

const isPalindrome3 = (text) => {
  return (
    text.toLowerCase() === text.toLowerCase().split("").reverse("").join("")
  );
};

const isPalindrome4 = (text) =>
  text.toLowerCase() === text.toLowerCase().split("").reverse("").join("");

function checkTemperature(temp) {
  if (temp >= 22) {
    return "ciepło";
  } else {
    return "zimno";
  }
}

const getMax = (digits) => {
  let temp = digits[0];

  for (let i = 0; i < digits.length; i++) {
    if (temp < digits[i]) {
      temp = digits[i];
    }
  }

  return temp;
};

const checkHits = (userHits, drawnHits) => {
  let temp = [];

  for (let i = 0; i < userHits.lenght; i++) {
    if (drawnHits.includes(userHits[i])) {
      temp.push(userHits[i]);
    }
  }

  return temp;
};

console.log([[1, 2], 3, 4].flat(););
