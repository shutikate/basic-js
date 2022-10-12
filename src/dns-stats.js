function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    let tmp = '';
    const normalizedDomains = domains[i].split('.').reverse();
    for (let j = 0; j < normalizedDomains.length; j++) {
      tmp = tmp + '.' + normalizedDomains[j];
      if (obj[tmp]) {
        obj[tmp] += 1;
      } else {
        obj[tmp] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
