/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node === null) {
      return null;
  }

  const clonedNodes = new Map();
  return cloneNode(clonedNodes, node);
};

function cloneNode(clonedNodes, nodeToClone) {
  if (clonedNodes.has(nodeToClone)) {
      return clonedNodes.get(nodeToClone);
  }

  const clonedNode = new Node(nodeToClone.val);
  clonedNodes.set(nodeToClone, clonedNode);

  clonedNode.neighbors = nodeToClone.neighbors.map(node => cloneNode(clonedNodes, node));
  return clonedNode;
}
