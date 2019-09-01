/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations1 = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLettersMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  const indexes = new Array(digits.length);
  indexes.fill(0);

  const result = [];
  while (indexes[0] < digitToLettersMap.get(digits[0]).length) {
    const letters = indexes.reduce((letters, letterIndex, digitIndex) => {
      return letters + digitToLettersMap.get(digits[digitIndex])[letterIndex];
    }, '');

    result.push(letters);

    indexes[indexes.length - 1] ++;
    for (let i = indexes.length - 1; i >= 1; i--) {
      if (indexes[i] >= digitToLettersMap.get(digits[i]).length) {
        indexes[i] = 0;
        indexes[i - 1] ++;
      }
    }
  }

  return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLettersMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  return getLetterCombinations(digits, digitToLettersMap, '');
};

/**
 * @param {string} digits
 * @param {Map<string, string[]>} map
 * @param {string} prestring
 * @return {string[]}
 */
function getLetterCombinations2(digits, map, prestring) {
  if (digits.length === 0) {
    return [prestring];
  }

  const digit = digits[0];
  const letters = map.get(digit);

  return letters
    .map(letter => getLetterCombinations(digits.substring(1), map, prestring + letter))
    .reduce((result, combinations) => {
      result.push(...combinations);
      return result;
    }, []);
}
