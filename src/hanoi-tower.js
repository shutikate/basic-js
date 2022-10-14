function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {
    turns: 0,
    seconds: 0
  };
  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor((result.turns / turnsSpeed) * 3600);
  return result;
}

module.exports = {
  calculateHanoi
};
