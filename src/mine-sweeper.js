function minesweeper(matrix) {
  let count = 0;
  let arrayForAll = [];
  let resultArray = [];
  let sizeOfMatrix;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      positionX = i;
      positionY = j;
      let startX = (positionX - 1 < 0) ? positionX : positionX - 1;
      let startY = (positionY - 1 < 0) ? positionY : positionY - 1;
      let endX = (positionX + 1 > matrix.length - 1) ? positionX : positionX + 1;
      let endY = (positionY + 1 > matrix[i].length - 1) ? positionY : positionY + 1;

      for (let row = startX; row <= endX; row++) {
        for (let col = startY; col <= endY; col++) {
          if (matrix[row][col] === true) {
            count += 1;
          }
        }
      }
      matrix[i][j] === true ? arrayForAll.push(count - 1) : arrayForAll.push(count);
      count = 0;
    }
    sizeOfMatrix = matrix[i].length;
  }
  for (let i = 0; i < arrayForAll.length; i += sizeOfMatrix) {
    resultArray.push(arrayForAll.slice(i, i + sizeOfMatrix));
  }
  return resultArray;
}

module.exports = {
  minesweeper
};
