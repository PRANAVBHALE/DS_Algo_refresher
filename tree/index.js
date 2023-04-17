class Node{
    constructor(data){
        this.data = data
        this.children = []
    }

    addNode(data){
        this.children.push(new Node(data))
    }

    removeNode(data){
        this.children.filter(node => node.data !== data)
    }
}

let rootNode = new Node("root")
rootNode.addNode(1)
rootNode.addNode(2)
rootNode.addNode(3)
rootNode.addNode(4)
rootNode.addNode(5)
console.log(rootNode)

class Tree{
    constructor(){
        this.root = null
    }
}