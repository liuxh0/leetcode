/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return [nums];
  }

  return nums.map((num, index) => {
    const subset = nums.slice(0, index).concat(nums.slice(index + 1));
    return permute(subset).map(value => [num, ...value]);
  }).reduce((previousValue, currentValue) => {
    return [...previousValue, ...currentValue];
  }, []);
};
