/**
* @param {string[]} grid
* @return {number}
*/
var regionsBySlashes = function(grid) {
  const len = grid.length;
  const seen = new Array(len * 3);
  for (let i = 0; i < seen.length; i++) {
    seen[i] = new Array(len * 3).fill(false);
  }

  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (grid[i][j] === '/') {
              seen[i * 3][j * 3 + 2] = true;
              seen[i * 3 + 1][j * 3 + 1] = true;
              seen[i * 3 + 2][j * 3] = true;
          } else if (grid[i][j] === '\\') {
              seen[i * 3][j * 3] = true;
              seen[i * 3 + 1][j * 3 + 1] = true;
              seen[i * 3 + 2][j * 3 + 2] = true;
          }
      }
  }

  let result = 0;
  for (let i = 0; i < len * 3; i++) {
      for (let j = 0; j < len * 3; j++) {
          if (seen[i][j] !== true) {
              mark(seen, i, j);
              result++;
          }
      }
  }

  return result;
};

function mark(seen, i, j) {
  const len = seen.length;
  if (i < 0 || i >= len || j < 0 || j >= len) {
      return;
  }

  if (seen[i][j] === true) {
      return;
  }

  seen[i][j] = true;
  mark(seen, i + 1, j);
  mark(seen, i - 1, j);
  mark(seen, i, j + 1);
  mark(seen, i, j - 1);
}
