const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members !== 'object' || members == undefined) return false;
  if (members.length < 2 || members.length === undefined) return false;
  let arr = members.filter(a => typeof a === 'string');
  arr = arr.map(a => a.trim()).map(a => a[0].toUpperCase());
  arr = arr.sort().join('');
  return arr;
}

module.exports = {
  createDreamTeam
};
