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

  private sinkDown() {
    let index = 0;
    const length = this.collection.length;
    const currentParent = this.collection[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap: number | null = null;

      let leftChild: T | undefined = undefined;
      let rightChild: T | undefined = undefined;

      // check if the left and right child indexes are in bounds
      if (leftChildIndex < length) {
        leftChild = this.collection[leftChildIndex];
        if(leftChild > currentParent) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.collection[rightChildIndex];

        const cond1 = swap === null && rightChild > currentParent;
        const cond2 = swap !== null && leftChild !== undefined && leftChild !== null && rightChild > leftChild;

        if(cond1 || cond2) {
          swap =  rightChildIndex;
        }
      }

      if (swap === null) break;
      this.collection[index] = this.collection[swap];
      this.collection[swap] = currentParent;
      index = swap;
    }

  }

  insert(data: T) {
    this.collection.push(data);

    // bubble up
    this.bubbleUp();
  }

  extractMax() {
    if (!this.collection.length) return undefined;

    const max = this.collection[0];
    const end = this.collection.pop() as T;
    this.collection[0] = end;

    // sink down
    this.sinkDown();

    return max;

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