function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if(Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  try {

    let month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return 'spring';
  }
  if (month >= 5 && month <= 7) {
    return 'summer';
  }
  if (month >= 8 && month <= 10) {
    return 'autumn';
  }
  return 'winter';

  } catch {

    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
