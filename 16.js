/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let closest = nums.slice(0, 3).reduce((sum, num) => sum + num, 0);

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > target) {
        r --;
      } else if (sum < target) {
        l ++;
      } else if (sum === target) {
        return target;
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }

  return closest;
};
