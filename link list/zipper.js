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

let linkList1 = new LinkList()
linkList1.addHead(1)
linkList1.addHead(2)
linkList1.addHead(3)
linkList1.addHead(4)
linkList1.addHead(5)

let linkList2 = new LinkList()
linkList2.addHead("World")
linkList2.addHead("Hello")

//  5   ->  4   ->  3   ->  2   ->  1
// "Hello"  ->  "World"

//  5   ->  "Hello"     ->  "World"      ->      4   ->  3   ->  2   ->  1

function zipper(list1,list2) {
    
    let tail = list1.head
    let current1 = list1.head.next
    let current2 = list2.head
    let count = 0

    while (current1 !== null && current2 !== null) {
        
        if (count%2 === 0 ) {
            tail.next = current2
            current2 = current2.next
        }else{
            tail.next = current1
            current1 = current1.next
        }

        tail = tail.next
        count = count + 1
    }

    if (current1 === null) {
        tail.next= current2
    }
    if (current2 === null) {
        tail.next= current1
    }

    return list1.head.next.next.next.next.next
}

console.log(zipper(linkList1,linkList2))