/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const intMax = Math.pow(2, 31) - 1;
  const intMin = Math.pow(2, 31) * -1;
  
  let sign = '';
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    
    if (c === ' ') {
      // After sign or number, space indicates end.
      if (sign != '') { break; }
      continue;
    }

    if (['+', '-'].includes(c)) {
      if (sign != '') { break; }

      sign = c;
      continue;
    }

    if (c.charCodeAt(0) >= '0'.charCodeAt(0) 
    && c.charCodeAt(0) <= '9'.charCodeAt(0)) {
      // Imply positive sign after first number
      if (sign === '') { 
        sign = '+'; 
      }

      const n = c.charCodeAt(0) - '0'.charCodeAt(0);

      // Overflow detection
      /**
       * +:
       *   result * 10 + n <= intMax
       *   result <= (intMax - n) / 10
       * -:
       *   result * 10 - n >= intMin
       *   result >= (intMin + n) / 10
       */
      if (result > 0 && result > (intMax - n) / 10) {
        result = intMax;
        break;
      }
      if (result < 0 && result < (intMin + n) / 10) {
        result = intMin
        break;
      }

      result = result * 10;

      if (result > 0) {
        result = result + n;
      } else if (result < 0) {
        result = result - n;
      } else if (result === 0) {
        result = n;
        if (sign === '-') {
          result = result * -1;
        }
      }

      continue;
    }

    // In other cases, an invalid char is detected
    break;
  }

  return result;
};