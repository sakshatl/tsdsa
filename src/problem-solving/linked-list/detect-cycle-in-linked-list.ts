/*
  PROBLEM:
  - Detect Cycle in Linked List
*/

/*
  SOLUTION:
  - the hasCycle method implements Floyd's Cycle Detection Algorithm. 
  - It uses two pointers, 'slow' and 'fast', where 'slow' moves one step at a time while 'fast' moves two steps at a time. 
  - If there's a cycle in the linked list, eventually 'slow' and 'fast' will meet at the same node.
*/

import { ListNode, SinglyLinkedList } from "../../data-structures/linked-list/singly-linked-list/singly-linked-list";

function hasCycle(list: SinglyLinkedList<number>): boolean {
  if (!list.head) return false;

  let slow: ListNode<number> | null = list.head;
  let fast: ListNode<number> | null = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next!;;

    // Cycle Detected
    if (slow === fast) {
      return true;
    }
  }

  return false; // No cycle detected
}

function main() {
  const linkedList = new SinglyLinkedList<number>();
  linkedList.push(10);
  linkedList.push(20);
  linkedList.push(30);
  linkedList.push(40);

  // Create a cycle for demonstration purposes
  linkedList.head!.next!.next!.next!.next = linkedList.head!.next!.next;

  console.log('hasCycle:', hasCycle(linkedList))
}

main();

