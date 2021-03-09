const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str = str + '';
  let forRepeat = '';
  let answer = '';
  let separator = '+';
  if (options.separator != undefined) separator = options.separator;
  let addition = undefined;
  if (options.addition != undefined) addition = options.addition + '';
  if (options.addition === null) addition = 'null';
  let additionSeparator = '|';
  if (options.additionSeparator != undefined) additionSeparator = options.additionSeparator;
  if (addition != undefined) {
    if (options.additionRepeatTimes != undefined) {
      if (options.additionRepeatTimes < 2) {
          if (options.additionRepeatTimes == 1) forRepeat += addition;
        } else {
          forRepeat = addition + additionSeparator;
          forRepeat = forRepeat.repeat(options.additionRepeatTimes - 1);
          forRepeat = forRepeat + addition;
        }
      } else forRepeat += addition;
    }
  if (options.repeatTimes != undefined) {
    if (options.repeatTimes < 2) {
      if (options.repeatTimes == 1) {
        if (options.additionRepeatTimes == undefined) answer += str;
        else {
          answer = str + forRepeat + separator;
          answer = answer.repeat(options.repeatTimes - 1);
          answer = answer + str + forRepeat;
        }
      }
    } else {
      answer = str + forRepeat + separator;
      answer = answer.repeat(options.repeatTimes - 1);
      answer = answer + str + forRepeat;
    }
  } else answer = str + addition;
  return answer;
};