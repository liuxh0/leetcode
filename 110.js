/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) {
      return true;
  }

  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) {
      return false;
  } else {
      return isBalanced(root.left) && isBalanced(root.right);
  }
};

const nodeMap = new Map();

function getDepth(node) {
  if (node === null) {
      return 0;
  }

  if (nodeMap.has(node)) {
      return nodeMap.get(node);
  }

  const depth = Math.max(getDepth(node.left), getDepth(node.right)) + 1;
  nodeMap.set(node, depth);
  return depth;
}
