function getSumOfDigits(n) {
    const nToString = String(n);
    let count = 0;
    for (let i = 0; i < nToString.length; i++) {
      count += Number(nToString[i]);
    }
    if(count < 10) {
      return count;
    } else {
      return getSumOfDigits(count);
    }
  }

module.exports = {
  getSumOfDigits
};
