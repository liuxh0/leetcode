/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null || root.val === null) {
      return [];
  }

  let nodes = [root];
  const result = [];
  while (nodes.length !== 0) {
      const len = nodes.length;
      result.push(nodes[len - 1].val);

      for (let i = 0; i < len; i++) {
          const node = nodes[i];
          if (node.left !== null) {
              nodes.push(node.left);
          }

          if (node.right !== null) {
              nodes.push(node.right);
          }
      }

      nodes = nodes.splice(len);
  }

  return result;
};
