const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let array = String(n).split('');
  const resultArray = [];
  for (let i = 0; i < String(n).split('').length; i++) {
    let newArray = array.slice();
    newArray.splice(i, 1);
    resultArray.push(newArray.join(''));
  }
  return Number(Math.max(...resultArray));
}

module.exports = {
  deleteDigit
};
