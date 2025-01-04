const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const check = Array(matrix[0].length).fill(true);
  let summ = 0;
  for (let i = 0; check.includes(true) && i < matrix.length; i++) {
    for (let j = 0; check.includes(true) && j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) check[j] = false;
      if (check[j]) summ += matrix[i][j];
    }
  }
  return summ;
}

module.exports = {
  getMatrixElementsSum
}
