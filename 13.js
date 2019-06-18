/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  const deductableNumbers = Array.from(map.values()).filter((value, index) => index % 2 === 0);

  return s.split('').reduce((result, currentSymbol, currentIndex, array) => {
    const currentNumber = map.get(currentSymbol);
    if (currentNumber === undefined) { throw new Error(); }

    if (currentIndex === 0) {
      return {
        previousNumber: currentNumber,
        total: result.total + currentNumber
      };
    }

    if (currentNumber <= result.previousNumber) {
      return {
        previousNumber: currentNumber,
        total: result.total + currentNumber
      };
    } else {
      return {
        previousNumber: currentNumber,
        total: result.total + currentNumber - 2 * result.previousNumber
      }
    }
  }, { previousNumber: undefined, total: 0 }).total;
};
