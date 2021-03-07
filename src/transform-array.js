const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let answer = [];
  if (typeof arr != 'object') return 'THROWN';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next' || arr[i] == '--discard-prev' || arr[i] == '--double-next' || arr[i] == '--double-prev') continue;
    else if (arr[i - 1] == '--discard-next') continue;
    else if (arr[i - 1] == '--double-next') {
      if (arr[i + 1] == '--double-prev') answer.push(arr[i], arr[i], arr[i]);
      else if (arr[i + 1] == '--discard-prev') answer.push(arr[i]);
      else answer.push(arr[i], arr[i]);
    } else if (arr[i + 1] == '--discard-prev') continue;
    else if (arr[i + 1] == '--double-prev') answer.push(arr[i], arr[i]);
    else answer.push(arr[i]);
  }
  return answer;
};
