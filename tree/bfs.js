const { Tree,Node } = require(".");


let tree = new Tree()
tree.root = new Node("a")
tree.root.addNode("b")
tree.root.addNode("c")
tree.root.children[0].addNode("d")
console.log('tree',tree)

let letters = []

tree.dfs(node => {
    letters.push(node.data)
})

console.log("letters--->",letters)