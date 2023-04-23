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

    checkData(data){

        if (data === this.data) {
            return this
        }else if (data < this.data && this.left) {
            return this.left.checkData(data)
        }else if( data > this.data && this.right){
            return this.right.checkData(data)
        }

        return null
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

console.log(node.checkData(145))