/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = new Map();
  strs.forEach(str => {
    const key = str.split("").sort().join("");
    if (result.has(key)) {
      result.get(key).push(str);
    } else {
      result.set(key, [str]);
    }
  });

  return Array.from(result.values());
};
