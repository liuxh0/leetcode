/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 31);

  let result = 0;
  while (x !== 0) {
    // Get last digit
    const number = x % 10;
    x = (x - number) / 10;

    // Overflow detection
    if (number < 0 && result < Math.ceil((min - number) / 10)) {
      return 0;
    } else if (number > 0 && result > Math.floor((max - number) / 10)) {
      return 0;
    }

    result = result * 10 + number;
  }

  return result;
};
