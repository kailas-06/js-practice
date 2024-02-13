let listArr = [1, 2, 3, 10, 4, 5, 6, 7, 8];

let sum = 0;

const reduceArr = listArr.reduce((initalAccu, currentVal) => {
  return initalAccu + currentVal;
});
console.log(reduceArr);

const largeNum = listArr.reduce((prev, curr) => {
  return prev > curr ? prev : next;
});
console.log(largeNum);
