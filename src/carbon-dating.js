const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const input = sampleActivity - 0;
  if (isNaN(input) || input > 15 || input <= 0 || typeof sampleActivity !== 'string') return false;
  // if (input > 15 || input <= 0) throw new NotImplementedError('Not implemented');
  const a = Math.log(MODERN_ACTIVITY / input);
  const b = Math.log(2);
  // console.log(a, b);
  let x = a / b;
  x = Math.ceil(x * HALF_LIFE_PERIOD);
  return x;
}

module.exports = {
  dateSample
};

console.log(
  dateSample('-3')
)
