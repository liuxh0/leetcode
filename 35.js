/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function(nums, target) {
  let start = 0, end = nums.length - 1;

  /* Binary search */
  while(start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else if (target > nums[middle]) {
      start = middle + 1;
    }
  }

  return start;
};
