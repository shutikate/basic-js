const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number') || !((position - 1) in this.result)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const result = this.result.join('~~');
    this.result = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
