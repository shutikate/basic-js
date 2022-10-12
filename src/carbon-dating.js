const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || typeof(sampleActivity) !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || sampleActivity.length === 0) {
    return false;
  } else {
    return Math.ceil(Math.abs(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)));
  }
}

module.exports = {
  dateSample
};
