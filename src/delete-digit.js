const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = `${n}`;
  let i = 0;
  let temp = true;
  while (temp && i < arr.length) {
    i++;
    if (+arr[i] > +arr[i - 1]) temp = false;
  }
  arr = arr.slice(0, i - 1) + arr.slice(i);
  return +arr;
}

// function deleteDigit(n) {
//   const arr = `${n}`.split('');
//   let i = 0;
//   let temp = true;
//   while (temp && i < arr.length) {
//     i++;
//     if (+arr[i] > +arr[i - 1]) temp = false;
//   }
//   arr[i - 1] = '';
//   return +arr.join('');
// }

module.exports = {
  deleteDigit
};

const n = 65010;
console.log(
  n, '->',
  deleteDigit(n)
)
