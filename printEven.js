// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// guess the user Number is correct or wrong

let guessnum = 34;
let usernum = prompt("Guess the number");

if (usernum != guessnum) {
  usernum = prompt("Enter the correct number");
} else {
  console.log("congradulation you entered the correct number!");
}
