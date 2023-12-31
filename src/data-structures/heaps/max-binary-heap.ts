export { };

class MaxBinaryHeap<T> {
  private collection: T[];

  constructor() {
    this.collection = [];
  }

  private bubbleUp() {
    let index = this.collection.length - 1;
    let child = this.collection[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.collection[parentIndex];
      if(child > parent) {
        // swap
        this.collection[parentIndex] = child;
        this.collection[index] = parent;
        index = parentIndex;
      } else {
        break; // done
      }
    }
  }

  insert(data: T) {
    this.collection.push(data);
    this.bubbleUp();
  }

  print() {
    return this.collection.toString();
  }
}

function main() {
  const heap = new MaxBinaryHeap<number>();
  
  heap.insert(41);
  heap.insert(39);
  heap.insert(33);
  heap.insert(18);
  heap.insert(27);
  heap.insert(12);

  console.log(heap.print());

  heap.insert(55);

  console.log(heap.print());
}

main();