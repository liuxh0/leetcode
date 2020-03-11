/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) {
      return [];
  }

  const result  = [];

  let levelNodes = [root];
  while (levelNodes.length !== 0) {
    result.unshift(levelNodes.map(node => node.val));

    const nextLevel = [];
    levelNodes.forEach(node => {
        if (node.left !== null) {
            nextLevel.push(node.left);
        }
        if (node.right !== null) {
            nextLevel.push(node.right);
        }
    });

    levelNodes = nextLevel;
  }

  return result;
};
