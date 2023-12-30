class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null;
  
  constructor() {
    this.root = null;  
  }

  // insert a new node
  insert(data: T) {
    const newNode = new TreeNode(data);

    if(this.root === null) {
      this.root = newNode;
      return true;
    } else {
      let current = this.root;
      while(true) {
        if(data === current.data) {
          return false;
        }
        if (data < current.data) {
          // left side
          if(current.left === null) {
            // found our spot
            current.left = newNode;
            return true;
          } else {
            current = current.left;
          }
        } else if (data > current.data) {
          // right side
          if(current.right === null) {
            // found our spot
            current.right = newNode;
            return true;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find a node
  exists(data: T) {
    if (!this.root) return false;
    if (this.root.data === data) return true;

    let current: TreeNode<T> | null = this.root;
    let found = false;

    while (current && !found) {
      if (data < current.data) {
        // left
        current = current.left;
      } else if (data > current.data) {
        // right
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }

}

function main() {
  const tree = new BinarySearchTree();

  tree.root = new TreeNode(10);
  tree.root.right = new TreeNode(15); // greater than 10
  tree.root.left = new TreeNode(7); // less than 10

  console.log(tree.exists(20)); // false
  console.log(tree.exists(10)); // true
  console.log(tree.exists(7)); // true
  console.log(tree.exists(17)); // false
}

main();