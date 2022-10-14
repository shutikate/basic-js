class DepthCalculator {
  calculateDepth (arr) {
    let depth = 1;
    let maxDepth = 1;
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        depth = 1 + this.calculateDepth(arr[i]);
      }
      if(depth > maxDepth) {
        maxDepth = depth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
