/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        mark(grid, i, j);
      }
    }
  }

  return result;
};

function mark(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
    return;
  }

  grid[i][j] = '0';
  mark(grid, i + 1, j);
  mark(grid, i - 1, j);
  mark(grid, i, j + 1);
  mark(grid, i, j - 1);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const unionFind = new UnionFind(grid);
  const m = grid.length, n = grid[0].length;

  const tryUnion = function(i1, j1, i2, j2) {
    if (i2 < 0 || i2 >= m || j2 < 0 || j2 >= n || grid[i2][j2] !== '1') {
      return;
    }

    unionFind.union(i1 * n + j1, i2 * n + j2);
  }

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (grid[i][j] === '1') {
        tryUnion(i, j, i + 1, j);
        tryUnion(i, j, i - 1, j);
        tryUnion(i, j, i, j + 1);
        tryUnion(i, j, i, j - 1);
      }
    }
  }

  return unionFind.count;
};

var UnionFind = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  this.parent = new Array(m * n);
  this.rank = new Array(m * n);
  this.count = 0;

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        this.parent[i * n + j] = i * n + j;
        this.rank[i * n + j] = 0;
        this.count ++;
      }
    }
  }
}

UnionFind.prototype.find = function(i) {
  if (this.parent[i] === i) {
    return i;
  }

  this.parent[i] = this.find(this.parent[i]);
  return this.parent[i];
}

UnionFind.prototype.union = function(i, j) {
  const pi = this.find(i);
  const pj = this.find(j);

  if (pi !== pj) {
    if (this.rank[pi] > this.rank[pj]) {
      this.parent[pj] = pi;
    } else if (this.rank[pi] < this.rank[pj]){
      this.parent[pi] = pj;
    } else {
      this.parent[pi] = pj;
      this.rank[pj] += 1;
    }

    this.count -= 1;
  }
}
