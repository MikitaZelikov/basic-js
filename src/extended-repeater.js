const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  
  let string = '';

  for (let i = 0; i < repeatTimes; i++) {
    let substring = '';
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j === additionRepeatTimes - 1) {
        substring += `${addition}`;
      } else substring += `${addition}${additionSeparator}`;
    }
    if (i === repeatTimes - 1) {
      string += `${str}${substring}`;
    } else string += `${str}${substring}${separator}`;
  }
  return string;
};
  
// options {
//   repeatTimes: 3,
//   separator: '@@',
//   addition: 'top',
//   additionRepeatTimes: 4,
//   additionSeparator: '*',
// }