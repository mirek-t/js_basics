const auto = {
  brand: "Audi",
  vmax: 123,
  speed: 0,
  engine: false,
};

const startEngine = (car) => {
  car.engine = true;
  console.log("Silnik odpalony");
};

const stopEngine = (car) => {
  if (car.speed === 0) {
    car.engine = false;
    console.log("Silnik zgaszony");
  } else {
    console.log("Zatrzymaj auto zanim zgasisz silnik");
  }
};

const speedUp = (car, value) => {
  if (car.engine) {
    car.speed = Math.min(car.speed + value, car.vmax);
    console.log(`Twoja prędkość to ${car.speed} km/h.`);
  } else {
    console.log("Odpal silnik, żeby przyśpieszyć");
  }
};

const slowDown = (car, value) => {
  car.speed = Math.max(car.speed - value, 0);
  console.log(`Twoja prędkość to ${car.speed} km/h.`);
};

console.log(auto);

speedUp(auto, 20);
startEngine(auto);
speedUp(auto, 20);
speedUp(auto, 20);
speedUp(auto, 500);
console.log(auto);

slowDown(auto, 10);
slowDown(auto, 200);
stopEngine(auto);
console.log(auto);

// let x = 42;

// const addToX = (y) => {
//   y = y + 10;
// };

// addToX(x);
// console.log(x);

class Auto {
  constructor(brand, vmax) {
    this.brand = brand;
    this.vmax = vmax;
    this.engine = false;
    this.speed = 0;
  }

  startEngine() {
    this.engine = true;
    console.log("Silnik odpalony");
  }

  stopEngine() {
    if (this.speed === 0) {
      this.engine = false;
      console.log("Silnik zgaszony");
    } else {
      console.log("Zatrzymaj auto zanim zgasisz silnik");
    }
  }

  speedUp(value) {
    if (this.engine) {
      this.speed = Math.min(this.speed + value, this.vmax);
      console.log(`Twoja prędkość to ${this.speed} km/h.`);
    } else {
      console.log("Odpal silnik, żeby przyśpieszyć");
    }
  }

  slowDown(value) {
    this.speed = Math.max(this.speed - value, 0);
    console.log(`Twoja prędkość to ${this.speed} km/h.`);
  }
}

const auto2 = new Auto("VW", 200);
