/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const lsum = new ListNode(0);

  let n1 = l1, n2 = l2, nsum = lsum;
  while (n1 !== null || n2 !== null) {
    let sum = 0;

    if (n1 !== null) {
      sum += n1.val;
      n1 = n1.next;
    }
    if (n2 !== null) {
      sum += n2.val;
      n2 = n2.next;
    }

    if (nsum.next !== null) {
      sum += nsum.next.val;
    }

    if (sum < 10) {
      nsum.next = new ListNode(sum);
      nsum = nsum.next;
    } else {
      nsum.next = new ListNode(sum - 10);
      nsum = nsum.next;
      nsum.next = new ListNode(1);
    }
  }

  return lsum.next;
};
