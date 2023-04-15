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

linkList.addHead(10) //0
linkList.addHead(9) //1
linkList.addHead(8) //2
linkList.addHead(7) //3
linkList.addHead(6) //4
linkList.addHead(5) //5
linkList.addHead(4) //6
linkList.addHead(3) //7
linkList.addHead(2) //8
linkList.addHead(1) //9

function nthNode(list,n) {

    let slow = list.head
    let fast = list.head
    let count = 0

    while(count < n){
        fast = fast.next
        count++
    }

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
    }

    return slow
}

console.log(nthNode(linkList,3))
console.log(nthNode(linkList,0))
console.log(nthNode(linkList,9))
console.log(nthNode(linkList,8))