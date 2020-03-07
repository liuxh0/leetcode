/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
      return 0;
  }

  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          const result = { area: 0 };
          mark(grid, i, j, result);

          if(result.area > maxArea) {
              maxArea = result.area;
          }
      }
  }

  return maxArea;
};

function mark(grid, x, y, result) {
  const xmax = grid.length - 1;
  const ymax = grid[0].length - 1;

  if (x < 0 || x > xmax || y < 0 || y > ymax) {
      return;
  }

  if (grid[x][y] === 0) {
      return;
  }

  grid[x][y] = 0;
  result.area++;

  mark(grid, x + 1, y, result);
  mark(grid, x - 1, y, result);
  mark(grid, x, y + 1, result);
  mark(grid, x, y - 1, result);
}
