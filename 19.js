/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode();
  dummyHead.next = head;

  let preNode = dummyHead;
  let lastNode = dummyHead;
  for (let i = 0; i < n; i++) {
    lastNode = lastNode.next;
  }

  while (lastNode.next !== null) {
    preNode = preNode.next;
    lastNode = lastNode.next;
  }

  preNode.next = preNode.next.next;
  return dummyHead.next;
};

/**
 * 1  ->  2  ->  3  ->  4  ->  5  n=3
 *        4      3      2      1
 * ^preN  ^tgt   x      ^lastN
 */
