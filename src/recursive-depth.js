const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let investigArr = arr.filter(x => Array.isArray(x));
    if (!investigArr.length) return 1;
    return 1 + Math.max(...investigArr.map(k => this.calculateDepth(k)));
  }
};
