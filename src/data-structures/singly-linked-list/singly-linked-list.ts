export { }

class ListNode<T> {
  data: T;
  next: ListNode<T> | null

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}


class SinglyLinkedList<T> { 
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert at the end of the list
  push(data: T): boolean {
    const newNode = new ListNode(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if(this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length = this.length + 1;
    
    return true;
  }

  // remove from the end of the list
  pop(): ListNode<T> | undefined {
    if (!this.head || !this.tail) return undefined;
    
    let current = this.head;
    let previous: ListNode<T> | null = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.length = this.length - 1;

    return current;
  }
}

function main() {
  const list = new SinglyLinkedList();

  const node1 = new ListNode<number>(10);
  const node2 = new ListNode<number>(20);
  const node3 = new ListNode<number>(30);

  list.push(node1);
  list.push(node2);
  list.push(node3);

  console.log(list);

  console.log(list.pop());
  console.log(list.pop());

  console.log(list)
}

main();
