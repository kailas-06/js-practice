// set of price are given calculate the price after 10% discount on given price

let item = [100, 200, 300, 400, 500, 600];
// let i = 0;
// for (let val of item) {
//   console.log(`value of item is ${i} : ${val}`);
//   i++;
//   let offer = (val * 90) / 100;
//   console.log(`Final value after 10% offer is: ${offer}`);
// }

for (let i = 0; i < item.length; i++) {
  let offer = item[i] / 10;
  item[i] -= offer;
}
console.log(`item price after 10% offer: ${item}`);

// let p = 0; //for counting list
// for (let price of item) {
//   p++;
//   let offer = price / 10;
//   newPrice = price - offer;
//   console.log(`Final price if items ${p} : ${newPrice}`);
// }
