function renameFiles(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    let numOfElement = names.slice(0, i).filter((e) => e === names[i]).length;
    if (numOfElement === 0) {
      if(result.includes(names[i])) {
        result.push(names[i] + `(1)`)
      } else {
        result.push(names[i]);
        };
    } else {
      if (result.includes(names[i])) {
        result.push(names[i] + `(${numOfElement})`);
      }
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
