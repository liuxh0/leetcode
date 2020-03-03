/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const indexMap = new Map();

  let maxLength = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
      const c = s[r];
      if (indexMap.has(c)) {
          l = Math.max(l, indexMap.get(c) + 1);
      }

      maxLength = Math.max(maxLength, r - l + 1);
      indexMap.set(c, r);
  }

  return maxLength;
};
