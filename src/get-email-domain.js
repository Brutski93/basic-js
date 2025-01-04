const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let str = email.trim();
  str = str.slice(str.lastIndexOf('@') + 1);
  if (str.includes('@') || !str.includes('.')) return false;
  return str;
}

module.exports = {
  getEmailDomain
};
