const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = new Object();
  let answ1, answ2;
  answ1 = Math.pow(2, disksNumber) - 1;
  answ2 = (1 * answ1)/(turnsSpeed / 3600);
  obj.turns = answ1;
  obj.seconds = Math.floor(answ2);
  return obj;
};
