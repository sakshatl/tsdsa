export { }

export class ListNode<T> {
  data: T;
  next: ListNode<T> | null

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}


export class SinglyLinkedList<T> { 
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert a node at the end of the list
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

  // remove a node from the end of the list
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

  // insert a node at the beginning of the list
  unshift(data: T): boolean {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    }

    this.length = this.length + 1;

    return true;
  }

  // remove a node from the beginning of the list
  shift(): ListNode<T> | undefined {
    if (!this.head || !this.tail) return undefined;

    let temp: ListNode<T>;

    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.head;
      this.head = temp.next;
      temp.next = null;
    }

    this.length = this.length - 1;
    return temp;
  }

  // return a node at particular 'index' of the list
  get(index: number) : ListNode<T> | undefined | null {
    if (!this.head || !this.tail) return undefined;
    if (index < 0 || index >= this.length) return undefined;
  
    let currentIndex = 0;
    let current: ListNode<T> | null = this.head;

    while (currentIndex < index) {
      current = current && current.next;
      currentIndex = currentIndex + 1;
    }

    return current;
  }

  // print items of linked list
  print(): string {
    let list: T[] = [];

    let current = this.head;

    while (current) {
      const value = current.data as T;
      list.push(value);
      current = current.next;
    }

    return list.toString() || '';
  }
}

function main() {
  const list = new SinglyLinkedList();

  const node1 = new ListNode<number>(10);
  const node2 = new ListNode<number>(20);
  const node3 = new ListNode<number>(30);

  list.push(node1.data);
  list.push(node2.data);
  list.push(node3.data);
  list.push(40);
  list.push(50);

  console.log(list.print())

  // console.log(list.get(1), "1");
  // console.log(list.get(2), "2");
  // console.log(list.get(4), "4");
  // console.log(list.get(5), "5");
  // console.log(list.get(-1), "-1");

  list.unshift(100);
  list.unshift(200);


  console.log(list.print());

  const removed1 = list.shift();
  const removed2 = list.shift();

  console.log(removed1);
  console.log(removed2);

  console.log(list.print())
}

main();
