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

  push(data: T) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // point back to head for circularity
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = this.head; // point back to head for circularity
      }
    }

    this.length = this.length + 1;
    return true;
  }

}