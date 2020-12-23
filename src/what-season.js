const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date !== undefined) {
        if (typeof(date) === "object" && Date.parse(date) !== NaN && date.getTime(date) - Date.parse(date) !== 0) {
            if (date.getMonth() > 1 && date.getMonth() < 5) return 'spring'; 
            if (date.getMonth() > 4 && date.getMonth() < 8) return 'summer';
            if (date.getMonth() > 7 && date.getMonth() < 11) {
                return 'autumn';
            } else return 'winter';
        } else throw new Error();
    } else return 'Unable to determine the time of year!';
};
