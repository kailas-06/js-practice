// while loop

// let i = 5;
// while (i <= 10) {
//   console.log("i=", i);
//   i++;
// }

// for loop
// for (let i = 1; i <= 10; i++) {
//   console.log("i = ", i);
// }

// sum using for loop
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log("sum =", sum);
// }

// let str = "Kailas";
// let size = 0;
// for (let val of str) {
//   console.log("val=", val);
//   size++;
// }
// console.log("size=", size);

// let student = {
//   name: "kailas",
//   age: "30",
//   cgpa: 8.3,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key=", key, "value =", student[key]);
// }

// print all no. form 0 to 100

// for (let i = 1; i <= 100; i++) {
//   console.log("i=", i);
// }

// pringt all even no. form 0 to 100
// for (i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("i=", i);
//   }
// }

// game : guess number

// let guessNum = 25;
// let userNum = prompt("Guess the no by user:");

// while (userNum != guessNum) {
//   userNum = prompt("you entered wrong number. Guess again");
// }
// console.log("Congadulation you guess the correct number1");

// factorial using arrow function
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

console.log(factorial(4));

function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

let stringWord = "Ramayana";
let countString = stringWord.length;
console.log(countString);
let size = 0;
for (let val of stringWord) {
  console.log("val: ", val);
  size++;
}
console.log("Total letters :", size);
