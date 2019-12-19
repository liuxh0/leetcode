/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (k === 0) {
      return [[]];
  }

  const result = [];
  for (let i = 1; i <= n - k + 1; i++) {
      combine(n - i, k - 1).forEach(combination => {
          result.push([i, ...combination.map(n => n + i)]);
      });
  }

  return result;
};
