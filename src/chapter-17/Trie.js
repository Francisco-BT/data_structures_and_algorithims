const TreeNode = require("./TrieNode");

class Trie {
  root;

  constructor() {
    this.root = new TreeNode();
  }

  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }

    return currentNode;
  }

  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        const newNode = new TreeNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }

    currentNode.children["*"] = null;
  }

  collectAllWords(node = null, word = "", words = []) {
    const currentNode = node || this.root;

    for (const [key, childNode] of Object.entries(currentNode.children)) {
      if (key === "*") {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }

    return words;
  }

  autocomplete(prefix) {
    const currentNode = this.search(prefix);

    if (!currentNode) {
      return null;
    }

    return this.collectAllWords(currentNode);
  }

  printAllKeys(node = null) {
    const currentNode = node || this.root;

    for (const [key, childNode] of Object.entries(currentNode.children)) {
      console.log(key);

      if (key !== "*") {
        this.printAllKeys(childNode);
      }
    }
  }

  autoCorrect(typo) {
    let currentNode = this.root;
    let wordSoFar = "";

    for (const char of typo) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
        wordSoFar += char;
      } else {
        return wordSoFar + this.collectAllWords(currentNode)[0];
      }
    }
    return word;
  }
}

const trie = new Trie();
// console.log(trie.collectAllWords());
// trie.printAllKeys();
trie.insert("cat");
trie.insert("catnap");
trie.insert("catnip");

console.log("auto correct catnar: ", trie.autoCorrect("catnar"));
console.log(trie.autoCorrect("caxasfdtj"));
