/*
  PROBLEM: 
  - Find the middle element (node) of a linked list.
*/

/*
  SOLUTION:
  - Use two pointers (fast and slow), one moving at twice the speed of the other, to find the middle element efficiently.
*/

import { ListNode, SinglyLinkedList } from "../../data-structures/singly-linked-list/singly-linked-list";

function findMiddle(list: SinglyLinkedList<number>) : ListNode<number> | null {
  const head = list.head;
  if (!head) return null;

  let fast: ListNode<number> | null = head;
  let slow: ListNode<number> | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow && slow?.next;
    fast = fast.next.next;
  }

  return slow;
}

// Driver Code

function main() {
  const list = new SinglyLinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);

  console.log(findMiddle(list), "middle")
}

main();