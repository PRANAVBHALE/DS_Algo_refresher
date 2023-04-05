class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }   
}

class LinkList{
    constructor(){
        this.head = null
    }

    //1
    addHead(data){
        this.head = new Node(data,this.head)
    }

    //2
    size(){

        if (!this.head) {
            return null
        }

        let count = 0
        let node = this.head 

        while(node.next){

            node = node.next
            count++
        }

        return count
    }

    //3
    getHead(){
        if (!this.head) {
            return null
        }

        return this.head
    }

    //4
    getTail(){
        if (!this.head) {
            return null
        }

        let node = this.head

        while(node.next !== null){
            node = node.next
        }

        return node
    }

    //5
    clearAll(){
        this.head = null
        return
    }

    //6
    removeHead(){
        if (!this.head) {
            return
        }

        this.head = this.head.next
    }

    //7
    removeTail(){
        if (!this.head) {
            return
        }

        if(this.head.next === null){
            this.head = null
            return
        }

        let prev = this.head
        let node = prev.next

        while(node && node.next) {
          
            prev = node
            node = node.next
        }

        prev.next = null

        return
    }

    //8
    insertTail(data){
        if (!this.head) {
            this.head = new Node(data)
            return
        }else{
            let lastNode = this.getTail()
            lastNode.next = new Node(data)
            return
        }
    }

    //9
    getAt(index){

        if (index === 0) {
            return this.head
        }

        if (index === 1) {
            return this.head.next
        }

        let count = 0
        let node = this.head

        while(node){

            if (count === index) {
                return node
            }
            node = node.next
            count++
        }

        return null
    }


    //10
    removeAt(index){
       
        if (!this.head) {
            return 
        }

        if (index === 0 ) {
            this.head = this.head.next
            return 
        }

        let prev = this.getAt(index - 1)

        if(!prev || !prev.next){
            return
        }

        prev.next = prev.next.next

        return
    }


    //11
    insertAt(index,data){

        if(!this.head){
            this.head = new Node(data)
            return
        }

        if (index === 0){

            //create node
            let node = new Node(data)

            //link new node'next with old head
            node.next = this.head

            //link head with/as new node
            this.head = node
           
            return
        }

        //create node
        let newNode = new Node(data)

        //get previous node
        let prev = this.getAt(index - 1) || this.getTail()

        //link newnode's next with prev node's next
        newNode.next = prev.next

        //link prev node's next with new node
        prev.next = newNode

        return
    }
}

let linkList = new LinkList()
console.log(linkList.addHead(5))

console.log(linkList.addHead(4))
console.log(linkList.addHead(3))
console.log(linkList.addHead(2))
console.log(linkList.addHead(1))

console.log('old',linkList.head.next)

console.log(linkList.insertAt(7,100))


console.log('new',linkList.head.next.next.next)
