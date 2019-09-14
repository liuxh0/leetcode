/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead = new ListNode(undefined);
  dummyHead.next = head;

  let n0 = dummyHead;
  while (true) {
    const n1 = n0.next;
    if (n1 === null) { break; }

    const n2 = n1.next;
    if (n2 === null) { break; }

    n0.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    n0 = n1;
  }

  return dummyHead.next;
};

/**
 * 1 -> 2 -> 3 -> 4
 * 2 -> 1 -> 4 -> 3
 *
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 *      ^0   ^1   ^2
 * n0.next <= n2
 * n1.next <= n2.next
 * n2.next <= n1
 *
 * 1 -> 2 -> 3 -> 4 -> 5 -> null
 *                ^0   ^1   ^2
 */
