const { Node } = require(".")

class RootNode{
    constructor(data){
        this.data = data
        this.children = []
    }

    addNode(data){
        this.children.push(new Node(data))
    }    
}

//           1          //1
//          /\ \    
//         2  3 4       //3
//        / \ !  \
//       5  6 7   8     //4
let root = new RootNode(1)
root.addNode(2)
root.addNode(3)
root.addNode(4)
root.children[0].addNode(5)
root.children[0].addNode(6)
root.children[1].addNode(7)
root.children[2].addNode(8)

function calWidth(root) {
    let arr = [ root,"stopper" ]
    let counters = [0]

    while (arr.length > 1) {
        
        let node = arr.shift()

        if (node === "stopper") {
            counters.push(0)
            arr.push("stopper")
        }else{
            arr.push(...node.children)
            counters[counters.length - 1]++
        }

    }

    return counters

}



console.log(root)
console.log(calWidth(root))