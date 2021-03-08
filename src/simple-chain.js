const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLength: 0,
  links: [],
  getLength() {
    return this.chainLength;
  },
  addLink(value) {
    if (value === undefined) this.links.push(`( )`);
    else this.links.push(`( ${value} )`);
    this.chainLength++;
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || Math.round(position) != position || position > this.chainLength || position < 1) {
      this.links = [];
      this.chainLength = 0;
      throw new Error();
    } else this.links.splice(position - 1, 1);
    this.chainLength--;
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
          let answer = this.links.join('~~');
      this.links = [];
      this.chainLength = 0;
      return answer;
  }
};

module.exports = chainMaker;
