// find the userid

// let userName = prompt("Enetr your name and surname without spaces..");
// let userId = "@" + userName + userName.length;
// console.log(userId);

const str = "Hello, World!";
console.log(str.indexOf("World")); // Output: 7 // Returns the index of the first occurrence of a substring, starting from the specified index.

console.log(str.substring(7, 12)); // Output: "World" // Returns a substring between the specified indices.
//  substring(strstInd , endIdx)
let marks = [10, 20, 30, 40, 50];
let sum = 0;
// for (let val of marks) {
//   sum = sum += val;
//   res = sum / marks.length;
// }
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(sum);

// question : Take a value form user and print in new array upto that number form 1

let userNum = prompt("Enter the value");

let arr = [];
for (let j = 1; j <= userNum; j++) {
  arr[j - 1] = j;
}
console.log(arr);

// using array print the total sum of that array numbers

const newArr = arr.reduce((prev, current) => {
  return (prev += current);
});
console.log(newArr);

// const factorial = arr.reduce((prev, current) => {
//   return prev * current;
// });
// console.log(factorial);

const factorial = (num) => (num <= 1 ? 1 : factorial(num - 1) * num);
console.log(factorial(5));
