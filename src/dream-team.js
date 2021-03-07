const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let answer = [];
  if (typeof members != 'object' || members == null) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      letter = (/[A-Za-z]{1}/i).exec(members[i]);
      answer.push(letter[0].toUpperCase())
    }
  }
  answer.sort();
  return answer.join('').toUpperCase();
};