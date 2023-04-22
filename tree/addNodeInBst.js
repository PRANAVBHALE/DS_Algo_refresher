class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }

    addNode(data){

        if (data < this.data && this.left) {
            this.left.addNode(data)
        } else if(data < this.data) {
            this.left = new Node(data)
        } else if(data > this.data && this.right){
            this.right.addNode(data)
        }else{
            this.right = new Node(data)
        }
    }
}

let node = new Node(100)
node.addNode(30)
node.addNode(120)
node.addNode(50)
node.addNode(20)
node.addNode(150)
node.addNode(150)
node.addNode(145)
node.addNode(110)


console.log(node)
// let node1 = new Node(10)
// let node2 = new Node(9)
// let node3 = new Node(8)
// let node4 = new Node(7)
// let node5 = new Node(6)
// let node6 = new Node(5)

// node1.left = node3
// node1.right = node

//console.log(node1)