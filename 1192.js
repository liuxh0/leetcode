/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  connections.forEach(connection => {
    graph[connection[0]].push(connection[1]);
    graph[connection[1]].push(connection[0]);
  });

  const levels = new Array(n).fill(-1);

  const result = [];
  dfs(0, -1, 0, graph, levels, result);
  return result;
};

function dfs(server, parent, level, graph, levels, result) {
  levels[server] = level;

  graph[server].forEach(next => {
    if (next === parent) {
      return;
    } else if (levels[next] !== -1) {
      levels[server] = Math.min(levels[server], levels[next]);
    } else {
      levels[server] = Math.min(levels[server], dfs(next, server, level + 1, graph, levels, result));
    }
  });

  if (levels[server] === level && parent !== -1) {
    result.push([parent, server]);
  }

  return levels[server];
}

// https://www.youtube.com/watch?v=mKUsbABiwBI
