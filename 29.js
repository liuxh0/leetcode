/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide1 = function(dividend, divisor) {
  if (dividend === 0) { return 0; }
  if (dividend === -1* Math.pow(2, 31)&& divisor === -1) {
    return Math.pow(2, 31) -1;
  }

  const sign = (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1);
  const absDividend = Math.abs(dividend), absDivisor = Math.abs(divisor);
  let rest = absDividend, result = 0;
  while (rest - absDivisor >= 0) {
    rest = rest - absDivisor;
    result ++;
  }

  return sign * result;
};


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide2 = function(dividend, divisor) {
  if (dividend === 0) { return 0; }
  if (dividend === -1* Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) -1;
  }

  const sign = (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1);
  const absDividend = Math.abs(dividend), absDivisor = Math.abs(divisor);
  let rest = absDividend, result = 0;
  while (rest - absDivisor >= 0) {
    let sum = absDivisor, subresult = 1;
    while (rest - sum - sum >= 0) {
      sum = sum + sum;
      subresult = subresult + subresult;
    }

    rest = rest - sum;
    result = result + subresult;
  }

  return sign * result;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide3 = function(dividend, divisor) {
  if (dividend === 0) { return 0; }
  if (dividend === -1* Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) -1;
  }

  const recursiveDivide = function(dividend, divisor) {
    if (dividend < divisor) {
      return { quotient: 0, sum: 0 };
    } else if (dividend < divisor + divisor) {
      return { quotient: 1, sum: divisor };
    } else {
      const result1 = recursiveDivide(dividend, divisor + divisor);
      const result2 = recursiveDivide(dividend - result1.sum, divisor);
      const quotient = result1.quotient + result1.quotient + result2.quotient;
      const sum = result1.sum + result2.sum;
      return { quotient, sum };
    }
  }

  const sign = (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1);
  const absDividend = Math.abs(dividend), absDivisor = Math.abs(divisor);
  return recursiveDivide(absDividend, absDivisor).quotient * sign;
};

/**
 * d(40, 3) = d(40, 6) * 2 + d(40 - 36, 3)
 *            d(40, 6) = d(40, 12) * 2 + (40 - 36, 6)
 *                       d(40, 12) = d(40, 24) * 2 + d(40 - 24, 12)
 *                                                   d(40 - 24, 12) = d(16, 12) = 1
 */
