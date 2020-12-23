const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('');
      return this;
    } else if (value === null) {
      this.arr.push(value);
      return this;
    } else {
      this.arr.push(value.toString());
      return this;
    }
  },
  removeLink(position) {
    if (typeof(position) === "number" && position % 1 == 0 && this.arr.length >= position && position > 0) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error('Error');
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.map(x => `( ${x} )`).join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;
