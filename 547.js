/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const processed = new Set();
  let result = 0;

  for (let i = 0; i < M.length; i++) {
      if (processed.has(i)) {
          continue;
      } else {
          processed.add(i);
          result++;
      }

      const friends = [i];
      while (friends.length !== 0) {
          const friend = friends.pop();
          for (let j = i + 1; j < M.length; j++) {
              if (M[friend][j] === 1 && processed.has(j) === false) {
                  processed.add(j);
                  friends.push(j);
              }
          }
      }
  }

  return result;
};
