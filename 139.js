/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  return breakable(s, new Set(wordDict), new Map());
};

function breakable(s, wordDict, memo) {
  if (s.length === 0) {
    return true;
  }

  if (memo.has(s)) {
    return memo.get(s);
  }

  for (let i = 1; i <= s.length; i ++) {
    if (wordDict.has(s.substring(0, i)) && breakable(s.substring(i), wordDict, memo)) {
      memo.set(s, true);
      return true;
    }
  }

  memo.set(s, false);
  return false;
}
