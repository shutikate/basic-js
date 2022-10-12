function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  } else {
    const onlyString = members.filter((el) => typeof(el) === 'string');
    const result =[];
    onlyString.forEach((el) => {
      result.push(el.trim()[0].toUpperCase());
    });
    return result.sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
