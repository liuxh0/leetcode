/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
      return 0;
  }

  const max = new Array(nums.length);
  max[0] = nums[0];
  max[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i ++) {
      max[i] = Math.max(nums[i] + max[i - 2], max[i - 1]);
  }

  return max[nums.length - 1];
};
