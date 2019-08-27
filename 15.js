/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  /* https://www.youtube.com/watch?v=-AMHUdZc9ss */

  const solutions = [];
  nums.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        solutions.push([nums[i], nums[l], nums[r]]);
        l = findNextL(l, r, nums);
        r = findNextR(l, r, nums);
      } else if (sum > 0) {
        r = findNextR(l, r, nums);
      } else if (sum < 0) {
        l = findNextL(l, r, nums);
      }
    }

    i = findNextIndexConditionally(i, 1, nextI => {
      return nextI >= nums.length || nums[nextI] !== nums[i];
    });
  }

  return solutions;
};

function findNextL(currentL, r, nums) {
  return findNextIndexConditionally(currentL, 1, nextL => {
    return nextL >= r || nums[nextL] !== nums[currentL];
  });
}

function findNextR(l, currentR, nums) {
  return findNextIndexConditionally(currentR, -1, nextR => {
    return l >= nextR || nums[nextR] !== nums[currentR];
  });
}

function findNextIndexConditionally(current, increment, condition) {
  let next = current + increment;
  while (true) {
    if (condition(next) === true) { break; }
    next = next + increment;
  }
  return next;
}
