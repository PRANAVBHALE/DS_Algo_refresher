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

linkList.addHead(5)
linkList.addHead(4)
linkList.addHead(3)
linkList.addHead(2)
linkList.addHead(1)

function reverseLinkList(list) {

    let prev = null
    let curr = list.head

    while(curr !== null){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    list.head = prev
    return list
}

console.log(linkList)
console.log(reverseLinkList(linkList))


//null      1    ->   2    ->   3    ->   4    ->   5
//prev      curr    next