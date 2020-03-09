/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) {
      return null;
  }

  const stack = [root];
  while (stack.length !== 0) {
      const node = stack.pop();

      if (node.right !== null) {
          stack.push(node.right);
          node.right = null;
      }

      if (node.left !== null) {
          stack.push(node.left);
          node.left = null;
      }

      node.right = stack[stack.length - 1];
  }

  return root;
};
