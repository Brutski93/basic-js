const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber < 1) return false;
  const answer = {};
  answer.turns = (7 * 2 ** (disksNumber - 3)) + (2 ** (disksNumber - 3) - 1);
  answer.seconds = Math.floor(answer.turns * 60 * 60 / turnsSpeed);
  return answer;
}

module.exports = {
  calculateHanoi
};
