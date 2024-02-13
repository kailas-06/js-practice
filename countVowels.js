// count the vowel is the given string

function countVowel(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  //   console.log(count);
  return count;
}
console.log(countVowel("Apana College"));

// function vowel(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }

// console.log(vowel("apanacollege"));
