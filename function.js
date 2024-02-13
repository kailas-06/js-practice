function sum(a, b) {
  s = a + b;
  return s;
}
let resSum = sum(5, 6);
console.log(resSum);

// sum using arrow function
const arrowSum = (a, b) => {
  return a * b;
};
console.log(arrowSum(5, 6));
