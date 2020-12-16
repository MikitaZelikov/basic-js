const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let x = Math.pow(2, disksNumber) - 1;
  let y = Math.floor(3600 / turnsSpeed * x);

  result.turns = x;
  result.seconds = y;
  return result;
};
