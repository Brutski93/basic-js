const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)",  "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  for (let j = 0; j < names.length; j++) {
    obj[names[j]] = 1;
  }
  const arr = names;
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (arr1.includes(arr[i])) obj[arr[i]] += 1;
    if (obj[arr[i]] > 0 && arr1.includes(arr[i])) temp = `${arr[i]}(${obj[arr[i]]})`;
    if (obj[arr[i]] > 1 && arr1.includes(arr[i])) temp = `${arr[i]}(${obj[arr[i]] - 1})`;
    arr1.push(temp);
  }
  
  return arr1;
}

module.exports = {
  renameFiles
};
