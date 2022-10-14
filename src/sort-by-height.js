function sortByHeight(arr) {
  const sortArray = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      sortArray.splice(i, 0, -1);
    }
  }
  return sortArray;
}

module.exports = {
  sortByHeight
};
