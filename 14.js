/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) { return ''; }

  const minLength = strs.reduce((result, currentString) => {
    return Math.min(result, currentString.length);
  }, strs[0].length);

  const prefix = [];
  for (let i = 0; i < minLength; i ++) {
    const char = strs[0][i];
    if (strs.every(value => value[i] === char)) {
      prefix.push(char);
    } else {
      break;
    }
  }

  return prefix.join('');
};
