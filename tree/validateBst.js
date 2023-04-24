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

    validateBst(node,min = null,max = null){

        if(!node) return true
        debugger

        if (min !== null && node < min ) {
            return false
        }

        if (max !== null && node > max) {
            return false
        }

        return (
            this.validateBst(node.left,min,node.data) && this.validateBst(node.right,node.data,max)
        )

    }
}

let node = new Node(100)
node.left = 50
node.right = 1000
console.log(node)

// node.addNode(30)
// node.addNode(120)
// node.addNode(50)
// node.addNode(20)
// node.addNode(150)
// node.addNode(150)
// node.addNode(145)
// node.addNode(110)

console.log(node.validateBst(node))