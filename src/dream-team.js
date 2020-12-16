const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (Array.isArray(members)) {
    let res = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === 'string') {
        let currentName = members[i];
        for (let j = 0; j < currentName.length; j++) {
          if (currentName[j] !== ' ') {
            res.push(currentName[j].toUpperCase());
            break;
          } else continue;
        } 
      } else continue;
    }
    return res.sort().join('');
  } else return false;
};
