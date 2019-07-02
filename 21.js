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
var mergeTwoLists = function(l1, l2) {
  const result = new ListNode(0);

  let n1 = l1, n2 = l2, nr = result;
  while (n1 !== null || n2 !== null) {
    if (n2 === null || (n1 !== null && n1.val < n2.val)) {
      nr.next = new ListNode(n1.val);
      n1 = n1.next;
    } else {
      nr.next = new ListNode(n2.val);
      n2 = n2.next;
    }

    nr = nr.next;
  }

  return result.next;
};
