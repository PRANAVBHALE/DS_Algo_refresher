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

function validateBst(node,min = null,max = null){

    if(!node) return true
    debugger

    if (min !== null && node < min ) {
        return false
    }

    if (max !== null && node > max) {
        return false
    }

    return (
        validateBst(node.left,min,node.data) && validateBst(node.right,node.data,max)
    )

}

let node = new Node(100)
node.left = 1000
node.right = 50
console.log(node)

console.log(validateBst(node))