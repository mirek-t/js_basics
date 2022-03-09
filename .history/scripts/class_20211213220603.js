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
  car.speed = Math.min(car.speed + value, car.vmax);
};
