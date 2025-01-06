const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr1) {
  const arr2 = arr1.filter(a => a !== -1).sort((a, b) => a - b);
  let ind = -1;
  const arr = arr1.map(a => {
    if (a !== -1) {
      ind++;
      return arr2[ind];
    }
    return a;
  });
  return arr;
}

module.exports = {
  sortByHeight
};
