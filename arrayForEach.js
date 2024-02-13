const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

// using for each array list sum
arr.forEach((val) => {
  sum += val;
  // sum = val ** 2;    square of each ele
});
const total = sum;
console.log(total);

// square of the array list
arr.forEach((num) => {
  console.log(num * num);
});
