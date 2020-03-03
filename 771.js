/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewelTypes = new Map();
  for (let i = 0; i < J.length; i++) {
      jewelTypes.set(J[i], null);
  }

  let count = 0;
  for (let i = 0; i < S.length; i++) {
      if (jewelTypes.has(S[i])) {
          count++;
      }
  }

  return count;
};
