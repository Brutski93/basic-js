const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function executeNext(arr, what, index) {
  let arrNew = arr;
  if (what === 'double') arrNew.splice(index, 1, arr[index + 1]);
  if (what === 'discard') {
    if (typeof arrNew[index + 2] === 'string') arrNew.splice(index, 3);
    else arrNew.splice(index, 2);
  }
  arrNew = arrNew.filter(a => a);
  return arrNew;
}
function executePrev(arr, what, index) {
  let arrNew = arr.concat();
  if (index === 0) {
    arrNew.splice(0, 1);
    return arrNew;
  }
  if (what === 'double') arrNew.splice(index, 1, arr[index - 1]);
  if (what === 'discard') arrNew.splice(index - 1, 2);
  arrNew = arrNew.filter(a => a);
  return arrNew;
}
function checkInput(arr) {
  if (typeof arr !== 'object') return true;
  if (arr == undefined) return true;
  if (arr[0] == undefined) return true;
  return false;
}
function transform(arr) {
  if (checkInput(arr)) throw new NotImplementedError("\'arr\' parameter must be an instance of the Array!");
  if (!arr.some(a => typeof a === 'string')) return arr;
  let i = 0;
  while (typeof arr[i] === 'number') {
    i++;
  }
  const temp = arr[i].slice(2).split('-');
  let arrNew = arr;
  if (temp[1] === 'next') arrNew = executeNext(arr, temp[0], i);
  if (temp[1] === 'prev') arrNew = executePrev(arr, temp[0], i);
  return transform(arrNew);
}
module.exports = {
  transform
};

console.log(
  transform(
    { 'foo': 'bar' }
  )
)