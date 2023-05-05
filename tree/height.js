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

let node = new Node(5)
node.addNode(1)
node.addNode(10)
node.addNode(0)
node.addNode(2)
node.addNode(9)
node.addNode(20)
console.log(node)

function height(root) {
    
    if (root === null) {
        return 0
    }else{
        let leftHeight = height(root.left)
        let rightHeight = height(root.right)

        debugger
        return 1 + Math.max(leftHeight,rightHeight)
    }

}

console.log(height(node))