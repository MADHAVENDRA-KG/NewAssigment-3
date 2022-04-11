<<<<<<< HEAD
// const inquirer = require("inquirer");

// const questions = [
//   {
//     type: "input",
//     name: "first_name",
//     message: "What's your first name",
//   },
//   {
//     type: "input",
//     name: "last_name",
//     message: "What's your last name",
//     default: function () {
//       return "Doe";
//     },
//   },
// ];
// const arr = [];
// inquirer.prompt(questions).then((answers) => {
//   let a = JSON.stringify(answers, null, "  ");
// });
// // arr.push()
// // arr.push(a);
// console.log(a);

const readline = require("readline-sync");

// Enter the number
let a = Number(readline.question());
let number = [];
for (let i = 0; i < a; ++i) {
  //   const b = ;
  //   const c = readline.question();
  const p = new Object();
  p.address = JS(readline.question());
  //   p.name = readline.question();
  number.push(p);
}
console.log(number);
=======
// const inquirer = require("inquirer");

// const questions = [
//   {
//     type: "input",
//     name: "first_name",
//     message: "What's your first name",
//   },
//   {
//     type: "input",
//     name: "last_name",
//     message: "What's your last name",
//     default: function () {
//       return "Doe";
//     },
//   },
// ];
// const arr = [];
// inquirer.prompt(questions).then((answers) => {
//   let a = JSON.stringify(answers, null, "  ");
// });
// // arr.push()
// // arr.push(a);
// console.log(a);

const readline = require("readline-sync");

// Enter the number
let a = Number(readline.question());
let number = [];
for (let i = 0; i < a; ++i) {
  //   const b = ;
  //   const c = readline.question();
  const p = new Object();
  p.address = JS(readline.question());
  //   p.name = readline.question();
  number.push(p);
}
console.log(number);
>>>>>>> cb2070b (minor changes)
