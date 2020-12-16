const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    
  let res = [];
  for (let i = 0; i < backyard.length; i++) {
    let currentArray = backyard[i];
    res = res.concat(currentArray.filter(x => x === '^^'));
  }
  return res.length;
};
