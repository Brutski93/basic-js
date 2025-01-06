const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }
  calculateDepth(arr = this.arr, iter = 1) {
    let arrNew = Array(arr.length + 1).fill(iter);
    for (let i = 0; i < arrNew.length; i++) {
      if (typeof arr[i] === 'object') {
        arrNew[i] = this.calculateDepth(arr[i], arrNew[i] + 1);
      }
    }
    iter =  Math.max.apply(1, arrNew);
    return iter;
  }
}

module.exports = {
  DepthCalculator
};
