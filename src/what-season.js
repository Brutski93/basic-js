const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( /*date */) {
  if (typeof date !== 'object') {
    throw new NotImplementedError('Invalid date!');
  }
  throw new NotImplementedError('Not implemented');
  let month = date.getMonth();
  const seasons = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];
  return seasons[month];
  // // let temp = `${date}`.split(' ');
  // // console.log(temp);
}

module.exports = {
  getSeason
};
