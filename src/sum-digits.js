const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 0) n *= -1;
  if (`${n}`.length === 1) return n;
  const arr = `${n}`.split('.').join('').split('').map(a => +a);
  const summ = arr.reduce(
    (sum, item) => sum + item,
    0,
  );
  return getSumOfDigits(summ);
}

module.exports = {
  getSumOfDigits
};
