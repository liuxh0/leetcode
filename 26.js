/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) { return 0;}

  let tailIndex = 0;
  let tailNumber = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === tailNumber) { continue; }

    tailIndex ++;
    nums[tailIndex] = num;
    tailNumber = num;
  }

  return tailIndex + 1;
};
