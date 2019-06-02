/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // key: number, value: index
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const complementaryNumber = target - number;

    if (map.has(complementaryNumber)) {
      const complementaryIndex = map.get(complementaryNumber);
      return [complementaryIndex, i];
    } else {
      map.set(number, i);
    }
  }
};
