function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = arr.slice();
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if(i !== arr.length - 1) {
        result.splice(i, 1, 0);
        result.splice(i + 1, 1, 0);
      } else {
        result.splice(i, 1, 0);
      }
    }
    if (arr[i] === '--discard-prev') {
      if(i !== 0) {
        result.splice(i - 1, 1, 0);
        result.splice(i, 1, 0);
      } else {
        result.splice(i, 1, 0);
      }
    }
    if (arr[i] === '--double-next') {
      if(i !== arr.length - 1) {
        result.splice(i, 1, result[i + 1]);
      } else {
        result.splice(i, 1);
      }
    }
    if (arr[i] === '--double-prev') {
      if(i !== 0) {
        result.splice(i, 1, result[i - 1]);
      } else {
        result.splice(i, 1);
      }
    }
  }
  return result.filter((el) => el !== 0);
}

module.exports = {
  transform
};
