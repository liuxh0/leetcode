/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // The minimum cost to reach i-th step
  const minCost = new Array(cost.length + 1);
  minCost[0] = 0;
  minCost[1] = 0;

  for (let i = 2; i <= cost.length; i ++) {
      minCost[i] = Math.min(minCost[i - 2] + cost[i - 2], minCost[i - 1] + cost[i - 1]);
  }

  return minCost[cost.length];
};
