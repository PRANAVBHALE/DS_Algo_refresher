const { Tree,Node } = require(".");


let tree = new Tree()
tree.root = new Node("a")
tree.root.addNode("b")
tree.root.addNode("d")
tree.root.children[0].addNode("c")
console.log('tree',tree)

let letters = []

tree.dfs(node => {
    letters.push(node.data)
})

console.log("letters--->",letters)