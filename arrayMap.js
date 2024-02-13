// map function

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.map((val) => {
  return val;
});
console.log(arr);

let square = 0;
let newArr = arr.map((val) => {
  square = val ** 2;
  return square;
});
console.log(newArr);
