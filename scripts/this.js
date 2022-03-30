// const teacher = "Kyle";

// function otherClass() {
//   const teacher = "Suzy";
//   console.log("Welcome");
// }

// function ask() {
//   const question = "Why?";
//   console.log(question);
// }

// otherClass();
// ask();
//---

// "use strict";

// var teacher = "Kyle";

// function otherClass() {
//   const teacher = "Suzy";
//   topic = "React";
//   console.log("Welcome");
// }

// otherClass();
// console.log(teacher);
// console.log(topic);

//--

// let teacher = "Kyle";

// function ask(question) {
//   console.log(this.teacher, question);
// }

// function otherClass() {
//   let myContext = {
//     teacher: "Suzy",
//   };
//   ask.call(myContext, "Why?");
// }

// otherClass();
//---implicit binding
//--- explicit binding

// function ask(question) {
//   console.log(this.teacher, question);
// }

// const workshop = {
//   teacher: "Kyle",
//   ask: ask,
// };

// const workshop2 = {
//   teacher: "Suzy",
//   ask,
// };

// ask.call(workshop, "Can I explicitly set context?");
// ask.call(workshop2, "How do I share a method?");

//hard binding

// const workshop = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");

//-- new binding
// function ask(question) {
//   console.log(this.teacher, question);
// }

// const newEmptyObject = new ask("Wht is 'new' doing here?");

//--default this

// var teacher = "Kyle";

// function ask(question) {
//   console.log(this.teacher, question);
// }

// function askAgain(question) {
//   "use strict";
//   console.log(this.teacher, question);
// }

// ask("What's the non-strict-mode default?");
// askAgain("What's the strict-mode default?");

//--
// const workshop = {
//   teacher: "Kyle",
//   ask: function ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// new (workshop.ask.bind(workshop))("What does this do?");

const workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop.ask("What");
workshop.ask.call(workshop, "What");
