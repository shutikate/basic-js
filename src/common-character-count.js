const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1)
    result += 1;
    if (s2.indexOf(s1[i]) === 0) {
      s2 = s2.slice(1);
    } else if (s2.indexOf(s1[i]) === s2.length - 1) {
      s2 = s2.slice(0, s2.length - 1);
    } else {
      s2 = s2.slice(0, s2.indexOf(s1[i])) + s2.slice(s2.indexOf(s1[i] + 1));
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};

