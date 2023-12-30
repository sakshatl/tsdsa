export { }

class ListNode<T> {
  data: T;
  next: ListNode<T> | null

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}