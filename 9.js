/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function(x) {
  if (x < 0) { return false; }

  const digits = [];
  while (x !== 0) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }

  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if (x === 0) { return true; }
  if (x < 0 || x % 10 === 0) { return false; }

  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);
};
