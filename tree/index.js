class Node{
    constructor(data){
        this.data = data
        this.children = []
    }

    addNode(data){
        this.children.push(new Node(data))
    }

    removeNode(data){
        this.children = this.children.filter(node => node.data !== data)
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    dfs(fn){

        let arr = [this.root]

        while(arr.length){

            let node = arr.shift()

            arr.unshift(...node.children)
            fn(node)
        }
    }
}

// let tree = new Tree()
// tree.root = new Node("root")
// tree.root.addNode("a")
// tree.root.addNode("b")
// tree.root.addNode("c")
// tree.root.children[0].addNode("d")
// console.log('tree',tree)

// let letters = []

// tree.dfs(node => {
//     letters.push(node.data)
// })

// console.log("letters--->",letters)

module.exports = {
    Tree,
    Node
}