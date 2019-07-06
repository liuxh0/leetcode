/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (i !== length) {
        nums[length] = nums[i];
      }

      length ++;
    }
  }

  return length;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
  let findex = 0;
  let bindex = nums.length - 1;

  while (findex <= bindex) {
    const num = nums[findex];
    if (num !== val) {
      findex ++;
    } else {
      // swap nums[findex] and nums[bindex]
      nums[findex] = nums[bindex];
      nums[bindex] = num;
      bindex --;
    }
  }

  return findex;
};
