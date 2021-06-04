const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isStraight) {
    this.isStraight = isStraight;
  }

  encrypt(message, key) {
    if (message && key) {
      message = message.toLowerCase();
      key = key.toLowerCase();
      let factor = 1;
      let currentIndex = 0;
      const validCharMessArr = message.match(/[a-z]/gi);
      let codeCharMess;

      if (!validCharMessArr) return message;

      if (key.length < validCharMessArr.length) {
        for (let i = 0; i < validCharMessArr.length; i++) {
            codeCharMess = validCharMessArr[i].charCodeAt(0) + key[currentIndex].charCodeAt(0) - 'a'.charCodeAt(0);
            
            if (codeCharMess > 122) codeCharMess -= 26;
            validCharMessArr[i] = String.fromCharCode(codeCharMess);

            if (i === key.length * factor - 1) {
                currentIndex = 0;
                factor++;
            } else currentIndex++;
        }

        for (let j = 0; j < message.length; j++) {
            if (!message[j].match(/[a-z]/i)) validCharMessArr.splice(j, 0, message[j]);
        }
      }

      if (key.length >= validCharMessArr.length) {
        key = key.substring(0, validCharMessArr.length);
        for (let i = 0; i < validCharMessArr.length; i++) {
            codeCharMess = validCharMessArr[i].charCodeAt(0) + key[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (codeCharMess > 122) codeCharMess -= 26;
            validCharMessArr[i] = String.fromCharCode(codeCharMess);
        }

        for (let j = 0; j < message.length; j++) {
            if (!message[j].match(/[a-z]/i)) validCharMessArr.splice(j, 0, message[j]);
        }
      }

      if (this.isStraight === false) return validCharMessArr.reverse().join('').toUpperCase();
      return validCharMessArr.join('').toUpperCase();
    } else throw new Error('переданы не все параметры!');
  } 

  decrypt(message, key) {
    if (message && key) {
      message = message.toLowerCase();
      key = key.toLowerCase();
      let factor = 1;
      let currentIndex = 0;
      const validCharMessArr = message.match(/[a-z]/gi);
      let codeCharMess;

      if (key.length < validCharMessArr.length) {
        for (let i = 0; i < validCharMessArr.length; i++) {
            codeCharMess = validCharMessArr[i].charCodeAt(0) - (key[currentIndex].charCodeAt(0) - 'a'.charCodeAt(0));
            
            if (codeCharMess < 97) codeCharMess += 26;
            validCharMessArr[i] = String.fromCharCode(codeCharMess);

            if (i === key.length * factor - 1) {
                currentIndex = 0;
                factor++;
            } else currentIndex++;
        }

        for (let j = 0; j < message.length; j++) {
            if (!message[j].match(/[a-z]/i)) validCharMessArr.splice(j, 0, message[j]);
        }
      }

      if (key.length >= validCharMessArr.length) {
        key = key.substring(0, validCharMessArr.length);
        for (let i = 0; i < validCharMessArr.length; i++) {
          codeCharMess = validCharMessArr[i].charCodeAt(0) - (key[i].charCodeAt(0) - 'a'.charCodeAt(0));
            if (codeCharMess < 97) codeCharMess += 26;
            validCharMessArr[i] = String.fromCharCode(codeCharMess);
        }

        for (let j = 0; j < message.length; j++) {
            if (!message[j].match(/[a-z]/i)) validCharMessArr.splice(j, 0, message[j]);
        }
      }

      if (this.isStraight === false) return validCharMessArr.reverse().join('').toUpperCase();
      return validCharMessArr.join('').toUpperCase();
    } else throw new Error('переданы не все параметры!');
  }
}

module.exports = VigenereCipheringMachine;
