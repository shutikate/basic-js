const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes('^^')) {
      const elem = matrix[i].filter( (el) => el === '^^').length;
      result += elem;
    }
  }
  return result;
}

module.exports = {
  countCats
};
