/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (target === 0) {
    return [ [] ];          // A solution is found. No more numbers needed.
  } else if (target < 0) {
    return [];              // A solution is not possible any more.
  }

  // Recursively find sub-solution
  return candidates.map((value, index) => {
    const combinations = combinationSum(candidates.slice(index), target - value);
    return combinations.map(combination => [value, ...combination]);
  }).reduce((previousValue, currentValue) => {
    // Combine arrays of number[] into one array
    return previousValue.concat(currentValue);
  }, []);
};

console.log(combinationSum([2,3,6,7],8));
