/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '1';
  for (let i = 1; i < n; i++) {
    result = countAndSayRecursive(result);
  }
  return result;
};

/**
 * @param {string} input
 * @return {string}
 */
function countAndSayRecursive(input) {
  if (input.length === 0) {
    return '';
  }

  const content = input[0];
  const count = (() => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== content) {
        return i;
      }
    }
    return input.length;
  })();

  return `${count}${content}${countAndSayRecursive(input.slice(count))}`;
}
