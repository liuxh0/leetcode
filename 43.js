/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') { return '0'; };

  if (num1 === '1') { return num2; }
  if (num2 === '1') { return num1; }

  if (num1.length === 1 && num2.length === 1) {
    const charCodeZero = '0'.charCodeAt(0);
    const product = (num1.charCodeAt(0) - charCodeZero) * (num2.charCodeAt(0) - charCodeZero);
    if (product < 10) {
      return String.fromCharCode(product + charCodeZero);
    } else {
      return [
        String.fromCharCode(Math.floor(product / 10) + charCodeZero),
        String.fromCharCode(product % 10 + charCodeZero)
      ].join('');
    }
  }

  if (num1.length === 1) {
    return multiply(num2, num1);
  }

  // From here on: num1.length > 1 && num2.length === 1
  return num1.split('').reverse()
    .map(value => multiply(value, num2))
    .reduce((previousValue, currentValue, currentIndex) => {
      if (currentValue === '0') {
        return previousValue;
      } else {
        currentValue = currentValue + '0'.repeat(currentIndex);
        return add(previousValue, currentValue);
      }
    }, '0');
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  if (num1 === '0') { return num2; }
  if (num2 === '0') { return num1; }

  if (num1.length === 1 && num2.length === 1) {
    const charCodeZero = '0'.charCodeAt(0);
    const sum = (num1.charCodeAt(0) - charCodeZero) + (num2.charCodeAt(0) - charCodeZero);
    if (sum < 10) {
      return String.fromCharCode(sum + charCodeZero);
    } else {
      return '1' + String.fromCharCode(sum - 10 + charCodeZero);
    }
  }

  if (num1.length < num2.length) {
    return add(num2, num1);
  }

  // From here on: num1.length >= num2.length
  let result = '';
  for (let i = 0; i < num1.length; i++) {
    const digit1 = num1[num1.length - 1 - i];
    const digit2 = i < num2.length ? num2[num2.length - 1 - i] : '0';
    let sum = add(digit1, digit2);

    if (result.length === i + 1) {  // If there is a carry
      sum = add(sum, '1');
      result = `${sum}${result.substring(1)}`
    } else {
      result = `${sum}${result}`;
    }
  }

  return result;
}
