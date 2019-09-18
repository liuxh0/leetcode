/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let startIndex = 0;
  if (nums[0] > nums[nums.length - 1]) {
    let left = 0, right = nums.length - 1;
    while (true) {
      const m1 = Math.floor((left + right - 1) / 2);
      const m2 = m1 + 1;

      if(nums[m1] > nums[m2]) {
        startIndex = m2;
        break;
      }

      if (nums[left] < nums[m2]) {
        left = m2;
      } else {
        right = m1;
      }
    }
  }

  left = 0;
  right = nums.length - 1;
  let targetIndex = -1;
  while (left <= right) {
    const middle = Math.floor((left + right + 1) / 2);
    const middleIndex = (middle + startIndex) % nums.length;

    if (nums[middleIndex] === target) {
      targetIndex = middleIndex;
      break;
    }

    if (nums[middleIndex] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return targetIndex;
};
