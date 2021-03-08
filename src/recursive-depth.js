const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, answer = []) {
    answer.push(counter)
    arr.forEach(elem => {
      if (Array.isArray(elem)){
        this.calculateDepth(elem, counter + 1, answer)
      }
    });
    return Math.max(...answer);
  };
};