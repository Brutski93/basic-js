const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.');
    arr = makeDom(arr);
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]] === undefined) obj[arr[j]] = 0;
      obj[arr[j]] += 1;
    }
  }
  return obj;
}

function makeDom(arr1) {
  const arr = arr1.reverse();
  arr[0] = `.${arr[0]}`;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = `${arr[i - 1]}.${arr[i]}`;
  }
  return arr;
}

module.exports = {
  getDNSStats
};

domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ]

console.log(
  getDNSStats(domains)
);