/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';

  for (let i = 0; i < s.length; i ++) {
    for (let j = 0; j <= Math.min(i, s.length - i - 1); j ++) {
        console.log(i, s[i - j], s[i + j]);
      if (s[i + j] === s[i - j] && 2 * j + 1 > result.length) {
        result = s.substring(i - j, i + j + 1);
      } else {
        break;
      }
    }

    for (let j = 0; j <= Math.min(i, s.length - i - 2); j ++) {
      if (s[i - j] === s[i + j + 1] && 2 * j + 2 > result.length) {
        result = s.substring(i - j, i + j + 2);
      } else {
        break;
      }
    }
  }

  return result;
};
