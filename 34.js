/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // Regular binary search
  let l = 0, r =nums.length - 1, targetIndex = -1;
  while (l <= r) {
    const middle = Math.floor((l + r) / 2);
    const num = nums[middle];

    if (num === target) {
      targetIndex = middle;
      break;
    } else if (num < target) {
      l = middle + 1;
    } else if (num > target) {
      r = middle - 1;
    }
  }

  if (targetIndex === -1) {
    return [-1, -1];
  }

  // Find left boundary using binary search
  let l1 = l, r1 = targetIndex, leftBoundary = targetIndex;
  while (l1 <= r1) {
    const middle = Math.floor((l1 + r1) / 2);
    const num = nums[middle];

    if (num === target && (middle === 0 || nums[middle - 1] !== num)) {
      leftBoundary = middle;
      break;
    }

    if (num === target) {
      r1 = middle - 1;
    } else {
      l1 = middle + 1;
    }
  }

  // Find right boundary using binary search
  let l2 = targetIndex, r2 = r, rightBoundary = targetIndex;
  while (l2 <= r2) {
    const middle = Math.floor((l2 + r2) / 2);
    const num = nums[middle];

    if (num === target && (middle === nums.length -1 || nums[middle + 1] !== num)) {
      rightBoundary = middle;
      break;
    }

    if (num === target) {
      l2 = middle + 1;
    } else {
      r2 = middle - 1;
    }
  }

  return [leftBoundary, rightBoundary];
};
