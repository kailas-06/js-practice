// filter the even Number it returns the new array with filter out

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
let filterArr = arr.filter((val) => {
  return val % 2 === 0;
  //   sum += val;
  //   return
});
// console.log(sum);
console.log(filterArr);

// Ques : From given marks of students print marks which is greater than 80

let marks = [60, 80, 90, 82, 89, 78];

let topper = marks.filter((m) => {
  return m > 80;
});
console.log(topper);
