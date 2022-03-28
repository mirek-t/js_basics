// const user1 = {
//   name: "Monika",
//   score: 3,
//   increment: function () {
//     user1.score++;
//   },
// };

// console.log(user1);
// user1.increment()
// console.log(user1);

//---

// const user2 = {};

// user2.name = "Przemek";
// user2.score = 6;
// user2.increment() = function() {
//     user2.score++
// }

// const user3 = Object.create(null);

// user3.name = "Mateusz";
// user3.score = 6;
// user3.increment() = function(){
//     user3.score++
// }

//---

// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment() = function(){
//         newUser.score++
//     }
//     return newUser;
// }

// const user4 = userCreator("Monika", 3);
// const user5 = userCreator("Przemek", 2);
// user4.increment();
// console.log(user4);

// ---

// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("Logged in");
//   },
// };

// function userCreator2(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const user6 = userCreator2("Mateusz", 3);
// user6.increment();
// console.log(user6.hasOwnProperty("score"));
// console.log(user6.hasOwnProperty("increment"));

// ---

// function userCreator3(name, score) {
//   this.name = name;
//   this.score = score;
// }

// userCreator3.prototype.increment = function () {
//   this.score++;
// };

// const user7 = new userCreator3("Monika", 3);
// user7.increment();
// console.log(user7);

//map array prototype custom implementation
// Array.prototype.map = function (cb) {
//   const newArr = [];
//   this.forEach((e, id, arr) => {
//     newArr.push(cb(e * 2, id, arr));
//   });
//   return newArr;
// };

// ---

// syntacting sugr
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("Login");
  }
}
