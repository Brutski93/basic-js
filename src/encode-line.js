const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let strNew = '';
  if (str.length < 2) return str;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      if (count > 1) strNew += count;
      strNew += str[i - 1];
      count = 1;
    } else count++;
  }
  if (count > 1) strNew += count;
  strNew += str[str.length - 1];
  return strNew;
}

module.exports = {
  encodeLine
};
