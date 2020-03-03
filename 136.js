/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
  const numSet = new Set();
  nums.forEach(num => {
      if (numSet.has(num)) {
          numSet.delete(num);
      } else {
          numSet.add(num);
      }
  });

  return numSet.values().next().value;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) {
  let result = 0;
  nums.forEach(num => {
      result = result ^ num;
  });

  return result;
};
