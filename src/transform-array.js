const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  if (Array.isArray(arr)) {

    let resArr = arr.slice();

    for (let i = 0; i < resArr.length; i++) {
      if (resArr[i] === '--discard-next' && (resArr[i+2] === '--discard-prev' || resArr[i+2] === '--double-prev')) {
        resArr.splice(i, 3);
        i--;
      }
      if (resArr[i] === '--discard-next' && resArr.length > i + 1) {
        resArr.splice(i, 2);
        i--;
      }
      if (resArr[i] === '--discard-next' && resArr.length === i + 1) {
        resArr.splice(i, 1);
      }
      if (resArr[i] === '--discard-prev' && i !== 0) {
        resArr.splice(i - 1, 2);
        i--;
      }
      if (resArr[i] === '--discard-prev' && i === 0) {
        resArr.splice(i, 1);
      }
      if (resArr[i] === '--double-next' && resArr.length > i + 1) {
        resArr.splice(i, 1, resArr[i + 1]);
      }
      if (resArr[i] === '--double-next' && resArr.length === i + 1) {
        resArr.splice(i, 1);
      }
      if (resArr[i] === '--double-prev' && i !== 0) {
        resArr.splice(i, 1, resArr[i - 1]);
      }
      if (resArr[i] === '--double-prev' && i === 0) {
        resArr.splice(i, 1);
      }
    }
    return resArr;

  } else throw new Error();

};
