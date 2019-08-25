/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, area);
    }
  }

  return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let left = 0, right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);

    // It doesn't matter which side to move if equal.
    if (height[left] <= height[right]) {
      left ++;
    } else {
      right --;
    }
  }

  return max;
};
