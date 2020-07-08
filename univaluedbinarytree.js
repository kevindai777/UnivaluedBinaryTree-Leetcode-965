//Objective is to see if a binary tree is univalued.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a dfs traversal through the graph to check if it 
//is univalued

let set = new Set()
set.add(tree.root.val)
let result = true
    
function dfs(node) {
    if (!node) {
        return
    }
        
    if (!set.has(node.val)) {
        result = false
    }
        
    dfs(node.left)
    dfs(node.right)
}
dfs(tree.root)
    
return result