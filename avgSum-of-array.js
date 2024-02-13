let marks = [10, 20, 30, 40, 50];

let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

// calculate the average of the given marks using for of method

for (let val of marks) {
  sum += val;
}
console.log(sum);
let avg = sum / marks.length;
console.log(avg);
