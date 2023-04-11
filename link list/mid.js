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
}

let linkList = new LinkList()

//linkList.addHead(6)
linkList.addHead(5)
linkList.addHead(4)
linkList.addHead(3)
linkList.addHead(2)
linkList.addHead(1)

function findMid(list) {
    
    let slow = list.head
    let fast = list.head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

console.log(findMid(linkList))