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

function isCyclic(list) {
    
    //slow pointer
    let slow = list.head

    //fast pointer
    let fast = list.head

    while(fast.next && fast.next.next){

        //slow + 1
        slow = slow.next

        //fast + 2
        fast = fast.next.next

        //common meeting point i.e. cyclic
        if(slow === fast){
            return true
        }
    }

    //non cyclic
    return false
}

//cyclic link
linkList.head.next.next.next.next.next = linkList.head.next.next

//console.log(linkList.head.next.next)
console.log(isCyclic(linkList))
console.log(isCyclic(linkList))