function isMAC48Address(n) {
  const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '-'];
  const res = n.split('');
  for (let i = 0; i < res.length; i++) {
    if (!array.includes(res[i])) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address
};
 