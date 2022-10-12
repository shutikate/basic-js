function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let numberAndLetter = str[0];
  let result = [];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count ++;
      numberAndLetter = count + str[i];
    } else {
      result.push(numberAndLetter);
      count = 1;
      numberAndLetter = str[i];
    }
  }
  result.push(numberAndLetter);
  return result.join('');
}

module.exports = {
  encodeLine
};
