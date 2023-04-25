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

let node1 = new Node(10)
node1.addNode(5)
node1.addNode(20)


let node2 = new Node(10)
node2.addNode(5)
node2.addNode(20)


let node3 = new Node(10)
node3.addNode(1)
node3.addNode(2)

function similarBinaryTree(node1,node2) {

    if (node1 === null && node2 === null) {
        return true
    }

    debugger
    if (node1 === null || node2 === null || node1.data !== node2.data)  {
        return false
    }

    return (similarBinaryTree(node1.left,node2.left) && similarBinaryTree(node1.right,node2.right) )
}

console.log(similarBinaryTree(node1,node2)) //true
console.log(similarBinaryTree(node1,node3)) //false