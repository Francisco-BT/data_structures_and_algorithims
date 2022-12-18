const TreeNode = require("./TreeNode");

class BinaryTree {
  #root;
  constructor(root) {
    this.#root = root;
  }

  get root() {
    return this.#root;
  }

  insert(value, node = this.#root) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        this.insert(value, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
      } else {
        this.insert(value, node.right);
      }
    }
  }

  search(searchValue, node) {
    if (!node || node.value === searchValue) {
      return node;
    }

    if (searchValue < node.value) {
      return this.search(searchValue, node.left);
    } else {
      return this.search(searchValue, node.right);
    }
  }

  max(node) {
    if (!node.right) {
      return node;
    }
    return this.max(node.right);
  }

  printInOrder(node) {
    if (!node) {
      return;
    }

    this.print(node.left);
    console.log(node.value);
    this.print(node.right);
  }

  printPreOrder(node) {
    if (!node) {
      return;
    }

    console.log(node.value);
    this.printPreOrder(node.left);
    this.printPreOrder(node.right);
  }

  printPostOrder(node) {
    if (!node) {
      return;
    }

    this.printPostOrder(node.left);
    this.printPostOrder(node.right);
    console.log(node.value);
  }
}

const tree = new BinaryTree(new TreeNode(50));
tree.insert(25);
tree.insert(75);
tree.insert(10);
tree.insert(33);
tree.insert(56);
tree.insert(89);
tree.insert(4);
tree.insert(11);
tree.insert(30);
tree.insert(40);
tree.insert(52);
tree.insert(61);
tree.insert(82);
tree.insert(95);
// tree.print(tree.root);
console.log("node for number 56: ", tree.search(56, tree.root));
console.log("node for number 534: ", tree.search(534, tree.root));
console.log("max value in the tree: ", tree.max(tree.root));

// Books tree
const booksTree = new BinaryTree(new TreeNode("Moby Dick"));
booksTree.insert("Great Expectations");
booksTree.insert("Robinson Crusoe");
booksTree.insert("Alice in Wonderland");
booksTree.insert("Lord of the Flies");
booksTree.insert("Pride and Prejudice");
booksTree.insert("The Odyssey");

console.log("PRE ORDER");
booksTree.printPreOrder(booksTree.root);

console.log("\nPOST ORDER");
booksTree.printPostOrder(booksTree.root);
