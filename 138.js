/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
      return null;
  }

  const nodeMap = new Map();
  const newHead = new Node(head.val, head.next, head.random);
  nodeMap.set(head, newHead)

  let node;
  node = newHead;
  while (node.next !== null) {
      const nextNode = node.next;
      const newNode = new Node(nextNode.val, nextNode.next, nextNode.random)
      node.next = newNode;

      nodeMap.set(nextNode, newNode);
      node = newNode;
  }

  node = newHead;
  while (node !== null) {
      node.random = nodeMap.get(node.random)
      node = node.next;
  }

  return newHead;
};
