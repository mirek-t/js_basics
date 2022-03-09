// console.log("Hello World!");

// zmienne
var zmienna_1 = 42;
let zmianna_2 = 42;
const zmienna_3 = 42;

// redeklaracja - nie jest najlepsze
var x1 = 42;
var x1 = 43; //ma redeklaracje

// console.log(x1);

let x2 = 42;
// let x2 = 43; // nie ma redeklaracji

const x3 = 42;
// const x3 = 43; // nie ma redeklaracji

//reinicjalizacja
var y1 = 42;
y1 = 43;

// console.log(y1);

let y2 = 42;
y2 = 43;

// console.log(y2);

const y3 = 42;
// y3 = 43; nie ma reinicjalizacji

//conosole.log(y3);

// scope (zasięg)
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

console.log(z1);
// console.log(z2);
// console.log(z3);
